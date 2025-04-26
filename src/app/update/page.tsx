"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCountTodo } from "@/store/counter";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart";
import { Todo } from "@/types";

export default function Update({ id, name, description }: Todo) {
  const router = useRouter();
  const [title, setTitle] = useState(name)
  const [desc, setDesc] = useState(description)
  const { items, updateTodo } = useCartStore();

  const saveTodo = () => {
    const title = document.querySelector("input")?.value;
    const description = document.querySelector("textarea")?.value;
    console.log("update items---> ", items);
    if (title && description) {
      updateTodo({
        id,
        name: title,
        description,
      });
      console.log("updated items---> ", items);
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col items-center bg-slate-200 mx-5 space-x-1 p-4 rounded-lg">
      <div className="my-2 ">
        <Label>Гарчиг</Label>
        <Input
          type="text"
          value={name.toString()} onChange={(e) => setTitle(e.target.value)}
          className="bg-slate-50 mt-2"
        />
      </div>
      <div className="my-2 w-auto">
        <Label>Дэлгэрэнгүй бичих</Label>
        <Textarea value={desc.toString()}  className="bg-slate-50 mt-2" onChange={(e) => setDesc(e.target.value)} />
      </div>

      <Button className="bg-green-600 mt-5" onClick={saveTodo}>
        Хадгалах
      </Button>
    </div>
  );
}
//saas softwa
