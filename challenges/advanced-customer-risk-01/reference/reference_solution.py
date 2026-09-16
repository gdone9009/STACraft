"""Reference solution for Advanced Challenge 01.

Run from anywhere:
    python challenges/advanced-customer-risk-01/reference/reference_solution.py

Uses Python standard library only.
"""
from __future__ import annotations

import csv
from collections import Counter, defaultdict
from datetime import date, datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "data"
AS_OF = date(2026, 9, 15)


def read_csv(name):
    with (DATA / name).open(encoding="utf-8", newline="") as f:
        return list(csv.DictReader(f))


def d(s):
    return datetime.strptime(s, "%Y-%m-%d").date()


customers = {r["customer_id"]: r for r in read_csv("customers.csv")}
contracts = {r["customer_id"]: r for r in read_csv("contracts.csv")}
invoices = read_csv("invoices.csv")
usage_rows = read_csv("usage_14d.csv")
tickets = read_csv("support_tickets.csv")
events = read_csv("account_events.csv")

usage = defaultdict(dict)
for r in usage_rows:
    usage[r["customer_id"]][r["period"]] = r

payment_risk = Counter()
for r in invoices:
    outstanding = int(r["amount_krw"]) - int(r["paid_krw"])
    overdue_days = (AS_OF - d(r["due_date"])).days
    if outstanding >= 1_000_000 and overdue_days > 30:
        payment_risk[r["customer_id"]] += 1

support_risk = Counter()
for r in tickets:
    age = (AS_OF - d(r["opened_date"])).days
    if 0 <= age <= 45 and r["priority"] in {"P1", "P2"}:
        support_risk[r["customer_id"]] += 1

valid_events = defaultdict(list)
for r in events:
    if r["verified"] == "TRUE" and d(r["event_date"]) <= AS_OF <= d(r["valid_until"]):
        valid_events[r["customer_id"]].append(r["event_type"])

negative_points = {
    "CHAMPION_LEFT": 25,
    "EXECUTIVE_ESCALATION": 25,
    "CANCELLATION_REQUEST": 40,
}
mitigation_points = {
    "PLANNED_SHUTDOWN": -20,
    "MIGRATION_WINDOW": -20,
}

results = []
for customer_id in sorted(customers):
    c = customers[customer_id]
    ct = contracts[customer_id]
    prev = usage[customer_id]["PREVIOUS"]
    cur = usage[customer_id]["CURRENT"]

    renewal_days = (d(ct["contract_end"]) - AS_OF).days
    renewal_hit = 0 <= renewal_days <= 60

    prev_active = int(prev["active_users"])
    cur_active = int(cur["active_users"])
    usage_drop_pct = (prev_active - cur_active) / prev_active * 100
    usage_hit = usage_drop_pct >= 30

    seats = int(ct["contracted_seats"])
    adoption_pct = cur_active / seats * 100
    adoption_hit = adoption_pct < 40

    inactive_days = (AS_OF - d(cur["last_login_date"])).days
    inactivity_hit = inactive_days >= 14

    payment_hit = payment_risk[customer_id] > 0
    support_hit = support_risk[customer_id] >= 2

    event_types = valid_events[customer_id]
    event_score = sum(negative_points.get(x, 0) for x in event_types)
    mitigation = sum(mitigation_points.get(x, 0) for x in event_types)

    raw_score = (
        20 * renewal_hit
        + 20 * usage_hit
        + 15 * adoption_hit
        + 20 * inactivity_hit
        + 20 * payment_hit
        + 15 * support_hit
        + event_score
    )

    final_score = max(0, min(100, raw_score + mitigation))
    override = ""

    if "RENEWAL_SIGNED" in event_types:
        final_score = 0
        override = "RENEWAL_SIGNED"

    if final_score < 25:
        risk = "LOW"
    elif final_score < 50:
        risk = "MEDIUM"
    elif final_score < 75:
        risk = "HIGH"
    else:
        risk = "CRITICAL"

    if "CANCELLATION_REQUEST" in event_types:
        risk = "CRITICAL"
        final_score = max(75, final_score)
        override = "CANCELLATION_REQUEST"
    elif "PLANNED_SHUTDOWN" in event_types:
        override = "PLANNED_SHUTDOWN"
    elif "MIGRATION_WINDOW" in event_types:
        override = "MIGRATION_WINDOW"
    elif "EXECUTIVE_ESCALATION" in event_types:
        override = "EXECUTIVE_ESCALATION"

    mrr = int(ct["mrr_krw"])
    at_risk = mrr if ct["status"] == "ACTIVE" and risk in {"HIGH", "CRITICAL"} and override != "RENEWAL_SIGNED" else 0

    results.append({
        "customer_id": customer_id,
        "customer_name": c["customer_name"],
        "raw_score": raw_score,
        "mitigation": mitigation,
        "final_score": final_score,
        "risk": risk,
        "at_risk_mrr": at_risk,
    })

expected_scores = {
    "C001": 65, "C002": 0, "C003": 35, "C004": 100,
    "C005": 0, "C006": 0, "C007": 35, "C008": 55,
    "C009": 0, "C010": 80, "C011": 0, "C012": 100,
}
for row in results:
    assert row["final_score"] == expected_scores[row["customer_id"]], row

total_at_risk = sum(r["at_risk_mrr"] for r in results)
assert total_at_risk == 25_600_000

for row in results:
    print(
        row["customer_id"],
        row["customer_name"],
        row["final_score"],
        row["risk"],
        f'{row["at_risk_mrr"]:,}',
    )

print("TOTAL_MRR_AT_RISK", f"{total_at_risk:,}")
