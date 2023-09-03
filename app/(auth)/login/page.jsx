'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useState } from "react"

// Components
import AuthForm from "../AuthForm"
import { useRouter } from "next/navigation"

// export const metadata = {
//   title: 'Dojo Helpdesk - Access your account',
// } // Cannot be used with 'use client'

export default function LoginPage() {
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError(null)
    
    const supabase = createClientComponentClient()
    const { error } = await supabase.auth.signInWithPassword({ email, password })

    if (error) {
      setError(error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div className="error">{error}</div>}
    </main>
  )
}
