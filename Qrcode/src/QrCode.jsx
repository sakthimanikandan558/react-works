import React, { useState } from 'react'

const QrCodeFun=()=>{
  const [img,setImg]=useState("")
  const [qrData,setQrData]=useState("")
  const [imgSize,setImgSize]=useState(150)
  async function generateQR(){
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${imgSize}x${imgSize}&data=${encodeURIComponent(qrData)}`;
      setImg(url)
    }
    catch(error){
      console.error("Error generating QR code",error)
    }
  }
  function downloadQR(){
    // const imageUrl = img;
    // const link = document.createElement('a');
    // link.href = imageUrl;
    // link.download = 'image.jpg';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
    fetch(img)
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'image.jpg'; // You can specify the file name here
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    })
    .catch(error => console.error('Error downloading image:', error));
  }
    return(<>
    <div className='lg:w-full h-screen flex flex-col justify-center items-center overflow-x-hidden'>
        <p className="text-blue-700 text-[20px] mb-4">QR CODE GENERATOR</p>
        {img&&<img src={img} className='' alt="" />}
        <label className="text-blue-700 text-[20px]" htmlFor="QrData">Data for QR code:</label>
        <input className='border-2 border-blue-500 py-2 pl-2 md:pr-[250px] pr-[100px]' type="text" placeholder='Enter Data for QR code' onChange={(e)=> setQrData(e.target.value)}/>
        <label className="text-blue-700 text-[20px] mt-5" htmlFor="Image">Image Size (eg.,150):</label>
        <input className='border-2 border-blue-500 py-2 pl-2 md:pr-[250px] pr-[100px]' type="text" placeholder='Enter Image Size' onChange={(e)=> setImgSize(e.target.value)} />
        <div className='flex'>
        <button className='p-4 lg:px-8 bg-blue-500 text-white rounded-md mt-6 hover:bg-blue-600' onClick={generateQR}>Generate QR Code</button>
        <button className='p-4 lg:px-8 bg-green-500 text-white rounded-md mt-6 ml-4 hover:bg-green-600' onClick={downloadQR}>Download QR Code</button>
        </div>
        <p className='mt-6 text-[17px]'>Designed by <span className='text-blue-600'>Stark Sakthi</span> </p>
    </div>   
        </>)
}

export const QrCode = () => {
  return (
    <QrCodeFun/>
  )
}
