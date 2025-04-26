export type Todo = {
    id: number,
    name: String,
    description: String
}
export type CartItem = Todo & {cheked: boolean}

