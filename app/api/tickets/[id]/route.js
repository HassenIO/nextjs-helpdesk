import { NextResponse } from 'next/server'

const { SERVER_URL } = process.env

export const dynamic = 'force-dynamic'

export async function GET(_request, { params }) {
  const ticketId = params.id
  const response = await fetch(`${SERVER_URL}/tickets/${ticketId}`)

  if (!response.ok) {
    return NextResponse.json({ error: `Cannot find ticket ${ticketId}` }, { status: 404 })
  }

  const ticket = await response.json()

  return NextResponse.json(ticket, {
    status: 200,
  })
}
