import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { api } from "../../services/api.conf";
import { TrendingCartComponent } from "../Trending-cart/Trending-Cart-component";
export function TrendingOverviewComponent() {
  const [TrendingData, setTrendingData] = useState(null);

  useEffect(() => {
    async function TrendingFech() {
      try {
        const response = await api.get("/trending");
        if (response.status == 200) {
          setTrendingData(response.data.data);
        }
      } catch (error) {}
    }
    TrendingFech();
  }, []);

  return (
    <div className="  w-full">
      <h1 className=" mb-4 text-xl">Trending</h1>
      {TrendingData ? (
        <Swiper
          style={{ width: "100%" }}
          spaceBetween={10}
          slidesPerView={"auto"}
          modules={[Scrollbar, Pagination, A11y]}
          navigation
          scrollbar={{ draggable: true }}
        >
          {TrendingData.map((item) => (
            <SwiperSlide key={item.id} style={{ width: "auto" }}>
              <TrendingCartComponent item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <h1> test </h1>
      )}
    </div>
  );
}
