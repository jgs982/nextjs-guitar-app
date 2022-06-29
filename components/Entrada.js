import { formatearFecha } from '../helpers'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Entrada.module.css'

const Entrada = ({entrada, id, urlFoto}) => {

    const { titulo, resumen, publishedAt } = entrada 
    
    return (
        <article>
            <Image
                priority='true'
                width={800}
                height={600}
                layout='responsive'
                src={`${process.env.NEXT_PUBLIC_URL}${urlFoto}`}
                alt={`Imagen blog ${titulo}`}
            />

            <div className={styles.contenido}>
                <h3>{titulo}</h3>
                <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
                <p className={styles.resumen}>{resumen}</p>
                <Link href={`/blog/${id}`}>
                    <a className={styles.enlace}>
                        Leer Entrada 
                    </a>                    
                </Link>               
            </div>            
        </article>
    )
}

export default Entrada