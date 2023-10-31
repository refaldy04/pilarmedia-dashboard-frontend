"use client";

import { useEffect, useState } from "react";
import DataTable from "./components/Table";
import Select from "./components/Dropdown";

export default function Home() {
  const [param, setParam] = useState("year");
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        `http://localhost:3334/admin/salesByDate/${param}`
      ).then((e) => e.json());
      setDataTable(res.result);
    };

    getData();
  }, [param]);

  const onSelect = (value: any) => {
    setParam(value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-5">
      <div>
        <Select setParam={onSelect} />
      </div>
      <DataTable dataTable={dataTable} />
    </main>
  );
}
