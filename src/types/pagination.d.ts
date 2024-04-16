export interface Pagination<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  pages: number;
}