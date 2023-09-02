import { NextResponse } from 'next/server'

const { SERVER_URL } = process.env

export const dynamic = 'force-dynamic'

export async function GET() {
  const response = await fetch(`${SERVER_URL}/tickets`)
  const tickets = await response.json()
  return NextResponse.json(tickets, {
    status: 200,
  })
}

export async function POST(request) {
  const ticket = await request.json()
  const response = await fetch(`${SERVER_URL}/tickets`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(ticket),
  })

  const newTicket = await response.json()
  return NextResponse.json(newTicket, {
    status: 201,
  })
}
