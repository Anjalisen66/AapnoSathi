import React from 'react'
import { Gallery } from "react-grid-gallery";
import image1 from "../assets/image3.jpg"
import image2 from "../assets/pexels-abhinav-tripathi-473877923-15774210.jpg"
import image3 from "../assets/pexels-ankit-gupta-1279552-2491830.jpg"
import image4 from "../assets/pexels-axp-photography-500641970-19160099.jpg"

 const images = [
  {
    src: image1,
    width: 4,
    height: 3
  },
  {
    src: image2,
    width: 4,
    height: 2
  }, {
    src: image1,
    width: 1,
    height: 1
  },
  {
    src: image3,
    width: 4,
    height: 2
  }, {
    src: image1,
    width: 1,
    height: 1
  },
  {
    src: image2,
    width: 4,
    height: 3
  }, {
    src: image3,
    width: 4,
    height: 2
  },
   {
    src: image4,
    width: 1,
    height: 1
  },
  {
    src: image2,
    width: 4,
    height:2
  },
  {
    src: image2,
    width: 1,
    height: 1
  },
  {
    src: image3,
    width: 4,
    height: 2
  },
  {
    src: image3,
    width: 4,
    height: 3
  },
   {
    src: image3,
    width: 1,
    height: 1
  },
  {
    src: image4,
    width: 5    ,
    height: 2
  },
  {
    src: image1,
    width: 1,
    height: 1
  },
   {
    src: image3,
    width: 4,
    height: 3
  },
  {
    src: image2,
    width: 4,
    height: 2
  },
   {
    src: image3,
    width: 1,
    height: 1
  },
//     {
//     src: image2,
//     width: 4,
//     height: 2
//   },
//     {
//     src: image1,
//     width: 1,
//     height: 1
//   },
//    {
//     src: image4,
//     width: 4,
//     height: 3
//   },
//   {
//     src: image1,
//     width: 1,
//     height: 1
//   },
//   {
//     src: image3,
//     width: 4,
//     height: 2
//   },
//   {
//     src: image4,
//     width: 4,
//     height: 3
//   }
  
  
  
];


const ReacrCollage = () => {
  return (
   <div className='mt-10'>
    <Gallery images={images} />
   </div>

  )
}

export default ReacrCollage