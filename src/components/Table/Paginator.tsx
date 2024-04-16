import React from 'react'
import Button from './Button'

interface props {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export default function Paginator({ currentPage, totalPages, onPageChange }: props) {
  const canGoBack = currentPage > 1
  const canGoForward = currentPage < totalPages

  let pagesToShow;
  if (currentPage === 1)
    pagesToShow = [1, 2, 3];
  else if (currentPage === totalPages)
    pagesToShow = [totalPages - 2, totalPages - 1, totalPages];
  else
    pagesToShow = [currentPage - 1, currentPage, currentPage + 1];

  return (
    <div className='inline-flex gap-2 justify-center items-center'>
      <Button
        label='First'
        onClick={() => onPageChange(1)}
        disabled={!canGoBack}
      />
      {pagesToShow.map((page, key) => (
        <Button
          key={key}
          label={`${page}`}
          onClick={() => onPageChange(page)}
          disabled={page < 1 || page > totalPages || page === currentPage}
          active={currentPage === page}
        />
      ))}
      <Button
        label='Last'
        onClick={() => onPageChange(totalPages)}
        disabled={!canGoForward}
      />
    </div>
  )
}
