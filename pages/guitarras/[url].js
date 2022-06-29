import Image from "next/image"
import Layout from "../../components/Layout"
import styles from '../../styles/Guitarra.module.css'


const Producto = ({guitarras, url, fotos}) => {
    
    const g = guitarras.data.filter(guitarra => url===guitarra.attributes.url)
    const { descripcion, nombre, precio } = g[0].attributes
    const imagen = `${fotos[g[0].id + 5].url}`
    

    return (
        <Layout pagina={nombre}>
            <div className={styles.guitarra}>
                <Image
                    layout='responsive'
                    width={180}
                    height={350}
                    src={`${process.env.NEXT_PUBLIC_URL}${imagen}`}
                    alt={`Imagen Guitarra ${nombre}`}
                />

                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>{precio} €</p> 

                    <form className={styles.formulario}>
                        <label>Cantidad:</label>
                        <select>
                            <option value=''> -- Seleccione -- </option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <input 
                            type='submit'
                            value='Agregar Al Carrito'
                        />
                    </form>               
                </div>
            </div>
        </Layout>        
    )
}

export async function getServerSideProps({query: {url}}) {

    const urlGuitarras = `${process.env.API_URL}/guitarras`
    const respuesta = await fetch(urlGuitarras)
    const guitarras = await respuesta.json()   

    const urlFotos = `${process.env.API_URL}/upload/files/`
    const res = await fetch(urlFotos)
    const fotos = await res.json()

    return {
        props: {
            guitarras,
            url,
            fotos
        }
    }
}

export default Producto
