import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { TrendingCartComponent } from "../Trending-cart/Trending-Cart-component";
export function TrendingOverviewComponent() {
  const [TrendingData, setTrendingData] = useState(null);
  const [sizeWidth, setSizeWidth] = useState(
    window.innerWidth >= 768 ? 470 : 240
  );
  useEffect(() => {
    async function TrendingFech() {
      try {
        const response = await axios.get("http://localhost:3000/trending");
        if (response.data.status == 200) {
          setTrendingData(response.data.data);
          console.log(response.data.data);
        }
      } catch (error) {}
    }
    TrendingFech();
  }, []);
  useEffect(() => {
    const handlerSize = () => {
      setSizeWidth(window.innerWidth >= 768 ? 470 : 240);
    };

    window.addEventListener("resize", handlerSize);
    console.log(sizeWidth);

    return () => {
      window.removeEventListener("resize", handlerSize);
    };
  }, [window.innerHeight]);

  return (
    <div>
      <h1 className=" mb-4 text-xl">Trending</h1>

      <Swiper
        onSlideChange={() => console.log("slide changed")}
        width={sizeWidth}
        spaceBetween={16}
      >
        {TrendingData &&
          TrendingData.map((TrendingItem) => {
            return (
              <SwiperSlide key={TrendingItem._id}>
                <TrendingCartComponent item={TrendingItem}  />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
