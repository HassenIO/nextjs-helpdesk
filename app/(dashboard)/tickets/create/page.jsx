import CreateForm from './CreateForm'

export const metadata = {
  title: 'Dojo Helpdesk - Create a new Ticket',
}

export default function CreateTicketPage() {
  return (
    <main>
      <h2 className="text-primary text-center">Create a Ticket</h2>
      <CreateForm />
    </main>
  )
}
