import '../styles/Header.css'

function Header(props) {

    const title = props.title;
    return(
        <div>
            <header>
                
                <h1>{title}</h1>
            </header>
        </div>
    );
}

export default Header;