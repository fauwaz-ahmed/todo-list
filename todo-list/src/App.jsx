import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }])
      setInput('')
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen py-15 bg-[url('./assets/bg.jpg')] bg-cover bg-center h-screen w-full">
      <div className="w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-green-500">
          
          <h1 className="text-2xl font-bold text-white text-center">Aim-Anchor</h1>
        </div>
        
        <div className="p-6">
          <div className="flex mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a your aim..."
              className="flex-grow px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500 mr-2"
            />
            <button
              onClick={addTodo}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Add
            </button>
          </div>
          
          <ul className="space-y-2">
            {todos.length === 0 ? (
              <li className="text-gray-500 text-center py-4">No tasks yet. Add one above!</li>
            ) : (
              todos.map(todo => (
                <li key={todo.id} className="flex items-center justify-between p-3 border rounded">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                      onChange={() => toggleTodo(todo.id)}
                      className="h-5 w-5 text-green-500 rounded focus:ring-green-400"
                    />
                    <span 
                      className={`ml-3 ${todo.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}
                    >
                      {todo.text}
                    </span>
                  </div>
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    Delete
                  </button>
                </li>
              ))
            )}
          </ul>
          
          {todos.length > 0 && (
            <div className="mt-4 text-sm text-gray-500">
              {todos.filter(todo => !todo.completed).length} tasks remaining
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App