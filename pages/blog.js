import Entrada from '../components/Entrada'
import Layout from '../components/Layout'
import styles from '../styles/Blog.module.css'

const Blog = ({entradas, fotos}) => {     

    return (
        <Layout pagina='Blog'>
            <main className='contenedor'>
                <h2 className='heading'>Blog</h2>

                <div className={styles.blog}>
                    {
                        entradas.data.map(entrada => { 

                            const url = `${fotos[entrada.id-1].url}`

                            return(
                                <Entrada
                                    key={entrada.id}
                                    entrada={entrada.attributes}
                                    id={entrada.id} 
                                    urlFoto={url}                                  
                                />
                            )
                        })
                    }                   
                </div>
            </main>
        </Layout>        
    )
}



export async function getServerSideProps() {

    const url = `${process.env.API_URL}/blogs`
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

    const urlFotos = `${process.env.API_URL}/upload/files/`
    const res = await fetch(urlFotos)
    const fotos = await res.json()
    
    return {
        props: {
            entradas,
            fotos
        }
    }
}

export default Blog