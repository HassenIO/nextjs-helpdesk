import Link from 'next/link'

async function getTickets() {
  const response = await fetch('http://localhost:4000/tickets', {
    next: {
      revalidate: 0,
    },
  })
  return response.json()
}

export default async function TicketsList() {
  const tickets = await getTickets()

  return (
    <>
      {tickets.map(ticket => (
        <div className="card my-5" key={ticket.id}>
          <Link href={`/tickets/${ticket.id}`}>
            <h3>{ticket.title}</h3>
            <p>{ticket.body.slice(0, 200)}...</p>
            <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
          </Link>
        </div>
      ))}
      {tickets.length === 0 && <p className="text-center">No open tickets, yay!</p>}
    </>
  )
}