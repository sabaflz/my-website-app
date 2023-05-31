import React from 'react'
import Card from './Card'
import birthdays from './birthdays'

function Birthday() {

    const currentYear = new Date().getFullYear();

    return(
        <div>
            <h1>{currentYear}</h1>
            <Card 
                fname = {birthdays[0].fname}
                lname = {birthdays[0].lname}
                birthdate = {birthdays[0].birthdate}
            />
        </div>
    );
}

export default Birthday;