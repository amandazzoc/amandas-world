"use client";
import Card from "@/components/Card";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { projects } from "../../data/projects"

export default function Projetos() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="font-family-secondary md:text-5xl text-4xl text-center">
        Projetos
      </h1>
      <div className="w-full ">
        {projects.map((proj, index) => (
          <div className="flex flex-col gap-4 mb-6" key={index}>
            <h1 className="md:text-3xl text-2xl">
              <span className="font-bold md:text-xl text-base text-[var(--secondary)]">
                {proj.indice}
              </span>
              <span className="font-family-secondary"> {proj.title}</span>
            </h1>
            <div>
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                breakpoints={{
                  320: { slidesPerView: 1.5 }, // Em telas pequenas (mobile), mostra 1 slide
                  768: { slidesPerView: 2.5 }, // Em telas médias (md), mostra 2 slides
                  1024: { slidesPerView: 3.5 }, // Em telas grandes (lg), mostra 3 slides
                  1280: { slidesPerView: 3.5 }, // Em telas muito grandes (xl), mostra 4 slides
                }}
                pagination={{ clickable: true }}
              >
                {proj.cards.map((card, indexCard) => (
                  <SwiperSlide key={indexCard}>
                    <Card
                      img={card.img}
                      descricao={card.descricao}
                      mais={card.mais}
                      link={card.link}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
