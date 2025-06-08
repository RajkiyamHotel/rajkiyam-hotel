import { nearByLandmarks, popularLandmarks } from "@/components/utils/LocationDetails";
import React from "react";
import { CiLocationOn } from "react-icons/ci";

const NearPlaces = () =>{
    return(
        <div className="bg-white text-center p-5">
            <h1 className="text-xl text-gray-700 m-4 text-center">Whats Nearby</h1>
            <div className="flex flex-col md:flex-row justify-evenly text-black">
                <div>
                    <h2 className="text-xl text-gray-700 p-3">Popular landmarks</h2>
                    <ul className="text-justify p-1">
                        {popularLandmarks.map((item, index) =>{
                            return(
                                <div className="flex flex-col p-1" key={index}>
                                    <div className="flex items-center gap-1">
                                        <CiLocationOn className="relative bottom-1" />
                                        <li className="relative bottom-1">{item.name}</li>
                                    </div>
                                    <li className="text-gray-400 text-sm block ml-5">{item.distance}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl text-gray-700 p-3">Nearby landmarks</h2>
                    <ul className="text-justify p-1">
                        {nearByLandmarks.map((item, index) =>{
                            return(
                                <div className="flex flex-col p-1" key={index}>
                                    <div className="flex items-center gap-1">
                                        <CiLocationOn className="relative bottom-1" />
                                        <li className="relative bottom-1">{item.name}</li>
                                    </div>
                                    <li className="text-gray-400 text-sm block ml-5">{item.distance}</li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NearPlaces;