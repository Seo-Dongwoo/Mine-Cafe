import React, { useContext } from "react";
import ToggleContent from "./ToggleContent";
import { ToggleContext } from "../../contexts/ToggleContext";
import SearchList from "./SearchList";
import styled from "styled-components";
import { ChevronLeft } from "@styled-icons/bootstrap/ChevronLeft";
import { ChevronRight } from "@styled-icons/bootstrap/ChevronRight";

const Toggle = () => {
  const { handleToggle, toggleInfo } = useContext(ToggleContext);

  return (
    <>
      {toggleInfo ? (
        <div>
          <ToggleContent />
          <ToggleOn>
            <ToggleBox onClick={handleToggle}>
              <LeftIcon />
            </ToggleBox>
          </ToggleOn>
        </div>
      ) : (
        <ToggleOff>
          <SearchList />
          <ToggleBox onClick={handleToggle}>
            <RightIcon />
          </ToggleBox>
        </ToggleOff>
      )}
    </>
  );
};

const ToggleOn = styled.div`
  position: absolute;
  width: 30px;
  height: 100%;
  background-color: transparent;
  z-index: 15;
  margin-left: 400px;
`;

const ToggleOff = styled.div`
  position: absolute;
  width: 0;
  height: 100%;
  background-color: transparent;
  z-index: 15;
  margin-left: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ToggleBox = styled.div`
  position: absolute;
  width: 40px;
  height: 50px;
  background-color: white;
  overflow: hidden;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const LeftIcon = styled(ChevronLeft)`
  height: 100%;
  width: 100%;
  color: rgb(53, 216, 53);
  align-items: center;
  justify-content: center;
  z-index: 15;
`;

const RightIcon = styled(ChevronRight)`
  height: 100%;
  width: 100%;
  color: rgb(53, 216, 53);
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  z-index: 15;
`;
export default Toggle;
