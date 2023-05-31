function Card(props) {

    const firstName = props.fname;
    const lastName = props.lname;
    const month = props.birthdate.month;
    const day = props.birthdate.day;
    const year = props.birthdate.year;


    return(
        <div>
            <h1>{firstName + ' ' + lastName}</h1>
            <p>Birthday {month + '/' + day + '/' + year}</p>
        </div>
    );
}

export default Card;