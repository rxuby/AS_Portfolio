import React from "react";
import snowball from "@images/sn.jpg";
import { FaGithub } from "react-icons/fa";


function AboutPage() {
  return (
    <div>
      <div className="pt-3 ">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-start ml-5 text-6xl text-[#92a1d4] pt-5"
          // text-[#92a1d4]
        >
          ABOUT ME
        </h1>
      </div>
      <div className="flex justify-around mt-8 ">
        <div className="about-box w-[50%]">
          <div className=" flex justify-end borde">
            {/* <p className="p-5 border-[3px] border-[#4c63af] ">NAME</p> */}

            <p className="text-5xl font-bold">Jutapon Chaiyakhun</p>
          </div>

          <div className="flex text-2xl mt-5 ">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto recusandae, veritatis alias iure sapiente debitis
              reiciendis consectetur minima! Blanditiis molestias consectetur
              iusto distinctio ipsam provident, aspernatur fugiat in velit
              natus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Enim dignissimos quos animi ducimus voluptas sit ullam! Illo
              voluptate molestias corrupti recusandae, suscipit quae ipsum
              maiores rem libero eaque, repudiandae exercitationem.
            </p>
          </div>
        </div>

        <div className=" w-[400px] ">
          <div className="pic-box border-[4px] border-[#4c63af]  p-6 -rotate-6 ">
            <img
              className=" border-[4px] border-[#4c63af]  "
              src={snowball}
              alt=""
            />
          </div>
          <div className="flex">
            {/* <p className=" mt-5 text-4xl border rounded-2xl p-3  px-20 ">Name</p> */}
            <p
              className=" mt-5 text-4xl p-3  px-20  rotate-6   border-2 border-[#4c63af] bg-[#4c63af] text-[#fbefe1]"
              style={{ fontFamily: "Lilita One" }}
            >
              KHING
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
