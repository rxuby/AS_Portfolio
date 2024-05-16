import pokemon from "@images/pokemon.png";
import pokemon2 from "@images/pokemon2.png"
import news from "@images/news.png"
import vacab from "@images/vocabulary.png"
import yugioh from "@images/yugioh.png"
import antdesign from "@images/antdesign.png"
import asweb from "@images/asweb.png"
import pascal from "@images/pascal.webp";
import redux from "@images/redux.png"
import wscss from "@images/wscss.png"
import { TiPlusOutline } from "react-icons/ti";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAntdesign } from "react-icons/si";
import { SiRedux } from "react-icons/si";

import { Swiper, SwiperSlide } from "swiper/react";

import "../App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

function WorkPage() {
  return (
    <div>
      <div className="pt-3">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-start ml-5 text-6xl text-[#92a1d4] pt-5"
        >
          MY WORK
        </h1>
      </div>

      <div className="mt-5 grid grid-cols-3 grid-flow-row gap-7 mx-5">
        <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
          <div className="mt-1 mx-1 ">
            <img
              className="rounded-t-3xl border-[3px] border-[#4c63af] "
              src={pokemon}
              alt="pokemon"
            />
          </div>
          <div className="mt-1 mx-3 text-lg font-semibold">
            <p className="work-name text-[#4c63af]">AS01 Assignment1 Ty</p>
          </div>
          <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
            <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
          </div>
        </div>

        <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
          <div className="mt-1 mx-1 ">
            <img
              className="rounded-t-3xl border-[3px] border-[#4c63af] "
              src={pokemon2}
              alt="pokemon"
            />
          </div>
          <div className="mt-1 mx-3 text-lg font-semibold">
            <p className="work-name text-[#4c63af]">AS01 Assignment1 Ty</p>
          </div>
          <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
            <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
          </div>
        </div>

        <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
          <div className="mt-1 mx-1 ">
            <img
              className="rounded-t-3xl border-[3px] border-[#4c63af] "
              src={asweb}
              alt="pokemon"
            />
          </div>
          <div className="mt-1 mx-3 text-lg font-semibold">
            <p className="work-name text-[#4c63af]">AS01 Assignment1 Ty</p>
          </div>
          <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
            <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
          </div>
        </div>

        <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
          <div className="mt-1 mx-1 ">
            <img
              className="rounded-t-3xl border-[3px] border-[#4c63af] "
              src={vacab}
              alt="pokemon"
            />
          </div>
          <div className="mt-1 mx-3 text-lg font-semibold">
            <p className="work-name text-[#4c63af]">AS01 Assignment1 Ty</p>
          </div>
          <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
            <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
          </div>
        </div>

        <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
          <div className="mt-1 mx-1 ">
            <img
              className="rounded-t-3xl border-[3px] border-[#4c63af] "
              src={yugioh}
              alt="pokemon"
            />
          </div>
          <div className="mt-1 mx-3 text-lg font-semibold">
            <p className="work-name text-[#4c63af]">AS01 Assignment1 Ty</p>
          </div>
          <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
            <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
          </div>
        </div>

        <div className="work-box border-[3px] border-[#4c63af] rounded-3xl bg-white">
          <div className="mt-1 mx-1 ">
            <img
              className="rounded-t-3xl border-[3px] border-[#4c63af] "
              src={antdesign}
              alt="pokemon"
            />
          </div>
          <div className="mt-1 mx-3 text-lg font-semibold">
            <p className="work-name text-[#4c63af]">AS01 Assignment1 Ty</p>
          </div>
          <div className=" mx-3  flex justify-end text-5xl text-[#4c63af]">
            <TiPlusOutline className="btn-plus border-[3px] mb-2 rounded-full border-[#4c63af]" />
          </div>
        </div>

     
      </div>
      <div className="flex justify-end mr-5 ">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-start ml-5 text-3xl text-[#92a1d4] pt-5"
        >
          SEE MORE PROJECTS
        </h1>
      </div>
    </div>
  );
}

export default WorkPage;
