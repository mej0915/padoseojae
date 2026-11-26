# 사운드 출처·사용 권한 (S3)

모든 소리는 실제 녹음 파일입니다(합성음 없음). 파일은 Wikimedia Commons에서 받아 자르고·루프 처리·정규화·ogg 변환만 했습니다.

| 파일 | 용도 | 원본(Commons) | 라이선스 | 비고 |
|---|---|---|---|---|
| wave-near.ogg | 가까운 파도 | Oceanwavescrushing.ogg (Luftrum, 해변 2m 거리 녹음) | CC BY 3.0 | **출처 표시 필요** |
| wave-far.ogg | 먼 파도 | 위와 같은 녹음의 다른 구간 | CC BY 3.0 | 고음을 줄여(저역통과) 먼 느낌. 별도 녹음이 아님 |
| wind-birds.ogg | 약한 바람·새 | Gentle_breeze_and_birds_singing.ogg | Public domain(Commons 표기) | |
| gull.ogg | 가끔 멀리서 갈매기 | Gull_1.ogg, Gull_2.ogg (avphilli) | Public domain(Commons 표기) | 미국 갈매기 종 |
| page.ogg | 책 펼침·책장 | Turning_a_page.ogg | Public domain(Commons 표기) | |
| step1~4.ogg | 걸음 | Walking-on-gravel-38827.ogg | CC0 | **모래가 아니라 자갈 소리.** 모래 발소리 음원은 확보하지 못해 임시 대체 |

## 표기문 (CC BY 3.0)
"Ocean waves crushing" by Luftrum, CC BY 3.0, via Wikimedia Commons (commons.wikimedia.org/wiki/File:Oceanwavescrushing.ogg). 길이 조정·필터 처리함.

## 확인 못 한 것
- 위 라이선스는 Commons 파일 페이지 메타데이터 기준입니다. 상업 출시 전에 각 파일 페이지를 다시 확인하세요.
- 모래 발소리, 강아지 짖는 소리는 쓸 수 있는 음원을 확보하지 못했습니다(후보만 있음, 미사용).

## S4 추가 사항
- **조개 줍는 소리(pick)**: 새 녹음을 쓰지 않았습니다. 위 CC0 자갈 걸음(step3)을 높고 가볍게(재생 속도 1.55배) 재생한 **임시 대체**입니다. 별도 음원 없음.
- **모래 발소리 / 모래 긋는 소리 / "앗차" 목소리**: S4에서 다시 찾았으나 Commons API가 요청 제한(rate limit)으로 응답하지 않았고 freesound는 접속이 막혀 **확보하지 못했습니다.** 자갈 소리를 그대로 두며, 모래 긋는 소리는 넣지 않았습니다(없음).
- 거리감: 새 파일 없이 코드로 처리 — 카메라에서 멀어질수록 걸음 소리를 작게·고음을 줄여(저역통과) 재생.
- 빈도 제한: 걸음 180ms, 책장 400ms, 조개 250ms, 갈매기 5초 이내 재생 금지(겹쳐 울리지 않게).
