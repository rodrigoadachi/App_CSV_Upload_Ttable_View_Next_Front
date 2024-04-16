'use client'
import React, { useState } from 'react'
import { useContract } from '@/queries/contract-query';
import { TableHeaders } from '@/types/table';
import { ContractProps } from '@/types/contract';
import Table from '@/components/Table';
import { coinToBRL } from '@/utils/coin.util';
import { formatRegistrationNumber, validateRegistrationNumber } from '@/utils/registration.util';
import { formatDateToString } from '@/utils/format.util';
import Loader from './Loader';

export default function TableContract() {
  const [ currentPage, setCurrentPage ] = useState<number>(1)
  const { data, isLoading, error } = useContract(currentPage)

  const headers: TableHeaders<ContractProps>[] = [
    { label: 'Produto', row: item => item.dsProduto },
    { label: 'CpfCnpj', row: item => formatRegistrationNumber(item.nrCpfCnpj) },
    { label: 'validação', row: item => validateRegistrationNumber(item.nrCpfCnpj) },
    { label: 'Total', row: item => coinToBRL(item.vlTotal) },
    { label: 'Prestações', row: item => item.qtPrestacoes },
    { label: 'Prestação', row: item => coinToBRL(item.vlPresta) },
    { label: 'Mora', row: item => coinToBRL(item.vlMora) },
    { label: 'Validação', row: item => item.validate },
    { label: 'dtContrato', row: item => formatDateToString(new Date(item?.dtContrato)) },
    { label: 'dtVctPre', row: item => formatDateToString(new Date(item?.dtVctPre)) },
    { label: 'idSituac', row: item => item.idSituac },
    { label: 'idSitVen', row: item => item.idSitVen },
  ]

  return (
    <div className='w-full justify-center items-start'>
      {isLoading && <div className='inline-flex justify-center w-full'><Loader /></div>}
      {!isLoading && <Table<ContractProps> headers={headers} data={data} onPageChange={setCurrentPage} />}
    </div>
  )
}
