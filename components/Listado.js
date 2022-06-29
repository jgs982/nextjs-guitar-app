import Guitarra from "./Guitarra"
import styles from '../styles/Listado.module.css'


const Listado = ({guitarras, fotos}) => {

    return (
        <div className={styles.listado}>
            {
                guitarras.data.map(guitarra => {

                    const urlFoto = `${fotos[guitarra.id + 5].url}`

                    return(
                        <Guitarra
                            key={guitarra.attributes.url}
                            guitarra={guitarra.attributes}
                            imagen={urlFoto}
                        />
                    )
                })
            }  
        </div>
        
    ) 
}

export default Listado