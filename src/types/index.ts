export type Todo = {
    id: String,
    name: String,
    description: String
}
export type CartItem = Todo & {cheked: boolean}

