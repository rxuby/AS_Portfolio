import React from "react";

function HomePage() {
  return (
    <div>
      <div className="flex justify-center items-center relative">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-7xl p-3 px-14 border-2 border-[#4c63af] bg-[#92a1d4] text-[#fbefe1]"
        >
          Hello!
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center relative top-1 pt-3 -rotate-2">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-7xl p-3 px-14 border-2 border-[#4c63af] bg-[#FF9494] text-[#fbefe1]"
        >
          banana bananana
        </h1>
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-7xl p-3 px-14 mt-[3px] border-2 border-[#4c63af] bg-[#FFD1D1] text-[#fbefe1]"
        >
          bananana
        </h1>
      </div>
      <div className="flex justify-center items-center  relative rotate-3">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center items-center text-5xl p-3 px-14 border-2 border-[#4c63af] bg-[#92a1d4] text-[#fbefe1]"
        >
          baaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </h1>
      </div>
    </div>
  );
}

export default HomePage;
