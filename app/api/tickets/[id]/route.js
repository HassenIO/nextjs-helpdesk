import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET(_request, { params }) {
  const ticketId = params.id
  const response = await fetch(`http://localhost:4000/tickets/${ticketId}`)

  if (!response.ok) {
    return NextResponse.json({ error: `Cannot find ticket ${ticketId}` }, { status: 404 })
  }

  const ticket = await response.json()

  return NextResponse.json(ticket, {
    status: 200,
  })
}
