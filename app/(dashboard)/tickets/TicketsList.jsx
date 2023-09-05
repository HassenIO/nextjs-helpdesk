import Link from 'next/link'

const { NEXT_PUBLIC_ROOT_URL } = process.env

async function getTickets() {
  const response = await fetch(`${NEXT_PUBLIC_ROOT_URL}/api/tickets`, { next: { revalidate: 0 } })
  return response.json()
}

export default async function TicketsList() {
  const { data: tickets, status } = await getTickets()

  return (
    // TODO: Display an error if any
    <>
      {status === 200 &&
        tickets.map(ticket => (
          <div className="card my-5" key={ticket.id}>
            <Link href={`/tickets/${ticket.id}`}>
              <h3>{ticket.title}</h3>
              <p>{ticket.body.slice(0, 200)}...</p>
              <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </Link>
          </div>
        ))}
      {status === 200 && tickets.length === 0 && <p className="text-center">No open tickets, yay!</p>}
    </>
  )
}
