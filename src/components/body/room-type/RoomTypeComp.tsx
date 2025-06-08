import React, {useState} from "react";
import { allImage } from "@/components/utils/imageList"; // Assuming this is an array of image objects
import Image from "next/image";
import Paper from '@mui/material/Paper';

import ImageModal from "./ImageModal";
import { DELUX, DOUBLE, STANDARD } from "@/constants/names";

interface ModelImage {
  id: number;
  url: string;
  displayToMain: boolean;
  roomType: string;
}


const STD_ROOM_TYPE = "standard"
const DELUX_ROOM_TYPE = "delux"
const DOUBLE_ROOM_TYPE = "double"

const RoomTypeComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageId, setImageId] = useState(1);
  const [roomType, setRoomType] = useState("");

  const[modelImageList, setModelImageList] = useState(allImage.filter(img => img.roomType === STD_ROOM_TYPE))
  const[modelImageDelux, setModelImageDelux] = useState(allImage.filter(img => img.roomType === DELUX_ROOM_TYPE));
  const[modelImageDouble, setModelImageDouble] = useState(allImage.filter(img => img.roomType === DOUBLE_ROOM_TYPE));

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const imageClicked = async (id: number) =>{   
    setRoomType(STD_ROOM_TYPE) 
    const reorderedImages = reorderArrayById(id, modelImageList);
    setImageId(id)
    setModelImageList(reorderedImages);
  }
  const deluxImageRoomClicked = (id: number) =>{  
    setRoomType(DELUX_ROOM_TYPE)
    const reorderedImages = reorderArrayById(id, modelImageDelux);
    setImageId(id)
    setModelImageDelux(reorderedImages);
  }
  const doubleImageRoomClicked = (id: number) =>{  
    setRoomType(DOUBLE_ROOM_TYPE)
    const reorderedImages = reorderArrayById(id, modelImageDouble);
    setImageId(id)
    setModelImageDouble(reorderedImages);
  }

  function reorderArrayById(id: number, array: ModelImage[]): ModelImage[] {
    const targetItem = array.find(item => item.id === id);
    if (!targetItem) return array;
    const remainingItems = array.filter(item => item.id !== id);
    return [targetItem, ...remainingItems];
  }
  
  return (
    <div className="text-center bg-white">
      <h2 className="text-xl text-gray-700 p-4 text-center">{STANDARD}</h2>
      <div className="p-4 md:p-6 flex gap-10 justify-evenly">
        {/* standard room type */}
        <Paper onClick={openModal} className="p-1 cursor-pointer">
            <div className="bg-white grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modelImageList.map((image, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <Image
                      onClick={() => imageClicked(image.id)}
                      src={image.url}
                      alt="Room Image"
                      width={400}
                      height={400}
                      quality={100}
                      className="object-cover rounded-md"
                    />
                  </div>
                );
              })}
            </div>
        </Paper>
      </div>
      <h2 className="text-xl text-gray-700 m-4 text-center">{DELUX}</h2>
      <div className="p-4 md:p-6 flex gap-10 justify-evenly">
        <Paper onClick={openModal} className="p-1 cursor-pointer">
            <div className="bg-white grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modelImageDelux.map((image, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <Image
                      onClick={() => deluxImageRoomClicked(image.id)}
                      src={image.url} // The path to your image file
                      alt="Room Image"
                      width={400}
                      height={400}
                      quality={100}
                      className="object-cover rounded-md"
                    />
                  </div>
                );
              })}
            </div>
        </Paper>
     
      </div>
      <h2 className="text-xl text-gray-700 m-4 text-center">{DOUBLE}</h2>
      <div className="p-4 md:p-6 flex gap-10 justify-evenly">
        <Paper onClick={openModal} className="p-1 cursor-pointer">
            <div className="bg-white grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {modelImageDouble.map((image, index) => {
                return (
                  <div key={index} className="flex justify-center">
                    <Image
                      onClick={() => doubleImageRoomClicked(image.id)}
                      src={image.url}
                      alt="Room Image"
                      width={400}
                      height={400}
                      quality={100}
                      className="object-cover rounded-md"
                    />
                  </div>
                );
              })}
            </div>
        </Paper>
      </div>
      <ImageModal 
        images={
          (roomType === STD_ROOM_TYPE && modelImageList) || 
          (roomType === DELUX_ROOM_TYPE && modelImageDelux) || 
          (roomType === DOUBLE_ROOM_TYPE && modelImageDouble) ||
          modelImageList } 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        id={imageId} 
      />
    </div>
  );
};

export default RoomTypeComp;
