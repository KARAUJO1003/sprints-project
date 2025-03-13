import { DataTable } from "@/components/extensions/data-table";
import { columns } from "./components/peoples-columns";

// async function getTasks() {
//   const data = await fs.readFile(
//     path.join(process.cwd(), "app/(app)/examples/tasks/data/tasks.json")
//   );

//   const tasks = JSON.parse(data.toString());

//   return z.array(taskSchema).parse(tasks);
// }

export default async function TaskPage() {
  // const tasks = await getTasks();
  return (
    <div>
      <DataTable
        data={[]}
        columns={columns}
      />
    </div>
  );
}
