// import { profileUser } from "./api/service";
// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import sonarqube from "../images/sonarqube.png";
// import pylint from "../images/pylint.png";

// const Source = () => {
//   let token = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const profileInit = () => {
//     profileUser(token).then((req, res) => {
//       if (req.data.status !== "failed") {
//         console.log(req.data);
//       } else {
//         navigate("/login");
//       }
//     });
//   };

//   useEffect(() => {
//     profileInit();
//   }, []);

//   const handleNavigation = (link) => {
//     navigate(link);
//   };

//   const cardList = [
//     {
//       img: pylint,
//       link: () => handleNavigation("/pylint"),
//       title: "Pylint",
//       text: "Boost your Python code's security and quality by detecting potential errors and vulnerabilities.",
//     },
   
//   ];


//   return (
//     <div className="pt-16 sm:pt-0 bg-dark min-h-screen flex flex-col items-center justify-center">
//       <h2 className="text-light pt-12 sm:pt-0 sm:pb-12">Source Code Review</h2>
//       <br />
//       <div className="place-items-center grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-x-24 gap-y-10 w-auto">
//         {cardList.map((card) => (
//           <>
//             <div
//               className="group cursor-pointer h-80 w-80 md:h-96 md:w-96 [perspective:1000px] mx-auto"
//               onClick={card.link}
//             >
//               <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
//                 <div className="absolute inset-0">
//                   <img
//                     className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
//                     src={card.img}
//                     alt=""
//                   />
//                 </div>
//                 <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
//                   <div className="flex min-h-full flex-col items-center justify-center">
//                     <h1 className="text-3xl font-bold">{card.title}</h1>

//                     <p className="text-base mt-2">{card.text}</p>
//                     {/* <button className="mt-2 rounded-md bg-neutral-800 py-1 px-2 text-sm hover:bg-neutral-900">
//                           Read More
//                         </button> */}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </>
//         ))}
//       </div>
      
//     </div>
//   );
// };
// export default Source;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import pylint from "../images/pylint.png";
import { profileUser } from "./api/service";
import "./shared.css";

function Source() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    const profileInit = async () => {
      try {
        const response = await profileUser(token);
        if (response.data.status !== "failed") {
          console.log(response.data);
        } else {
          navigate("/login");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        // Handle error as needed (e.g., show an error message to the user)
      }
    };

    profileInit();
  }, [navigate, token]);

  const handleNavigation = (link) => {
    navigate(link);
  };

  const cardList = [
        {
          img: pylint,
          link:"/pylint",
          title: "Pylint",
          text: "Boost your Python code's security and quality by detecting potential errors and vulnerabilities.",
        },
       
      ];

  return (
    <div className="bg-dark min-h-screen flex flex-col items-center justify-center" style={{ backgroundImage: 'linear-gradient( #13042c, #240454, #240454,#3c2484,#4b2ea1,#3c2484,#240454,#13042c,#13042c)' }}>
      <div className="md:w-full text-light">
        <br /><br /><br /><br />
        <h2 className="para3">API Testing</h2><br></br>
        <p className="p2">Designed to fortify web applications against cyber threats. With specialized tools, it conducts thorough assessments, ensuring the resilience and security of web-based platforms by identifying and addressing vulnerabilities unique to the online environment.</p>
      </div><br></br>

      {/* Images and Information */}
      <div className="md:w-full mt-6 flex justify-center">
        {cardList.map((card) => (
          <div
            key={card.link}
            className="group cursor-pointer w-80 h-80 md:h-96 md:w-96 mx-6"
            onClick={() => handleNavigation(card.link)}
            style={{ boxShadow: '15px 30px 5px #3c2484' }}
          >
            <div className="rounded-xl overflow-hidden bg-dark flex h-full">
              <img
                className="h-full w-1/2 object-cover rounded-l-xl"
                src={card.img}
                alt=""
              />
              <div className="w-1/2 p-4 text-white flex flex-col justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-2">{card.title}</h1>
                  <p className="text-base">{card.text}</p>
                </div>
                <button onClick={() => handleNavigation(card.link)} className="use-tool-button mt-4">
                  Use Tool
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Source;
