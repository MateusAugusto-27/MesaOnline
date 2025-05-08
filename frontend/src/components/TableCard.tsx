// src/components/TableCard.tsx
import React from "react";
import "./TableCard.css";

type TableProps = {
  number: number;
  status: "livre" | "ocupada" | "reservada";
};

export default function TableCard({ number, status }: TableProps) {
  return (
    <div className={`table-card ${status}`}>
      <h2>Mesa {number}</h2>
      <p>Status: {status}</p>
    </div>
  );
}
