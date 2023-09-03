import Image from 'next/image'
import Link from 'next/link'
import Logo from 'public/dojo-logo.png'

export default function Navbar({ user }) {
  return (
    <nav className="flex">
      <Image src={Logo} alt="Dojo Helpdesk Logo" width={70} quality={100} placeholder="empty" />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
      <Link href="/tickets/create" className="ml-auto">
        <button className="btn-primary">Create a Ticket</button>
      </Link>
      {user && <span>Hello, {user.email}</span>}
    </nav>
  )
}
