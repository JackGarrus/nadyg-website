"use client";

import s from "@/app/components/Table.module.css";
import { TableData } from "../types";

type TableProps = {
  tableData: TableData;
};

const Table = ({ tableData }: TableProps) => {
  return (
    <table className={s.table}>
      <thead>
        <tr>
          {tableData.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableData.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
