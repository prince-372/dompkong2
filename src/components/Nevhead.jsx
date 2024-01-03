import React, { useState } from "react";
const Navhead = () => {
  const [first, setfirst] = useState(false);
  function MobileView() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }
  function CloseView() {
    setfirst(false);
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <div>
      <nav>
        <div className="flex justify-between items-center max-w-4xl mx-auto px-3">
          <a  href="#" className="text-white">
            logo
          </a>
          <ul
            className={` ${
              first ? "left-0" : "left-[-100%]"
            } flex items-center gap-5 duration-300 mobileview2`}
          >
            <li>
              <a onClick={CloseView} href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a onClick={CloseView} href="#" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a onClick={CloseView} href="#" className="text-white">Home</a>
            </li>
            <li>
              <a onClick={CloseView} href="#" className="text-white">Home</a>
            </li>
            <li>
              <a onClick={CloseView} href="#" className="text-white">Home</a>
            </li>
            <li>
              <a onClick={CloseView} href="#" className="text-white">Home</a>
            </li>
            <li>
              <a onClick={CloseView} href="#" className="text-white">Home</a>
            </li>
          </ul>
          <label className=" sm:hidden" onClick={MobileView}>  
            {first ? (
              <div className="z-20 relative">
                <span className="flex bg-white absolute -left-7 duration-300 top-1 rotate-45 h-[2px] w-6"></span>
                <span className="flex bg-white absolute -left-7 duration-300 -rotate-45 h-[2px] w-6 mt-1"></span>
              </div>
            ) : (
              <div className="z-20 relative">
                <span className="flex bg-white h-[2px] duration-300 w-6"></span>
                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
                <span className="flex bg-white h-[2px] duration-300 w-6 mt-1"></span>
              </div>
            )}
          </label>
        </div>
      </nav>
    </div>
  );
};

export default Navhead;