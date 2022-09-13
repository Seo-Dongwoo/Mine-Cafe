import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/Dashboard/CafeList.css";
import { Table } from "react-bootstrap";
import {
  deleteCafeInitiate,
  getCafesInitiate,
} from "../../redux/DashboardActions";

const CafeList = () => {
  const { cafes } = useSelector((state) => state.data);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    if (window.confirm("추천 카페를 삭제하시겠습니까?")) {
      dispatch(deleteCafeInitiate(id));
    }
  };

  useEffect(() => {
    dispatch(getCafesInitiate());
  }, []);

  return (
    <Table striped bordered hover size="sm" className="table">
      <thead className="thead">
        <tr className="trHead">
          <th>번호</th>
          <th>카페 이름</th>
          <th>카페 주소</th>
          <th>추천 이유</th>
        </tr>
      </thead>
      <tbody className="tbody">
        {cafes.map((cafe, index) => {
          return (
            <tr className="trBody" key={cafe.id}>
              <td>{index + 1}</td>
              <td>{cafe.name}</td>
              <td>{cafe.address}</td>
              <td>{cafe.reason}</td>
              <td className="list-btn-box">
                <button className="edit-btn">Edit</button>
                <button
                  className="delete-btn"
                  onClick={() => deleteHandler(cafe.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CafeList;
