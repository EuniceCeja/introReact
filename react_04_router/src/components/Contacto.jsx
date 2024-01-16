import { Link } from "react-router-dom"

const Contacto = () => {
    return (
        <>
        <div>
            <h1>Esta es la página de Contacto</h1>
            <Link to="/">
                Regresar a la página de Inicio
            </Link>
            <br />
            <Link to="/about-us">
                Ir a la página de Sobre Nosotros
            </Link>
        </div>
        </>
    )
}

export default Contacto