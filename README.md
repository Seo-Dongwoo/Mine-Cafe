# 카페 추천 프로젝트 ☕
## 📄 프로젝트 목적 및 설명
* ### 목적
   * Firebase와 Context Api를 연동하여 회원가입, 로그인, 비밀번호 찾기 기능 구현과 Oauth 기능 구현
   * Kakao Map API를 이용해 지도 구현
   * Firestore와 Redux를 연동하여 Kakao Map에서 카페를 찾아 나의 카페 리스트에 카테고리 별로 추가 
   * Firestore와 Redux를 연동하여 카페 리스트에 추천된 카페들을 좋아요 공유 기능 구현
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
## 이슈 및 해결
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
- 전역적인 상태 관리를 하기 위해 가장 고민을 많이 했던 파트였고 상태 관리로는 Redux를 이용했다.
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
- Redux를 이용한 상태 관리는 익숙치 않아서 다른 Redux를 공부하기 위한 프로젝트를 병행하면서 진행하였다.
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

### Styled-Components
- 처음에는 css폴더를 만들고 진행하였으나, styled-components도 사용해보고 싶어서 리팩토링을 진행하였고, className에 사용하는 삼항연산자에 대한 부분은 계속 공부중에있고 리랙토링 할 예정이다.

### 그 외
- Firestore 필드에 카테고리를 나눠서 데이터를 저장하는 부분에서 어려웠지만 잘 이해하고 숙지하였다.

POST부분
![firestore1](https://user-images.githubusercontent.com/83106932/197471084-28be9b3f-469d-4532-84c7-962554e8036b.png)

좋아요 부분
![firestore2](https://user-images.githubusercontent.com/83106932/197471096-71d436b3-20e7-42c8-b495-8ec22f34f994.png)


## 그 외 이슈는 Issue 카테고리에 있으며, 이슈 해결 후 이슈에 대한 설명은 Pr에 올려놓았습니다.
---
## 배포
https://minecafe-web.netlify.app



