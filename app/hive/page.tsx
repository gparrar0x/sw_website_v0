// Legacy route redirect — traffic now served via /[locale]/hive
// Keep this file for backwards URL compatibility
import { redirect } from 'next/navigation'
export default function HiveRedirect() {
  redirect('/es/hive')
}
