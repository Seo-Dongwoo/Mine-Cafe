import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../assets/css/Dashboard/CafeList.css";
import { Table } from "react-bootstrap";
import {
  deleteCafeInitiate,
  getCafesInitiate,
} from "../../redux/Actions/DashboardActions";
import LikeCafe from "./LikeCafe";
import Pagination from "./Pagination";

const CafeList = () => {
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const { cafes } = useSelector((state) => state.cafeReducer);
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
    <>
      <Table className="table" striped bordered hover size="sm">
        <thead className="thead">
          <tr className="trHead">
            <th className="list-number">번호</th>
            <th>카페 이름</th>
            <th>카페 주소</th>
            <th>추천 이유</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {cafes.slice(offset, offset + limit).map((cafe, index) => {
            return (
              <tr className="trBody" key={cafe.id}>
                <td className="list-number">{index + 1}</td>
                <td>{cafe.place_name}</td>
                <td>{cafe.address_name}</td>
                <td>{cafe.reason}</td>
                <td className="list-btn-box">
                  <LikeCafe cafe={cafe} />
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
      <footer className="list-footer">
        <Pagination
          total={cafes.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </>
  );
};

export default CafeList;
