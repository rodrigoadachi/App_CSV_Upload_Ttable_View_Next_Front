import { onlyNumber } from "./format.util";

export const validateRegistrationNumber = ( value: number | string): string => {
  const type = validateCPF(value.toString())
    ? 'CPF'
    : validateCNPJ(value.toString())
    ? 'CNPJ'
    : 'Invalid'
  return type
}

export const formatCPF = (value: string): string => {
  const cpf = value.padStart(11,'0')
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
}

export const validateCPF = (cpf: string): boolean => {
  cpf = onlyNumber(cpf).toString().padStart(11, '0')
  let sum = 0
  let remainder

  for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  remainder = (sum * 10) % 11;

  if (remainder === 10 || remainder === 11) remainder = 0;
  if (remainder !== parseInt(cpf.substring(10, 11))) return false;

  return true;
}

export const validateCNPJ = (cnpj: string): boolean => {
  cnpj = onlyNumber(cnpj).toString()

  if (/^(\d)\1+$/.test(cnpj)) return false

  let size = cnpj.length - 2
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== parseInt(digits.charAt(0))) return false

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - sum % 11;
  if (result !== parseInt(digits.charAt(1))) return false

  return true
}

export const formatCNPJ = (value: string): string => {
  const cnpj = value.padStart(14,'0')
  return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5")
}

export const formatRegistrationNumber = (value: number | string): string => {
  const valueNumber = onlyNumber(value)
  const type = validateRegistrationNumber(value)
  return type === 'CNPJ'
    ? formatCNPJ(`${valueNumber}`)
    : type === 'CPF'
    ? formatCPF(`${valueNumber}`)
    : `${valueNumber}`
}