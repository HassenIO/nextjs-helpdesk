import { NextResponse } from 'next/server'
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'

export async function middleware(request) {
  const response = NextResponse.next()
  const supabase = createMiddlewareClient({ request, response })
  await supabase.auth.getSession()
  return response
}
