import React from 'react'

function UserDetails({nome, idade, cidade}) {
  return (
    <div>
        <h1>Dados de pessoa</h1>
        <ul>
            <li>Nome: {nome}</li>
            <li>Nome: {idade}</li>
            <li>Nome: {cidade}</li>
            <li>{idade >= 18 ? <p>Pode fazer habilitação CNH</p> : <p>Não pode fazer CNH</p>}</li>
        </ul>
    </div>
  )
}

export default UserDetails