import {
  Box,
  Button,
  InputAdornment,
  Paper,
  TextField,
  styled,
  IconButton,
  Badge,
} from "@mui/material";
import "./Cart.css";
import { Add, Remove } from "@mui/icons-material";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#1976d2",
    color: "#fff",
  },
}));

const Cart = () => {
  return (
    <Box>
      <Paper dir="rtl" className="item-container">
        <div className="img-title-parent">
          <img src="####" alt="" />
          <p className="product-name">T-shirt</p>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ color: "#1976d2", ml: "10px" }} onClick={() => {}}>
            <Add />
          </IconButton>

          <StyledBadge badgeContent={1} color="secondary" />

          <IconButton sx={{ color: "#1976d2", mr: "10px" }} onClick={() => {}}>
            <Remove />
          </IconButton>
        </div>

        <div className="price">$100</div>

        <Button variant="text" color="error">
          delete
        </Button>
      </Paper>
    </Box>
  );
};

export default Cart;
