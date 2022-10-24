# 나만의 카페 사이트 ☕
---
## 프로젝트에 대한 설명
- Firebase와 Context Api를 연동하여 회원가입, 로그인, 비밀번호 찾기 기능 구현과 Oauth 기능 구현
- Kakao Map API를 이용해 지도 구현
- Firestore와 Redux를 연동하여 지도에 카페를 찾아 나의 카페 리스트에 카테고리 별로 추가 
- Firestore와 Redux를 연동하여 나만의 카페를 따로 추가 및 좋아요 기능 구현
---
## 개발 기간 및 사용 기술
- 개발 기간: 2022-07-09 ~ 2022-10-10
- 사용 기술: React, Redux, ContextAPI, Styled-Components, KakaoMapAPI, Firebase, Firestore
---
## 집중적으로 공부 한 것
- Redux와 Context-api를 이용한 전역적인 상태 관리
- Kakao Map API
- Firebase와 연동하여 Authentication기능 구현
- Firestore에 데이터 저장 및 가져오기
---
## 이슈
Authentication (src/contexts/AuthContext.js)
- Oauth 로그인 과정에서 propmt가 뜨지 않는 버그에 직면하였지만 setCustomParameters를 이용하여 해결하였고 비동기로 Firestore에 로그인 유저 정보를 저장하였다.
- react hooks을 사용하여 user의 상태를 관리하였다.

Kakao Map API (src/contexts/KakaoContext.js)
- react hooks를 이용하여 Place에 관한 상태를 관리하였다.
- 검색할 키워드 값이 빈 값이여도 키워드 검색을 호출해서 400 error가 발생하였고, 키워드 값이 빈 값인 경우 키워드 검색 API를 호출하지 않게 조건문으로 값을 체크해주었다.
```
function checkPlace() {
          if (!Place) {
            return false;
          } else {
            // 키워드로 장소를 검색
            ps.keywordSearch(Place, placesSearchCB);
          }
        }

checkPlace();
```
CAFE LIST
- 전역적인 상태 관리를 하기 위해 가장 고민을 많이 했던 파트였고 상태 관리로는 Redux를 이용했다.
- Map에 검색한 장소를 Firestore와 Redux 사용하여 CRUD를 진행 하였고, 카테고리 부분을 따로 컴포넌트로 만들었는데 목록이 뜨지 않아 난황을 겪었지만 value값들을 잘 적용시켜 해결하였다.
- 



---
## 배포
https://minecafe-web.netlify.app



