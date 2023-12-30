import React, { useEffect, useState } from "react";
import MainKong from "../assets/image/He-Man.png";

const Preloader = () => {
    const [loder, setloader] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setloader(false);
        }, 3500);
    }, []);
    {
        if (loder === true) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "initial";
        }
    }
    return (
        <div>
            {loder ? (
                <section
                    style={{ zIndex: "999999999" }}
                    className="bg-black top-0 start-0 fixed h-full w-full flex flex-col justify-center items-center"
                >
                    <div className="flex justify-center items-center flex-col text-center">
                        <div>
                            <h1 className=" animate-bounce text-[34px] md:text-[64px] font-normal leading-[108%] text-white  text-center  font-azo">WELCOME <br /> TO <span className="text-[#F1C85D] relative after:absolute after:w-full after:h-[5px] after:bg-[#F1C85D] after:bottom-0 after:left-0">
              DomPKong
            </span> </h1>
                        </div>
                    </div>
                </section>
            ) : (
                ""
            )}
        </div>
    )
}

export default Preloader