'use client'

import AuthForm from "../AuthForm"

// export const metadata = {
//   title: 'Dojo Helpdesk - Access your account',
// } // Cannot be used with 'use client'

export default function LoginPage() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    console.log('Login user with', email, password)
  }

  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  )
}
