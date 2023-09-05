import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

export const dynamic = 'force-dynamic'

async function supabaseClient() {
  const supabase = createRouteHandlerClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  return { supabase, session }
}

export async function GET() {
  const { supabase } = await supabaseClient()
  const { data, error, status } = await supabase.from('tickets').select()

  console.log({ data, error, status })

  return NextResponse.json({ data, error, status })
}

export async function POST(request) {
  const ticket = await request.json()

  const { supabase, session } = await supabaseClient()
  const { data, error } = await supabase
    .from('tickets')
    .insert({ ...ticket, user_email: session.user.email })
    .select()
    .single()

  return NextResponse.json({ data, error })
}
