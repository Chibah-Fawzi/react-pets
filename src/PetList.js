import React, { useEffect, useState } from 'react'
import './App.css'

export default function PetList(props) {

    const { setShowedPets, showedPets } = props



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


    useEffect(() => {
        console.log(showedPets)

    }, [showedPets]);


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
                        <button>Adopter {pet.name}</button>
                    </div>
                })
                    : <p>No animals with this filter</p>
                }
            </div>
        </div>
    )
}
