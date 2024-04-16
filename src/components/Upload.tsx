'use client'
import { useUploadMutation } from '@/queries/upload-query'
import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone';

export default function Upload() {
  const [dragActive, setDragActive] = useState(false);
  const { mutate, isError, isSuccess, error } = useUploadMutation();

  const onDrop = useCallback(acceptedFiles => {
    let formData = new FormData()
    formData.append('file', acceptedFiles[0])
    mutate(formData)
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({onDrop})//accept: 'text/csv',

  return (
    <div className=''>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <label
          id="label-file-upload"
          htmlFor="input-file-upload"
          className={`
            flex flex-col gap-2 px-2 py-4 w-80 justify-center items-center
            rounded-xl border border-dashed hover:bg-gray-800
            cursor-pointer
            ${isError ? 'bg-red-800' : dragActive ? 'bg-gray-800' : ''}
            ${isSuccess ? 'border-green-600' : ''}
            pointer-events: none;
          `}>
            {isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drag 'n' drop some files here, or click to select files</p>
      }
          {!isError && 'Drag and drop csv file here'}
          {isError && <span className='text-white text-sm text-wrap'>{error.message}</span>}
        </label>
      </div>
    </div>
  )
}
