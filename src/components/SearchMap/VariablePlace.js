/* global kakao */
import React, { useContext, useEffect } from "react";
import "../../assets/css/SearchMap/Toggle/VariablePlace.css";
import { KakaoContext } from "../../contexts/KakaoContext";
import styled from "styled-components";

const VariablePlace = () => {
  const { Place, setPlaces } = useContext(KakaoContext);

  const cafeMarker = () => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}&libraries=services&autoload=false`;

    document.body.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

        const container = document.getElementById("map");

        // 초기 위치를 내가 사는 곳으로 설정
        const options = {
          center: new kakao.maps.LatLng(37.661, 127.07),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        // 장소 검색 객체를 생성
        const ps = new kakao.maps.services.Places(map);

        // 내 위치 주변의 카페를 검색합니다
        const findCafe = () => {
          ps.categorySearch("CE7", placesSearchCB, { useMapBounds: true });
        };

        document.getElementById("CE7").addEventListener("click", findCafe);

        // 키워드로 장소를 검색
        ps.keywordSearch(Place, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB(data, status) {
          if (status === kakao.maps.services.Status.OK) {
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가
            let bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);
              bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }
            // 검색된 장소 위치를 기준으로 지도 범위를 재설정
            map.setBounds(bounds);

            setPlaces(data);
            console.log(data);
          }
        }

        // 지도에 마커를 표시하는 함수
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시
          let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });
          console.log(Place);
          // 마커에 클릭이벤트를 등록
          kakao.maps.event.addListener(marker, "click", function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent(
              `<div style="display: block;
              background: #50627F;
              color: #fff;
              text-align: center;
              width: 230px;
              height: 24px;
              line-height:22px;
              border-radius:5px;
              padding:0px 5px;">` +
                place.place_name +
                "</div>"
            );
            infowindow.open(map, marker);
          });
        }
      });
    };
  };

  useEffect(() => {
    cafeMarker();
  }, [Place]);

  return (
    <Container>
      <Title>주변 카페 찾기</Title>
      <div id="category">
        <div id="CE7" data-order="4">
          <span className="category_bg cafe"></span>
          주변 카페 검색
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 25%;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h3`
  position: absolute;
  padding: 20px;
  width: 100%;
  height: 100%;
`;

export default VariablePlace;
