"use client";
import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Image from "next/image";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "pan_no", headerName: "Pan Number", width: 130 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "phone", headerName: "Phone", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "profession", headerName: "Profession", width: 130 },
  { field: "note", headerName: "Note", width: 130 },
  { field: "fee", headerName: "Fee", width: 130 },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="flex items-start justify-end">
          {params.value === true ? (
            <div className="h-3.5 w-3.5 rounded-full bg-green-500 me-2" />
          ) : (
            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" />
          )}
          {params.value === true ? "Paid" : "Unpaid"}
        </div>
      );
    },
  },
  {
    field: "imageUrl",
    headerName: "Image",
    width: 80,
    editable: true,
    renderCell: (params) => (
      <Image
        src={params.value}
        width={35}
        height={35}
        style={{
          borderRadius: "50%",
        }}
      />
    ),
  },
];

const rows = [
  {
    id: 1,
    name: "Vishal Kumar",
    phone: "8077124436",
    pan_no: "AFQPA7358J",
    email: "yadav11adu@gmail.com",
    profession: "Engineer",
    note: "Good Person",
    fee: 100,
    status: true,
    imageUrl: "/avatar1.jpg",
  },
];

export default function DataTable() {
  return (
    <div className="container max-w-7xl my-12 mx-auto box-border shadow-sm sm:rounded-lg border border-gray-200 hover:shadow-md transition">
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
