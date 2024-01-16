import './Astros.css'

//Componente para crear cards (Tarjetas) donde vivirá la información de la API
const Astro = ({name, craft}) => { //Props desestructurados (name, craft)
    return (
        <>
        <div className="astro--container">
            <h3 className="astro--name"> {name} </h3>
            <p className="astro--craft"> {craft} </p>
        </div>
        </>
    )
}

export default Astro