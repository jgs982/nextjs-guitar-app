import Layout from '../../components/Layout'
import Image from 'next/image'
import { formatearFecha } from '../../helpers'
import styles from '../../styles/Entrada.module.css'


const EntradaBlog = ({entrada, fotos}) => {

    const { contenido, titulo, publishedAt } = entrada.data.attributes

    const urlImagen = fotos[entrada.data.id - 1].url    

    return (
        <Layout pagina={titulo}>
            <main className='contenedor'>
                <h1 className='heading'>{titulo}</h1>
                <article className={styles.entrada}>
                    <Image
                        layout='responsive'
                        width={800}
                        height={600}
                        src={`${process.env.NEXT_PUBLIC_URL}${urlImagen}`}
                        alt={`Imagen post ${titulo}`}
                    />

                    <div className={styles.contenido}>
                        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                        <p className={styles.texto}>{contenido}</p>
                    </div>
                </article>
            </main>
        </Layout>        
    )
}

export async function getServerSideProps({query: {id}}) {

    const url = `${process.env.API_URL}/blogs/${id}`
    const respuesta = await fetch(url)
    const entrada = await respuesta.json()

    const urlFotos = `${process.env.API_URL}/upload/files/`
    const res = await fetch(urlFotos)
    const fotos = await res.json()

    return {
        props: {
            entrada, 
            fotos
        }
    }
}

export default EntradaBlog