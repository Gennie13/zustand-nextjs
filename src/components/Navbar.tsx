import React from "react";

export default function Navbar() {
    return (
        <nav className="my-4 min-w-lg ml-4 ">
          <a href="/" className="mr-4 p-2 rounded-lg hover:bg-blue-50">
            Todo
          </a>
          <a href="/add" className="p-2 rounded-lg hover:bg-blue-50">Үүсгэх</a>
        </nav>
    )
}