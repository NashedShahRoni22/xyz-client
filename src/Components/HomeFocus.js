import React, { useContext } from "react";
import HomeFocusImage from "../imgs/features.svg";
import { AiOutlineScan, AiFillCodepenCircle, AiOutlineOrderedList } from "react-icons/ai";
import { AppContext } from "../App";
const HomeFocus = () => {
  const {HomeFocus} = useContext(AppContext);
  return (
    <section className="pb-5">
      <h2 className="text-center font-extrabold  text-4xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to bg-purple-500">
        {HomeFocus?.FocusTitle}
      </h2>
      <img src={HomeFocusImage} alt="home-focus-img" className="w-full h-[400px]" />
      <div className="mt-5 grid gap-8 md:grid-cols-3">
        <div className="flex flex-col items-center gap-4">
          <div className="p-2 bg-gradient-to-b from-purple-600 to-sky-600 w-fit rounded-full">
            <AiOutlineScan className="text-white text-3xl md:text-4xl" />
          </div>
          <h5 className="text-center text-xl md:text-2xl font-bold text-white">Ready for the future</h5>
          <p className="text-lg md:text-xl font-semibold text-gray-400 text-center" >A flexible foundation that evolves <br/> with complex ecosystem.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="p-2 bg-gradient-to-b from-purple-600 to-sky-600 w-fit rounded-full">
            <AiFillCodepenCircle className="text-white text-3xl md:text-4xl" />
          </div>
          <h5 className="text-center text-xl md:text-2xl font-bold text-white">Ready for the future</h5>
          <p className="text-lg md:text-xl font-semibold text-gray-400 text-center" >A flexible foundation that evolves <br/> with complex ecosystem.</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="p-2 bg-gradient-to-b from-purple-600 to-sky-600 w-fit rounded-full">
            <AiOutlineOrderedList className="text-white text-3xl md:text-4xl" />
          </div>
          <h5 className="text-center text-xl md:text-2xl font-bold text-white">Ready for the future</h5>
          <p className="text-lg md:text-xl font-semibold text-gray-400 text-center" >A flexible foundation that evolves <br/> with complex ecosystem.</p>
        </div>
      </div>
    </section>
  );
};

export default HomeFocus;
