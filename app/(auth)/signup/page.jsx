'use client'

import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'

// Components
import AuthForm from '../AuthForm'

// export const metadata = {
//   title: 'Dojo Helpdesk - Create your account',
// } // Cannot be used with 'use client'

export default function SignupPage() {
  const router = useRouter()
  const [error, setError] = useState(null)

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()

    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/verify')
    }
  }

  return (
    <main>
      <h2 className="text-center">Signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  )
}
