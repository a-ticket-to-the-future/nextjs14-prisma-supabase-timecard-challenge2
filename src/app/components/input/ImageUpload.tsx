"use client"

import { useCallback } from 'react'
import { CldUploadWidget } from 'next-cloudinary'
import { TbPhotoPlus } from 'react-icons/tb'

import Image from 'next/image'

import React from 'react'


declare global {
    var cloudinary: any
}

type ImageUploadProps = {
    onChange:(value:string) => void
    value: string
}

type UploadResult = {
    info:{
        secure_url:string
    }
}

// function isValidUploadResult(result:any): result is UploadResult {
//   return 'info' in result && result.info !== null && 'success_url' in result.info && typeof result.info.secure_url === 'string';
// }


//画像アップロード
 

// const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value}) => {
  
  // //ここから
  // const handleUpload = useCallback((result:UploadResult)=> {
  //   if ('info' in result && result.info && 'secure_url' in result.info) {
  //     console.log(result.info.secure_url);
  //     onChange(result.info.secure_url);
  //   }
  // },[onChange])
  //ここまで

  const ImageUpload: React.FC<ImageUploadProps> = ({onChange,value}) => {
    const handleUpload = useCallback((result: UploadResult) => {
      // if (isValidUploadResult(result)) {
        console.log(result.info.secure_url);
        onChange(result.info.secure_url);
      // }
    },[onChange]);
  

    console.log(handleUpload)
  

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
      options={{
        maxFiles: 1,
        sources: ['local'],
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex h-80 cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 transition hover:opacity-70"
          >
            <TbPhotoPlus size={50} />
            <div className="text-sm font-semibold">画像をアップロード</div>

            {value && (
              <div className="absolute inset-0 h-full w-full">
                <Image src={value} className="object-cover" alt="image" fill />
              </div>
            )}
          </div>
        )
      }}
    </CldUploadWidget>
  )

}

export default ImageUpload