import React from "react";
import "./product-details.css";
import { useGetOneProductQuery } from "Redux/productsApi";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
const ProductDetails = () => {
  let { id } = useParams();
  // data => only one product
  const { data, error, isLoading } = useGetOneProductQuery(id);

  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: "flex" }}>
        <Typography variant="h1" color="error">
          {" "}
          ERROR{" "}
        </Typography>
      </Box>
    );
  }
  if (data) {
    return <div>product id : {data.id}</div>;
  }
};

export default ProductDetails;
