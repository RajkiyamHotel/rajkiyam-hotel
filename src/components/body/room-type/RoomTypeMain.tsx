import React from "react";
import RoomTypeComp from "./RoomTypeComp";
import Address from "../address/Address";
import NearPlaces from "../address/NearPlaces";

const RoomTypeMain = () =>{
    return(
        <div className="bg-white">
            <RoomTypeComp />
            <Address />
            <NearPlaces />
        </div>
    );
}

export default RoomTypeMain;