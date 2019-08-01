import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Genders = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('/api/genres')
      .then(res => setData(res.data.data))
  }, [])

  const deleteGenero = id => axios.delete(`/api/genres/${id}`).then(() => setData(data.filter(item => item.id !== id)))

  const renderRow = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td><button className='btn btn-danger' onClick={() => deleteGenero(record.id)} >Remover</button></td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className='container-fluid'>
        <h1>Genêros</h1>
        <Link to='/generos/novo' className='btn btn-primary mb-2'>Novo genêro</Link>
        <div className='alert alert-warning' role='alert'>
          Você não possui genêros criados.
        </div>
      </div>
    )
  }

  return (
    <div className='container-fluid'>
      <h1>Genêros</h1>
      <Link to='/generos/novo' className='btn btn-primary mb-2'>Novo Genêro</Link>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderRow)}
        </tbody>
      </table>
    </div>
  )
}

export default Genders
