import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function ContactPage() {
  return (
    <div>
      <div className="pb-10">
        <h1
          style={{ fontFamily: "Lilita One" }}
          className="flex justify-center ml-5 text-6xl text-[#92a1d4] pt-5"
        >
          CONTACT
        </h1>
      </div>

      <div className="flex w-full  gap-2" style={{fontFamily:"Varela Round"}}>
        <a href="https://github.com/rxuby">
          {" "}
          <div className="contact-box flex justify-start items-center w-96 h-24 bg-[#000000]   border-2 border-[#4c63af] rounded-3xl">
            <div className=" ml-5 p-2  border-2 border-[#4c63af] bg-white rounded-2xl">
              <FaGithub className="text-5xl text-black" />
            </div>
            <p className="text-white text-2xl ml-4">github.com/rxuby</p>
          </div>  
        </a>
        <div className="contact-box  flex justify-start items-center w-96 bg-[#FFD1D1]   border-2 border-[#4c63af] rounded-3xl">
          <div className=" ml-5 p-2  border-2 border-[#4c63af] bg-white rounded-2xl">
            <SiGmail className="text-5xl text-red-500" />
          </div>
          <p className="text-white text-2xl ml-2">jutapon.c@kkumail.com</p>
        </div>
        <div className="contact-box  flex justify-start items-center w-96 bg-[#94ffcb]  border-2 border-[#4c63af] rounded-3xl">
          <div className=" ml-5 p-2  border-2 border-[#4c63af] bg-white rounded-2xl">
            <FaPhoneAlt className="text-5xl text-[#94ffcb]" />
          </div>
          <p className="text-white text-2xl ml-4">091-071-7585</p>
        </div>

         <a href="https://www.facebook.com/profile.php?id=100009523756189">
          {" "}
          <div className="contact-box  flex justify-start items-center w-96 h-24 bg-[#c5d0f3]   border-2 border-[#4c63af] rounded-3xl">
            <div className=" ml-5 p-2  border-2 border-[#4c63af] bg-white rounded-2xl">
              <FaFacebookF className="text-5xl text-[#4c63af]" />
            </div>
            <p className="text-white text-2xl ml-4">Khing Chaiyakhun</p>
          </div>
        </a>
        
        
      </div>
    </div>
  );
}

export default ContactPage;
