import { create } from 'zustand'

type CounterTodo = {
    count: number
    increment: () => void
    decrement: () => void
}

export const useCountTodo = create<CounterTodo>((set) => ({
    count:0,
    increment: ()=> set((state)=> ({count: state.count+1})),
    decrement: ()=> set((state) => (
        state.count > 0
            ? {count: state.count -1} 
            : state
        
        )),
}))