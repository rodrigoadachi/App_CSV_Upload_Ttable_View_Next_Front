import Upload from "@/components/Upload";
import TableContract from "./components/TableContract";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col gap-4 items-start justify-between p-24">
      <div className="w-full h-full flex flex-col gap-10">
        <Upload />
        <TableContract />
      </div>
    </main>
  );
}
