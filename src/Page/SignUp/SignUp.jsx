import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [credential, setCredential] = useState({
    email: undefined,
    password: undefined,
    userName: undefined,
    images: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChnage = (e) => {
    const { id, value } = e.target;
    setCredential({ ...credential, [id]: value });
  };
  const handleImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setCredential({ ...credential, images: file });
  };

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("images", credential.images);
    formData.append("userName", credential.userName);
    formData.append("email", credential.email);
    formData.append("password", credential.password);

    try {
      const res = await axios.post(
        "https://naikap-node-api.onrender.com/user",
        formData
      );
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" h-[100vh] flex justify-center items-center">
      <form
        className="flex flex-col gap-5 border border-gray-800 rounded-md px-6  py-4"
        onSubmit={handleClick}
      >
        <label htmlFor="">UserName</label>
        <input
          type="text"
          id="userName"
          onChange={handleChnage}
          required
          className=" p-1 border-2 rounded-md"
        />
        <label htmlFor="">Email</label>
        <input
          type="email"
          id="email"
          onChange={handleChnage}
          required
          className=" p-1 border-2 rounded-md"
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          id="password"
          onChange={handleChnage}
          required
          className=" p-1 border-2 rounded-md"
        />
        <label htmlFor="">Image</label>
        <input
          type="file"
          accept=".jpeg, .png, .jpg"
          id="images"
          onChange={handleImage}
          required
          className=" p-1 border-2 rounded-md"
        />

        <button
          className={`bg-lime-400 p-2 border rounded-xl mt-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={loading} // Disable if loading or fields are empty
        >
          {loading ? "Submitting..." : "Register"}
        </button>
        <Link to="/login">
          {" "}
          <span className=" px-2 py-1 text-blue-400 rounded-lg">
            Already have account?
          </span>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
