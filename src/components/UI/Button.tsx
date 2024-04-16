import React from 'react'

interface props {
  label: string
}

export default function Button({ label }: props) {
  return (
    <button className='border rounded-xl px-4 py-1 drop-shadow-sm hover:border-blue-600'>
      { label }
    </button>
  )
}
