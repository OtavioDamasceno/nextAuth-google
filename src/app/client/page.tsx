"use client"
import { useSession } from "next-auth/react"



const ClientPage = () => {

    const {data: session} = useSession();

    if(!session || !session.user) return <p>Você precisa estar autenticado!</p> 

  return (
    <div>
      <h1>Bem vindo ao client component</h1>
    </div>
  )
}

export default ClientPage
