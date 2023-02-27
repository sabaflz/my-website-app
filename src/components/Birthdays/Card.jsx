function Card(props) {
    return(
        <div>
            <h1>{props.fname + ' ' + props.lname}</h1>
        </div>
    );
}

export default Card;