import { useRouter } from 'next/router'
 
export default function Page() {
  const router = useRouter()
  return <p>Pais: {router.query.country}</p>
}