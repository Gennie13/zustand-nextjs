import {create} from 'zustand'
import { CartItem, Todo } from '@/types'
import { persist } from 'zustand/middleware'

type CartStore ={
    items: CartItem[]
    addToCart: (todo: Todo) => void
    removeFromCart: (id:string) => void
    clearCart: () => void
}

export const useCartStore = create<CartStore>()(
    persist(
        (set) => ({
            items: [],
            addToCart: () => 
        }),
        {
            name: 'todo-storage',
            partialize: (state)
        }
    )
)