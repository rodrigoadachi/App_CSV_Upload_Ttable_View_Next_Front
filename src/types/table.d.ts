import { ReactNode } from "react"

export type TableHeaders<T> = {
  label: string
  row: (item: T) => ReactNode
}