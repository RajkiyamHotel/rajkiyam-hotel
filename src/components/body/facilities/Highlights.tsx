import React from "react";
import Image from "next/image";

// const STAR_MARK = "Airport transfer available at additional charges"
const Highlights = () =>{
    const highlighesValue = [
        {
            img: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741440645/top_erpjix.jpg",
            text: "Top Value",
            toolTipValue: "Guests rated this property 9.3/10 on value for money",
        },
        {
            img: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741442241/hyigene_mmpgtw.jpg",
            text: "Hygiene Plus",
            toolTipValue: "Guests rated this property 9.3/10 on value for money"
        },
        {
            img: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741442463/newly_build_hotel_pqckgh.jpg",
            text: "Newly built",
            toolTipValue: "Guests rated this property 9.3/10 on value for money"
        },
        {
            img: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741443189/airport_kp6mdw.jpg",
            text: "Airport Transfer",
            star :"*",
            toolTipValue: "Guests rated this property 9.3/10 on value for money"
        },
        {
            img: "https://res.cloudinary.com/dsjzf5q7p/image/upload/v1741443374/checkin_tew2k4.jpg",
            text: "Check in - 24hr",
            toolTipValue: "Guests rated this property 9.3/10 on value for money"
        }
    ]
    return(
        <div className="text-center mt-4 bg-white text-black">
            <h2 className="text-xl text-gray-700 m-5">Highlights</h2>
            <div className="flex gap-4 justify-evenly flex-wrap">
                {highlighesValue.map((item, index) =>{
                    return(
                        <div key={index} className="lg:w-1/4 flex flex-col items-center">
                            <Image 
                                src={item.img}
                                alt={item.text}
                                width={60}
                                height={60}
                                className="object-cover rounded-md"
                                quality={100}
                            />
                            <div>
                                {item.text}
                                <span className="">{item.star}</span>
                            </div>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default Highlights;