import React, { useEffect, useState } from 'react'
import PetList from './components/PetList'
import Home from './components/Home'
import Profile from './components/Profile'
import './App.css'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Login from './components/Login'
import axios from 'axios'
import Users from './components/Users'


export default function App() {
  const [adoptedPets, setAdoptedPets] = useState();

  const [users, setUsers] = useState([]);



  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [data, setData] = useState([]);

  const [search, setSearch] = useState([]);

  const navigate = useNavigate()

  useEffect(() => {


    isAuthenticated ? navigate('/profile') : console.log("");
  }, [isAuthenticated]);


  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='pets'>Find Pets</Link>
        <Link to='users'>Our Users</Link>
      </nav>



      <Routes>
        <Route path='' element={<Home />} />
        <Route path='pets' element={<PetList adoptedPets={adoptedPets} setadoptedPets={setAdoptedPets} />} />
        <Route path='profile' element={<Profile adoptedPets={adoptedPets} />} />
        <Route path='login' element={<Login users={users} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path='users' element={<Users />} />
      </Routes>

      {search.map(e => <a target='_blank' href={e.url}><h4>{e.title}</h4></a>)}


    </div>
  )
}
