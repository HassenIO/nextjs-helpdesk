'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

const { NEXT_PUBLIC_ROOT_URL } = process.env

export default function CreateForm() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [priority, setPriority] = useState('low')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)

    const newTicket = { title, body, priority }

    console.log(`NEXT_PUBLIC_ROOT_URL: ${NEXT_PUBLIC_ROOT_URL}`)

    const res = await fetch(`${NEXT_PUBLIC_ROOT_URL}/api/tickets`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTicket),
    })

    const { data, error } = await res.json()

    if (error) {
      console.log(error.message || error)
    }
    if (data) {
      router.refresh()
      router.push('/tickets')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
      <label>
        <span>Title:</span>
        <input required type="text" onChange={e => setTitle(e.target.value)} value={title} />
      </label>
      <label>
        <span>Content:</span>
        <textarea required onChange={e => setBody(e.target.value)} value={body} />
      </label>
      <label>
        <span>Priority:</span>
        <select onChange={e => setPriority(e.target.value)} value={priority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <button className="btn-primary" disabled={isLoading}>
        {isLoading && <span>Adding...</span>}
        {!isLoading && <span>Add Ticket</span>}
      </button>
    </form>
  )
}
