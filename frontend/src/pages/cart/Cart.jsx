import {
  Box,
  Button,
  Paper,
  styled,
  IconButton,
  Badge,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import "./Cart.css";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "Redux/cartSlice";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

const Cart = () => {
  // @ts-ignore
  const { selectedProducts } = useSelector((state) => state.carttt);
  const dispatch = useDispatch();
  console.log(selectedProducts);

  let Subtotal = 0;

  return (
    <Box>
      {selectedProducts.map((item) => {
        Subtotal += Number(item.price) * Number(item.quantity);
        return (
          <Paper key={item.id} dir="rtl" className="item-container">
            <div className="img-title-parent">
              <img src={item.imageLink[0]} alt="" />
              <p className="product-name">{item.productName}</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{ color: "#1976d2", ml: "10px" }}
                onClick={() => {
                  dispatch(increaseQuantity(item));
                }}
              >
                <Add />
              </IconButton>

              <StyledBadge badgeContent={item.quantity} color="secondary" />

              <IconButton
                sx={{ color: "#1976d2", mr: "10px" }}
                onClick={() => {
                  dispatch(decreaseQuantity(item));
                }}
              >
                <Remove />
              </IconButton>
            </div>

            <div className="price">
              ${Number(item.price) * Number(item.quantity)}
            </div>

            <Button
              sx={{ display: { xs: "none", md: "inline-flex" } }}
              variant="text"
              color="error"
              onClick={() => {
                dispatch(deleteProduct(item));
              }}
            >
              delete
            </Button>

            <IconButton
              sx={{
                color: "#ef5350",
                display: { xs: "inline-flex", md: "none" },
              }}
              onClick={() => {
                dispatch(deleteProduct(item));
              }}
            >
              <Delete />
            </IconButton>
          </Paper>
        );
      })}

      <Paper sx={{ width: "200px", mx: "auto", mt: "60px" }}>
        <Typography align="center" p={2} variant="h6">
          Cart Summary
        </Typography>

        <Divider />

        <Stack
          sx={{ justifyContent: "space-between", p: 1.2 }}
          direction={"row"}
        >
          <Typography variant="body1">Subtotal</Typography>
          <Typography variant="body1">${Subtotal}</Typography>
        </Stack>

        <Divider />

        <Button fullWidth color="primary" variant="contained">
          CHECKOUT
        </Button>
      </Paper>
    </Box>
  );
};

export default Cart;
