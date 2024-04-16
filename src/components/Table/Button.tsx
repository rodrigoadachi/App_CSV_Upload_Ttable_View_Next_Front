import React from 'react'

interface props {
  label: string
  disabled?: boolean
  active?: boolean
  onClick: () => void
}

export default function Button({ label, disabled, active, onClick }: props) {
  return (
    <button
      className={`
        px-4 py-2 rounded-full disabled:cursor-not-allowed
        ${active
          ? 'bg-white text-black font-semibold'
          : 'bg-gray-400 text-gray-800'
        }
      `}
      onClick={onClick}
      disabled={disabled}>
      {label}
    </button>
  )
}
