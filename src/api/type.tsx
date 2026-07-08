export type TResponseWithPagination<T> = {
  data: {
    currentPage: number;
    data: T;
    hasNext: boolean;
    hasPrevious: boolean;
    pageSize: number;
    totalCount: number;
    totalPages: number;
  };
};
