import { Box } from "@mui/system";
import "./Home.css";
import React from "react";
import { Paper, Typography, IconButton, Button, Stack } from "@mui/material";
import { Close } from "@mui/icons-material";
import { styled, useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import { useGetproductsByNameQuery } from '../../Redux/productsApi'

const receviedDateFromAPI = [{}, {}, {}, {}];

const Home = () => {
  const theme = useTheme();
  const { data, error, isLoading } = useGetproductsByNameQuery()


console.log(data)



  return (
    <Stack
      direction={"row"}
      sx={{ flexWrap: "wrap", justifyContent: "center" }}
    >
      {receviedDateFromAPI.map((item) => {
        return (
          <Card sx={{ maxWidth: 277, mb: 6, mx: 2 }}>
            <CardMedia
              component="img"
              height="194"
              image="/static/images/cards/paella.jpg"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests.
              </Typography>
            </CardContent>
            <CardActions
              sx={{ justifyContent: "space-between" }}
              disableSpacing
            >
              <Button
                sx={{ textTransform: "capitalize", p: 1, lineHeight: 1.1 }}
                variant="contained"
                color="primary"
              >
                Add to cart
              </Button>

              <Typography
                mr={1}
                variant="body1"
                color={theme.palette.error.light}
              >
                $100
              </Typography>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
};

export default Home;
