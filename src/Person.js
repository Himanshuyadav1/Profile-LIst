import React from 'react';
import './App.css'

const Person = ({ img, name, job}) => {
    const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
    return (
        <div className="person">
            <img src={url} alt="Profile DP"/>
            <div>
                <h4>{name}</h4>
                <h4>{job}</h4>
            </div>
        </div>
    )
}

export default Person;