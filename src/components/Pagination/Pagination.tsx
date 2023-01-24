import React from "react";

interface IPaginationProps {
  count: number;
  next: number;
  pages: number;
  prev: number;
}

const Pagination = (info: IPaginationProps) => {
  return <div>{info.count}</div>;
};

export default Pagination;
