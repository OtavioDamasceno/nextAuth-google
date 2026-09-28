import { auth } from 'auth'
import React from 'react'

const ServerPage = async() => {
    const session = await auth();
    if(!session || !session.user) return <p>Você precisa estar autenticado</p>
  return (
    <div>
      <h1>Bem vindo a server page</h1>
    </div>
  )
}

export default ServerPage
