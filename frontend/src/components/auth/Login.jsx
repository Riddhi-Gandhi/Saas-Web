import React, { useEffect, useState } from "react";
// import logo from "../assets/logoMusicart.png";
import TextBox from "../TextBox";
import "../../App.css";
import Loader from "../Loader";
import { loginUser } from "../api/service";
import { useNavigate } from "react-router";
const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const login = async (event) => {
    event.preventDefault();
    // Activate the loader
    setLoader(true);
    // Create a new user
    if (email !== "" && password !== "") {
      setLoader(false);
      const user = {
        email: email,
        password: password,
      };
      setEmail("");
      setPassword("");
      await loginUser(user)
        .then((req, res) => {
          const { status, message } = req.data;
          if (status === "failed") {
            alert(message);
          } else {
            localStorage.setItem("token", req.data.token);
            navigate("/");
          }
        })
        .catch((err) => alert(err));
    } else {
      setLoader(false);
      alert("All fields are mandatory!");
    }
  };

  return (
    <div className="flex flex-col items-center h-screen bg-dark bg-cover">
      {loader && (
        <div className="z-10 absolute flex flex-row items-center justify-center h-screen w-full">
          <Loader />
        </div>
      )}

      <div className="flex mt-16 md:mt-24 ">
        {/* <img src={logo} alt="logo" className="inline w-10 h-10" /> */}
        <h1 className="text-2xl md:text-4xl cursor-pointer pl-0 font-bold bg-clip-text text-light">
          Redteaming and VAPT
        </h1>
      </div>
      <form
        onSubmit={login}
        className="p-6 bg-dark flex flex-col items-start drop-shadow-2xl mt-16 md:mt-12 w-5/6 sm:w-1/2 lg:w-1/3 rounded-xl shadow-md shadow-light"
      >
        <h2 class="text-light font-semibold mb-4 text-2xl self-center">
          LOGIN
        </h2>
        <TextBox
          textInput="text-md text-white"
          textLabel="text-md text-white"
          width="w-full"
          height="h-12"
          hint="Email ID"
          backgroundColor="bg-dark"
          position="left-2 md:left-3 top-2.5"
          border="border-dark border-2"
          span="px-1"
          input="px-3 md:px-4"
          div="mt-8"
          setState={setEmail}
          value={email}
          type="email"
        />
        <TextBox
          textInput="text-md text-white"
          textLabel="text-md text-white"
          width="w-full"
          height="h-12"
          hint="Password"
          backgroundColor="bg-dark"
          position="left-2 md:left-3 top-2.5"
          border="border-2 border-white"
          span="px-1"
          input="px-3 md:px-4"
          div="mt-8"
          type="password"
          setState={setPassword}
          value={password}
        />
        <button
          type="submit"
          className="shadow-none w-full text-light bg-black font-bold py-2 px-4 hover:bg-darkMed hover:border hover:border-light rounded-xl h-10  my-4"
        >
          Continue
        </button>
      </form>
      <div className="mt-8 text-xs md:text-sm sm:w-1/2 lg:w-full flex items-center w-full md:px-1 px-9">
        <hr className="border-t w-full border-light flex-grow" />
        <span className=" text-light w-full text-center">New user?</span>
        <hr className="border-t w-full border-light flex-grow" />
      </div>
      <button
        onClick={() => navigate("/register")}
        className=" shadow-none w-82 text-light bg-black font-bold py-2 px-4 hover:bg-black rounded-xl h-10 my-4"
      >
        Create your account
      </button>
    </div>
  );
};

export default Login;
