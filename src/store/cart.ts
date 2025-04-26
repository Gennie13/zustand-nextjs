import { create } from "zustand";
import { Todo } from "@/types/";
import { persist } from "zustand/middleware";
import { stat } from "fs";

type CartStore = {
  items: Todo[];
  addToCart: (todo: Todo) => void;
  updateTodo: (updatedFields: Todo) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [{ name: "hehe", description: "desc", id: 1 }],
      addToCart: (todo) => {
        if (!todo.name || !todo.description) return;

        set((state) => ({
          items: [...state.items, { ...todo }],
        }));
      },
      updateTodo: (updatedFields) => {
        set((state) => ({
          items: state.items.map((item) => item.id === updatedFields.id ? { ...item, ...updatedFields } : item
          )
        }));
      },
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
      }),
    }
  )
);
