# 카페 추천 프로젝트 ☕
## 📄 프로젝트 목적 및 설명
* ### 목적
   * Firebase와 Context Api를 이용해 Authentication를 이해 및 학습
   * Kakao Map API를 이용해 지도 구현
   * Firestore와 Redux를 연동하여 Kakao Map에서 카페를 찾아 나의 카페 리스트에 카테고리 별로 추가 
   * Firestore와 Redux를 연동하여 카페 리스트에 추천된 카페 좋아요 공유 기능 구현
* ### 설명
   * #### Authentication 페이지 (로그인/회원가입)
      * Context API를 firebase에 연동하여 Authentication 상태관리
      * 로그인/회원가입 async/await를 이용해서 비동기 처리
      * 조건문, Firebase 에러코드를 이용해서 유효성검사 
      * firebase를 이용한 비밀번호 찾기 구현
      * react hooks를 이용해 로그인 유저의 상태관리
   * #### Kakao Map 페이지
      * Kakao Map API를 이용해서 지도 가져오기
      * 검색창에 원하는 카페 및 장소 입력 시 marker 띄우기
      * 카페 카테고리 버튼 클릭 시 주변 카페 marker 띄우기
      * Context API를 이용해서 검색한 카페 및 장소 상태관리
      * Redux를 이용해서 로그인 유저만이 검색한 카페를 카테고리별로 추가 구현
      * OpenWeatherMap API를 이용해서 현재 위치한 장소의 날씨 불러오기
   * #### DashBoard 페이지
      * Redux를 이용해서 추천 카페 상태관리 (추가 및 삭제)
      * Firestore와 react hooks를 이용해서 좋아요 기능 구현 
      * 추천 카페 리스트에 Pagination 기능 구현
--- 
## 🛠 개발 기간 및 사용 기술
- **개발 기간** : 2022-07-09 ~ 2022-10-10
* **사용 기술** 

  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <br />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=black">
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <img src="https://img.shields.io/badge/firestore-FF7139?style=for-the-badge&logo=firebase&logoColor=white">
  <br />
  <img src="https://img.shields.io/badge/fontawesome-528DD7?style=for-the-badge&logo=font-awesome&logoColor=white">
  <img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/mui-007FFF?style=for-the-badge&logo=mui&logoColor=white"/>
---
## 🤩 새로 배우거나 집중적으로 공부한 것
- Redux와 Context-api를 이용한 전역적인 상태 관리
- Kakao Map API
- Firebase와  Context API를 이용해서 Authentication 상태관리
- Firestore에 데이터 저장 및 가져오기
---
## 🔧 이슈 및 해결
### Authentication (src/contexts/AuthContext.js)
- Oauth 로그인 과정에서 propmt가 뜨지 않는 버그에 직면하였지만 setCustomParameters를 이용하여 해결하였고 비동기로 Firestore에 로그인 유저 정보를 저장하였다.
- react hooks을 사용하여 user의 상태를 관리하였다.

### Kakao Map API (src/contexts/KakaoContext.js)
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
### CAFE LIST
- Map에 검색한 장소를 Firestore와 Redux 사용하여 CRUD를 진행 하였고, 카테고리 부분을 따로 컴포넌트로 만들었는데 목록이 뜨지 않아 난황을 겪었지만 value값을 잘 적용시켜 해결하였다.
```
const AddCafeModal = ({ modal, setModal }) => {
  const { currentUser } = useAuth();
  const initialState = {
    user_id: currentUser.uid,
    place_name: "",
    address_name: "",
    reason: "",
  };
  const [state, setState] = useState(initialState);
  const { place_name, address_name, reason } = state;
  const [message, setMessage] = useState({ error: false, msg: "" });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onCloseHandler = () => {
    setModal({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");

    if (place_name === "" || address_name === "" || reason === "") {
      setMessage({ error: true, msg: "추가가 실패하였습니다." });
      return;
    } else {
      setMessage({ error: false, msg: "카페가 추가되었습니다." });
    }

    dispatch(addCafeInitiate(state));
    setState({ place_name: "", address_name: "", reason: "" });
  };

  useEffect(() => {
    setState({ ...state, ...modal.content });
  }, [setState]);

  return (
    <Modal onSubmit={handleSubmit}>
      {message?.msg && (
        <Message
          variant={message?.error ? "danger" : "success"}
          onClose={() => setMessage("")}
        >
          {message?.msg}
        </Message>
      )}
      <Place value={modal.content}>
        <PlaceName name="place_name">
          <h2>{modal.content.place_name}</h2>
        </PlaceName>
        <AddressName name="address_name">
          <h3>{modal.content.address_name}</h3>
        </AddressName>
      </Place>
      <Category onChange={handleChange} name="reason" value={reason} />
      <ModalBtnBox>
        <AddBtn>추가</AddBtn>
        <CancelBtn onClick={onCloseHandler}>취소</CancelBtn>
      </ModalBtnBox>
    </Modal>
  );
};

```
- Dashboard를 구현중에 로그인한 유저의 id와 좋아요 및 카페를 추가한 유저의 id가 같을 경우에만 좋아요를 취소할 수 있고 카페를 삭제할 수 있도록 구현하였다.
```
const LikeCafe = ({ cafe }) => {
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);
  const { currentUser } = useAuth();

  const likeDocRef = collection(db, "posts", cafe.id, "likes");

  useEffect(() => {
    setHasLiked(likes.findIndex((like) => like.id === currentUser?.uid) !== -1);
  }, [likes]);

  useEffect(() => {
    onSnapshot(likeDocRef, (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db, cafe.id]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, "posts", cafe.id, "likes", currentUser.uid));
    } else {
      await setDoc(doc(db, "posts", cafe.id, "likes", currentUser.uid), {
        username: currentUser.displayName,
      });
    }
  };

  return (
    <LikeButton onClick={likePost}>
      {hasLiked ? <FillHeart /> : <OutlineHeart />}
      <div>{likes.length > 0 && <p> {likes.length} likes</p>}</div>
    </LikeButton>
  );
};
```

### Firestore

#### POST부분
![firestore1](https://user-images.githubusercontent.com/83106932/197471084-28be9b3f-469d-4532-84c7-962554e8036b.png)
---
#### 좋아요 부분
![firestore2](https://user-images.githubusercontent.com/83106932/197471096-71d436b3-20e7-42c8-b495-8ec22f34f994.png)


## 그 외 이슈는 Issue 카테고리에 있으며, 이슈 해결 후 이슈에 대한 설명은 Pr에 올려놓았습니다.
---
## 배포
https://minecafe-web.netlify.app



