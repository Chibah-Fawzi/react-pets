import React, { useEffect, useState } from 'react'
import './App.css'

export default function PetList(props) {

    const { adoptedPets, setAdoptedPets } = props

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


    var uniquetype = [...new Set(pets.map(pet => pet.type))]
    var uniquerace = [...new Set(pets.map(pet => pet.race))]
    var uniquelocation = [...new Set(pets.map(pet => pet.location))]


    const handleSubmit = (e) => {
        e.preventDefault();
        let type = e.target.type.value
        let race = e.target.race.value
        let location = e.target.location.value


        const filteredList = pets.filter(pet => pet.location == location && pet.race == race && pet.type == type)

        setShowedPets(filteredList)
    }

    const adoptPet = (e, pet) => {
        e.preventDefault()
        setAdoptedPets([...adoptedPets, pet])
    }

    useEffect(() => {
        console.log(adoptedPets)

    }, [adoptedPets]);


    return (
        <div className='container'>
            <form className='search' onSubmit={handleSubmit}>
                <div>
                    <label>Type</label>
                    <select name="type">
                        {uniquetype.map(type => {
                            return <option value={type}>{type}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label>Race</label>
                    <select name="race">
                        {uniquerace.map(race => {
                            return <option value={race}>{race}</option>
                        })}
                    </select>
                </div>

                <div>
                    <label>Location</label>
                    <select name="location">
                        {uniquelocation.map(location => {
                            return <option value={location}>{location}</option>
                        })}
                    </select>
                </div>

                <button type='submit'>Search</button>
            </form>

            <div className='cards'>
                {showedPets.length != 0 ? showedPets.map(pet => {
                    return <div className='card'>
                        <img src={pet.image} alt="" />
                        <h1>{pet.name}</h1>
                        <h5>{pet.race}</h5>
                        <p>{pet.location}, {pet.sexe}</p>
                        <button onClick={(e) => adoptPet(e, pet)}>Adopter {pet.name}</button>
                    </div>
                })
                    : <p>No animals with this filter</p>
                }
            </div>
        </div>
    )
}
