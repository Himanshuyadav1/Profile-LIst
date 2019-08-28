import React from 'react';
import Person from './Person';

const PersonList = () => {
    const persons = [
        { img: 12, name: "Himanshu", job: "Frontend Developer" },
        { img: 45, name: "Akash", job: "Backend Developer" },
        { img: 78, name: "Syambrij", job: "Database Developer" }
    ];
    return (
        <div>
            { persons.map(person => 
                <Person img={person.img} name={person.name} job={person.job} />
            )}
        </div>
    )
}
    


export default PersonList;