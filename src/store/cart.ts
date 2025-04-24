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
            addToCart: (todo) =>
                set((state) => {
                    const existing = state.items.find((item) => item.id === todo.id)
                    if(existing){
                        return {
                            items: state: state.items.map
                        }
                    }
                }) 
        }),
        {
            name: 'todo-storage',
            partialize: (state)
        }
    )
)