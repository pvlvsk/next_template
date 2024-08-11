import { useRouter } from 'next/router'
 
export default function TestPage() {
  const router = useRouter()
  return <p>Test: {router.query.id}</p>
}