import React from "react";
import Person from './Person'

function PersonList(){
    const Persons = [
        {
            id: 200,
            name: 'Hariharan',
            Age: 21,
            lang: 'ReactJS'
        },
        {
            id: 201,
            name: 'RajaPrasanna',
            Age: 27,
            lang: 'C / C++'
        },
        {
            id: 202,
            name: 'Vishnu Prabhu',
            Age: 27,
            lang: 'Java'
        }
    ]
    //const PersonList = Person.map(person => <h3>Name : {person.name} Age : {person.Age}</h3>)
   
    const PersonList = Persons.map(person => (
        <Person person={person}></Person>
    ) )

    return(
        <div>
            <h4>{PersonList}</h4>
        </div>
    )
}

export default PersonList