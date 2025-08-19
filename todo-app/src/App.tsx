import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import './App.css'

interface Todo {
  id: number
  text: string
  createdAt: string
}

function App() {
  const [tasks, setTasks] = useState<Todo[]>([])
  const [inputValue, setInputValue] = useState('')
  const [loading, setLoading] = useState(false)

  const API_BASE_URL = 'http://localhost:3001'

  useEffect(() => {
    fetchTasks()
  }, [])

  const fetchTasks = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos`)
      if (response.ok) {
        const todos = await response.json()
        setTasks(todos)
      }
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }

  const addTask = async () => {
    if (inputValue.trim() !== '') {
      setLoading(true)
      try {
        const response = await fetch(`${API_BASE_URL}/todos`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: inputValue.trim() }),
        })
        
        if (response.ok) {
          const newTodo = await response.json()
          setTasks([...tasks, newTodo])
          setInputValue('')
        }
      } catch (error) {
        console.error('Error adding task:', error)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          todoリスト
        </h1>
        
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>新しいタスクを追加</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="タスクを入力してください..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button onClick={addTask} disabled={loading}>
                {loading ? '追加中...' : '追加'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>タスク一覧</CardTitle>
          </CardHeader>
          <CardContent>
            {tasks.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                まだタスクがありません
              </p>
            ) : (
              <ul className="space-y-2">
                {tasks.map((task) => (
                  <li
                    key={task.id}
                    className="p-3 bg-white border rounded-lg shadow-sm"
                  >
                    {task.text}
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default App
