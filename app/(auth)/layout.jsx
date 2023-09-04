import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

// Components
import Link from 'next/link'

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  if (data.session) {
    redirect('/')
  }

  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <div className="ml-auto">
          <Link href="/signup" className="mx-4">
            Signup
          </Link>
          <Link href="/login" className="mx-4">
            Login
          </Link>
        </div>
      </nav>
      {children}
    </>
  )
}
