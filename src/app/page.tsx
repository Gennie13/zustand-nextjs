"use client";
import { useCountTodo } from "@/store/counter";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";

export default function Home() {
  const router = useRouter();
  const { count, increment, decrement } = useCountTodo();
   const 
  return (
    <div className="grid grid-rows-[10px_40px_10px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2>Хийх ажлын жагсаалт</h2>
      <div className="flex items-center space-x-1 bg-blue-200 p-4 rounded-lg">
        <Checkbox id="terms" className="bg-white" />
        <label
          htmlFor="terms"
          className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Dummy text
        </label>
      </div>
      <Button onClick={() => router.push("/add")}>+</Button>
    </div>
  );
}
