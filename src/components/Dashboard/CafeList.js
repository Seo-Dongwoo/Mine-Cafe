import React, { useEffect, useState } from "react";
import PostDataService from "../../Services/Posts.Service";

const CafeList = () => {
  const [cafes, setCafes] = useState([]);
  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const data = await PostDataService.getAllPosts();
    console.log(data.docs);
    setCafes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  return (
    <div>
      {cafes.map((doc, index) => {
        return (
          <div key={doc.id}>
            <h1> {doc.name}</h1> <h1>{doc.address}</h1> <h1>{doc.reason}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default CafeList;
