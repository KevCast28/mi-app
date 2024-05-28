import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/css/styleSwipper.css";

import sandboxImg from "../img/sandboxImg.png";
import platformImg from "../img/platformImg.png";
import shooterImg from "../img/shooterImg.png";
import actionImg from "../img/actionImg.png";

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
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
              slidesPerView: 2,
              spaceBetween: 20,
          },
          768: {
              slidesPerView: 3,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 4,
              spaceBetween: 40,
          },
      }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card sx={{ width: "100%", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}
              image={sandboxImg}
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
              borderRadius: "20px"
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
                }}
              >
                Sandbox
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}
              image={platformImg}
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
              borderRadius: "20px"
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
                }}
              >
                Platform
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px" }}
              image={shooterImg}
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
              borderRadius: "20px"
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
                }}
              >
                Shooter
              </Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Card sx={{ width: "100%", height: "300px", position: "relative" }}>
            <CardMedia
              sx={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px"}}
              image={actionImg}
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
              borderRadius: "20px"
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
