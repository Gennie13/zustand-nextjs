"use client";
import { useCountTodo } from "@/store/counter";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { Checkbox } from "@/components/ui/checkbox";
import { Todo, CartItem } from "@/types";
import { useCartStore } from "@/store/cart";
import { Trash2 } from "lucide-react";
{
  /*
  
const dummyTodo: Todo[] = [
  { id: "1", name: "Эхний гарчиг", description: "тайлбар мэдээлэл1" },
  { id: "2", name: "Гарчиг 2", description: "тайлбар мэдээлэл2" },
  { id: "3", name: "Гарчиг 3", description: "тайлбар мэдээлэл3" },
];
  */
}

export default function Home() {
  const router = useRouter();
  const { count, increment, decrement } = useCountTodo();
  const addTodo = useCartStore((s) => s.addToCart);
  const { items, removeFromCart, clearCart, updateTodo } = useCartStore();
  const total = items.reduce(() => items.length, 0);
  
  return (
    <div className="grid grid-rows-[10px_40px_10px] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h2 className="font-bold">Хийх ажлын жагсаалт</h2>
      <ul className="flex flex-col gap-2 bg-blue-200 p-4 rounded-lg">
        {items.map((item, i) => (
          <li key={i} className="flex gap-4 items-center">
            <Trash2
              className="text-blue-50"
              id={`checkbox-${item.id}`}
              onClick={() => removeFromCart(item.id)}
            />
            <label
              htmlFor={`checkbox-${item.id}`}
              className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              onClick={() =>
              {router.push({pathname:'/update', query: {id:item.id, name: item.name, description: item.description}})}
              }
            >
              {item.name}
            </label>
          </li>
        ))}
      </ul>
      <div className="flex flex-col justify-evenly items-center">
        <h3 className="flex mb-6 mt-2">Нийт: {total}</h3>
        <div className="flex ">
          <Button
            onClick={clearCart}
            className="bg-white text-blue-700 rounded-full px-3 mr-6 hover:bg-slate-100"
          >
            <Trash2 />
          </Button>
          <Button
            onClick={() => router.push("/add")}
            className="bg-blue-600 rounded-full px-3 hover:bg-slate-100 hover:text-blue-700 text-xl"
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
}
