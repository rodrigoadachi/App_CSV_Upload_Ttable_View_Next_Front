import { Pagination } from '@/types/pagination'
import { TableHeaders } from '@/types/table'
import React from 'react'
import Paginator from './Paginator'

interface props<T> {
  headers: TableHeaders<T>[]
  data: Pagination<T>
  onPageChange: (page: number) => void
}

export default function Table<T>({ headers, data, onPageChange }: props<T>) {
  return (
    <div className='flex flex-col gap-4 justify-center'>
      <table className='table-auto'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index} className='px-4 py-2 border border-gray-400'>{header?.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((row, index) => (
            <tr key={index} className='hover:bg-gray-800'>
              {headers.map((header, key) => (
                <td key={key} className='text-xs px-2 py-1 border-b border-b-gray-600'>{header.row(row)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Paginator currentPage={data?.page} totalPages={data?.pages} onPageChange={onPageChange} />
    </div>
  )
}
