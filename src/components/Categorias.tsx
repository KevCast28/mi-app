import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/css/styleSwipper.css";

import cat1 from "../img/slider1.png";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function App() {
  return (
    <Container sx={{ margin: "50px auto" }}>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card sx={{ width: "300px", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={cat1}
              title="green iguana"
            />
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#00000064",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                SANDBOX
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "300px", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={cat1}
              title="green iguana"
            />
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#00000064",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Platform
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "300px", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={cat1}
              title="green iguana"
            />
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#00000064",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Shooter
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "300px", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              image={cat1}
              title="green iguana"
            />
          </Card>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background: "#00000064",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "inherit",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                }}
              >
                Action
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
