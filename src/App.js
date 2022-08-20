import React, { useEffect, useState } from 'react'
import PetList from './PetList'
import Home from './components/Home'
import './App.css'
import { Route, Routes, Link } from 'react-router-dom'

export default function App() {
  const pets = [

    {
      name: "Petey",
      type: 'dog',
      race: "Pitbull ",
      location: "New York",
      sexe: "Female",
      image: "Pitbull.jpg"
    },
    {
      name: "Tayson",
      type: 'dog',
      race: "Chienloup ",
      location: "Montreal",
      sexe: "Male",
      image: "Chienloup.jpg"
    },
    {
      name: "Bella",
      type: 'cat',
      race: "Sheepdog ",
      location: "Florida",
      sexe: "Male",
      image: "Sheepdog.jpg"
    },
    {
      name: "Cali",
      type: 'bird',
      race: "Pitbull ",
      location: "Boston",
      sexe: "Female",
      image: "Pitbullterrier.jpg"
    },
    {
      name: "Rupert",
      type: 'dog',
      race: "Pitbull ",
      location: "Montreal",
      sexe: "Male",
      image: "Pitbullterrierb.jpg"
    },
    {
      name: "Ben",
      type: 'dog',
      race: "Pitbull ",
      location: "Montreal",
      sexe: "Male",
      image: "Pitbullterrierb.jpg"
    },
    {
      name: "Wolf",
      type: 'cat',
      race: "Berger Allemand ",
      location: "Otawa",
      sexe: "Male",
      image: "germansheepdog.jpg"
    }
  ]

  const [showedPets, setShowedPets] = useState(pets);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => setData(json))
  }, []);
  return (
    <div>

      <nav>
        <Link to='pets'>Find Pets</Link>
        <Link to='/'>Home</Link>
      </nav>

      <Routes>
        <Route path='pets' element={<PetList showedPets={showedPets} setShowedPets={setShowedPets} />} />
        <Route path='' element={<Profile showedPets={showedPets} />} />
      </Routes>

      {data.map(e => <h6>{e.title}</h6>)}


    </div>
  )
}
