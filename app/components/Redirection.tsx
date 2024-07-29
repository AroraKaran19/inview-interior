'use server'
 
import { redirect } from 'next/navigation'
 
export async function Redirection(redirectUrl: string) {
  redirect(`/category/${redirectUrl}`);
}