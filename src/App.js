import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Home from './components/Home'
import Genero from './components/Genders'
import NovoGenero from './components/NewGender'

function App() {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('/api')
      .then(res => setData(res.data))
  }, [])
  return (
    <Router>
      <div>
        <Header />
        <Route path='/' exact component={Home} />
        <Route path='/generos/novo' exact component={NovoGenero} />
        <Route path='/generos' exact component={Genero} />
      </div>
    </Router>
  );
}

export default App
