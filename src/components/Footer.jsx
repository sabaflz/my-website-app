import '../styles/Footer.css'

function Footer() {

    const currentYear = new Date().getFullYear();

    return(
        <div>
            <footer>Copyright © {currentYear} by Saba</footer>
        </div>
    );
}

export default Footer;