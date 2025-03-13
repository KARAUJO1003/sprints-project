"use client";
import { api } from "@/lib/axios-instance";
import { columns } from "./components/peoples-columns";
import { DataTableGlobal } from "@/components/DataTable/DataTableGlobal";
import { useQuery } from "@tanstack/react-query";

// }

export default function TaskPage() {
  const { data } = useQuery({
    queryKey: ["peoples"],
    queryFn: async () => {
      const { data } = await api.get("/peoples");
      return data;
    },
  });

  console.log(data);

  return (
    <div>
      <DataTableGlobal
        data={data ?? []}
        columns={columns}
      />
    </div>
  );
}
