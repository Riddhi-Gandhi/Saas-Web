import { profileUser } from "../../components/api/service";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loader1 from "../../components/Loader1";
import list from "../../images/list-logo.png";
import { AndroidResultContext } from "../../context/AndroidResultContext";

function Androguard() {
  // TODO : Add a cancel button to cancel the analysis

  let token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const { androidResult, setAndroidResult } = useContext(AndroidResultContext);
  const profileInit = () => {
    profileUser(token).then((req, res) => {
      if (req.data.status !== "failed") {
        console.log(req.data);
        setUser(req.data.userValidation);
      } else {
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    profileInit();
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("apk_file", selectedFile);
    formData.append("user_id", user._id);

    setIsLoading(true);

    try {
      const response = await axios.post(
        process.env.REACT_APP_API_BASE_URL + "/analyze_apk",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAndroidResult({
        input: selectedFile.name,
        tool: "androguard",
        domain: "android",
        result: response.data,
      });
      navigate("/androguard-result");
    } catch (error) {
      console.error(error);
    }

    setIsLoading(false);
  };

  return (
    <div
      className="flex flex-col items-center pt-32 bg-dark min-h-screen h-full
     w-full"
    >
      <button
        className="fixed right-8 bottom-4 shadow-none text-[#d7dfe7] bg-light text-lg  font-bold py-2 px-2 rounded-full h-16 my-4 w-16"
        onClick={() => navigate("/androguard-history")}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={list} alt="list" width={36} />
        </div>
      </button>
      <h2 className="text-2xl font-bold text-light">Androguard</h2>
      <br />
      <br />
      {/* <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Androguard Features</h2>
        <ul className="list-disc pl-4">
          <li>DEX, ODEX</li>
          <li>APK</li>
          <li>Android's binary xml</li>
          <li>Android resources</li>
          <li>Disassemble DEX/ODEX bytecodes</li>
          <li>Basic Decompiler for DEX/ODEX files</li>
          <li>Frida support for easy dynamic analysis</li>
          <li>SQLite database to save the session</li>
        </ul>
      </div> */}
      {!analysisResult && (
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center"
        >
          <br />
          <br />
          <label className="mb-4 text-lg text-light">
            Choose an APK file to analyze: &nbsp;
            <input
              type="file"
              onChange={handleFileInputChange}
              className="text-light"
              accept=".apk"
            />
          </label>
          <br />
          <br />
          <button
            type="submit"
            // onClick={() => setIsLoading(true)}
            className="bg-black w-full text-light font-bold py-2 px-4 rounded-lg shadow-sm shadow-light"
            disabled={isLoading}
          >
            {isLoading ? (
              <span>
                <i className="fa fa-spinner fa-spin"></i> Analyzing...
              </span>
            ) : (
              <span>Analyze</span>
            )}
          </button>
          <br />
          {isLoading && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <Loader1 />
            </div>
          )}
        </form>
      )}
    </div>
  );
}

export default Androguard;
