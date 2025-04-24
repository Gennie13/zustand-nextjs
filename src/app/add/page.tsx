"use client";
import React from "react";
import {useRouter} from "next/navigation";
import { useCountTodo } from "@/store/counter";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Add() {
    const router =  useRouter()
    const saveTodo = () => {
        router.push("/")
    }
  return (
    <div className="flex flex-col items-center bg-slate-200 mx-5 space-x-1 p-4 rounded-lg">
      <div className="my-2 ">
        <Label>Гарчиг</Label>
        <Input type="text" placeholder="Гарчиг бичих..."  className="bg-slate-50 mt-2"/>
      </div>
      <div className="my-2 w-auto">
        <Label>Дэлгэрэнгүй бичих</Label>
        <Textarea placeholder="Мэдээллээ бичих..." className="bg-slate-50 mt-2"/>
      </div>
      
      <Button className="bg-green-600 mt-5" onClick={saveTodo}>Хадгалах</Button>
    </div>
  );
}
