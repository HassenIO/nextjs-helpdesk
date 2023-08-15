import { Suspense } from 'react'
import TicketsList from './TicketsList'
import Loading from '../loading'

export default function TicketsPage() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>Open tickets:</small>
          </p>
        </div>
      </nav>

      <Suspense fallback={<Loading />}>
        <TicketsList />
      </Suspense>
    </main>
  )
}
