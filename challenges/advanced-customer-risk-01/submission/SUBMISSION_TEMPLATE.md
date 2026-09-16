# Submission Template

> 아래는 학습자 제출 형식입니다. reference 폴더의 모범답안을 보기 전에 작성하는 것을 권장합니다.

## 1. risk_scores.csv

필수 열:

```text
customer_id,customer_name,renewal_days,usage_drop_pct,adoption_pct,inactive_days,raw_score,mitigation_adjustment,final_score,risk_level,override,at_risk_mrr_krw,evidence
```

## 2. executive_brief.md

### Executive Summary
- HIGH/CRITICAL 고객 수:
- 총 MRR at Risk:
- 가장 중요한 한 문장:

### Priority 1
- 고객:
- 근거:
- 즉시 조치:
- Human Approval:

### Priority 2
...

### Priority 3
...

### Limitations
- 데이터:
- 정책:
- AI 사용 시 주의:

## 3. data_quality_report.md

### Normal Pack
- 검사 항목:
- 발견 오류:
- 분석 가능 여부:

### Failure Pack
각 오류에 대해:
- file
- row/key
- issue
- severity
- 처리: reject / quarantine / warn
- downstream impact

## 4. workflow_design.md

다음을 순서대로 작성:

1. Ingest
2. Validate
3. Join
4. Deterministic Score
5. AI Explanation Draft
6. Human Review
7. Approved Action
8. Monitoring / Re-run
9. Audit Log
10. Policy Change Handling

### 역할 분리
- Code/Rules:
- AI:
- Human:
- 금지 자동화:
