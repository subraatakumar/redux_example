import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchProducts from "../redux/thunk/fetchProducts";

function AllProducts() {
  const { data, error, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading) {
    return <p>Please wait... fetching data from server</p>;
  }
  if (error.length > 0) {
    return <p>{error}</p>;
  }
  return (
    <div>
      <h1>AllProducts</h1>
      {data.map((singleData) => {
        return <p>{singleData?.title}</p>;
      })}
    </div>
  );
}

export default AllProducts;
