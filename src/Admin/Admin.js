import React from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const admin = "admin";
    const pass = "admin";
    const navigate = useNavigate();
    const handleAdmin =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const password = e.target.password.value;
        if( !name || !password){
            toast.error("Enter valid input!")
            return;
        }
        if(name === admin && password === pass){
            toast.success("Authorized!")
            navigate('/updateServer')
        }
        else{
            toast.error("Not Authorized!")
        }
    }
  return (
    <div className="h-[100vh] p-8 flex justify-center items-center">
      <form onSubmit={handleAdmin} className="flex flex-col gap-4 items-start w-3/4 md:w-1/4">
        <h2 className="text-white text-3xl font-extrabold">Login to Server</h2>
        <input
          className="px-4 py-2 w-full rounded focus:outline-sky-500"
          placeholder="User Name"
          type="text"
          name="name"
        />
        <input
          className="px-4 py-2 w-full rounded focus:outline-sky-500"
          placeholder="Password"
          type="password"
          name="password"
        />
        <button type="submit" className="px-4 py-2 bg-sky-500 rounded text-white font-semibold">
          Log in
        </button>
      </form>
    </div>
  );
};

export default Admin;
