import TicketList from "./TicketList";

export default function TicketsPage() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Open tickets:</small></p>
        </div>
      </nav>
      <TicketList/>
    </main>
  )
}
