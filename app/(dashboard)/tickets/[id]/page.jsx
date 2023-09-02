import { notFound } from 'next/navigation'

const { SERVER_URL } = process.env

export const dynamicParams = true

export async function generateMetadata({ params }) {
  const ticket = await getTicket(params.id)
  return {
    title: `Dojo Helpdesk | ${ticket.title}`,
    description: ticket.body.slice(0, 200),
  }
}

export async function generateStaticParams() {
  const response = await fetch(`${SERVER_URL}/tickets`)
  const tickets = await response.json()
  return tickets.map(ticket => ({ id: ticket.id }))
}

async function getTicket(id) {
  const response = await fetch(`${SERVER_URL}/tickets/${id}`, {
    next: {
      revalidate: 60,
    },
  })

  if (!response.ok) {
    notFound()
  }
  return response.json()
}

export default async function TicketPage({ params }) {
  const ticket = await getTicket(params.id)
  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
      </div>
    </main>
  )
}
