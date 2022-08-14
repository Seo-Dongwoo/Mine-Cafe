/*global kakao*/
import React, { useEffect, useContext } from "react";
import "../../assets/css/SearchMap/KakaoMap.css";
import { KakaoContext } from "../../contexts/KakaoContext";

const KakaoMap = () => {
  const { Place, setPlaces } = useContext(KakaoContext);

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAOMAP_API_KEY}&libraries=services&autoload=false`;

    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        var mapTypeControl = new kakao.maps.MapTypeControl();
        var zoomControl = new kakao.maps.ZoomControl();

        const container = document.getElementById("map");

        // 초기 위치를 내가 사는 곳으로 설정
        const options = {
          center: new kakao.maps.LatLng(37.676615072936, 127.05226074939),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);

        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        // 장소 검색 객체를 생성
        const ps = new kakao.maps.services.Places();

        // 키워드로 장소를 검색
        ps.keywordSearch(Place, placesSearchCB);

        // 키워드 검색 완료 시 호출되는 콜백함수
        function placesSearchCB(data, status, pagination) {
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

            // 페이지 목록 보여주는 displayPagination() 추가
            displayPagination(pagination);
            setPlaces(data);
            console.log(data);
          }
        }

        // 검색결과 목록 하단에 페이지 번호 표시
        function displayPagination(pagination) {
          var paginationEl = document.getElementById("pagination"),
            fragment = document.createDocumentFragment(),
            i;

          // 기존에 추가된 페이지 번호 삭제
          while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild);
          }

          for (i = 1; i <= pagination.last; i++) {
            var el = document.createElement("a");
            el.href = "#";
            el.innerHTML = i;

            if (i === pagination.current) {
              el.className = "on";
            } else {
              el.onclick = (function (i) {
                return function () {
                  pagination.gotoPage(i);
                };
              })(i);
            }

            fragment.appendChild(el);
          }
          paginationEl.appendChild(fragment);
        }

        // 지도에 마커를 표시하는 함수
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시
          let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
          });

          // 마커에 클릭이벤트를 등록
          kakao.maps.event.addListener(marker, "click", function () {
            // 마커를 클릭하면 장소명이 인포윈도우에 표출
            infowindow.setContent(
              '<div style="padding:5px;font-size:1rem;">' +
                place.place_name +
                "</div>"
            );
            infowindow.open(map, marker);
          });
        }
      });
    };
    return () => script.remove();
  }, [Place]);
  return (
    <div className="map-container">
      <div id="map"></div>
    </div>
  );
};

export default KakaoMap;
