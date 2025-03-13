"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Checkbox } from "@/components/ui/checkbox";
import { DataTableRowActions } from "@/components/extensions/data-table-row-actions";

import { z } from "zod";
import { DataTableColumnHeader } from "@/components/DataTable/DataTableHeaderColumn";
import { formatDate } from "date-fns";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.string(),
  nome: z.string(),
  email: z.string(),
  telefone: z.string(),
  updatedAt: z.string(),
  createdAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;

export const columns: ColumnDef<Task>[] = [
  {
    id: "actions",
    accessorKey: "actions",
    header: () => null,
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Atualizado em"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue<string>("updatedAt");
      const formatedDate = formatDate(new Date(value), "dd MMM yyyy");
      return <div className="w-[80px]">{formatedDate}</div>;
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "nome",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Nome"
      />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex space-x-2">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("nome")}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="email"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue<string>("email");
      return (
        <div className="flex w-[100px] items-center">
          <span>{value}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "telefone",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="telefone"
      />
    ),
    cell: ({ row }) => {
      const value = row.getValue<string>("telefone");

      if (!value) {
        return null;
      }

      return (
        <div className="flex items-center">
          <span>{value}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: () => null,
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
