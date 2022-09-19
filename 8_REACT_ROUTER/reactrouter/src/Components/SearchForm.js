import React from 'react'
import { useNavigate } from 'react-router-dom' //Direciona o usuario para dentro do condigo do componente

import {useState} from 'react'

function SearchForm() {
    const navigate = useNavigate()
    const [query, Setquery] = useState()
    const handleSubmit = (e) =>{
        e.preventDefault()
        navigate('/search?q='+ query)
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => Setquery(e.target.value)} />
        <input type="submit" value="Buscar" />
    </form>
  )
}

export default SearchForm