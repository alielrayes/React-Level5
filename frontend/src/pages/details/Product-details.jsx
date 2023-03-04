import React, { useRef, useState } from "react";
import "./product-details.css";
import { useGetOneProductQuery } from "Redux/productsApi";
import { useParams } from "react-router-dom";
import { Box, CircularProgress, Typography } from "@mui/material";
import DetailsThumb from "./DetailsThumb";
const ProductDetails = () => {
  let { id } = useParams();
  // data => only one product
  const { data, error, isLoading } = useGetOneProductQuery(id);

  const [index, setindex] = useState(0);
  const myRef = useRef(null);

  const handleTab = (index) => {
    // this.setState({index: index})
    setindex(index);
    const images = myRef.current.children;
    for (let i = 0; i < images.length; i++) {
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

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
    return (
      <div className="app details-page">
        <div className="details">
          <div className="big-img">
            <img src={data.imageLink[index]} alt="" />
          </div>

          <div className="box">
            <div className="row">
              <h2>{data.productName}</h2>
              <span>${data.price}</span>
            </div>
            {/* <Colors colors={item.colors} /> */}

            <p>{data.description}</p>

            <DetailsThumb
              images={data.imageLink}
              tab={handleTab}
              myRef={myRef}
            />
            <button className="cart">Add to cart</button>
          </div>
        </div>
      </div>
    );
  }
};

export default ProductDetails;
