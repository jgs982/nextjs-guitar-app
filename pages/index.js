import Curso from '../components/Curso'
import Layout from '../components/Layout'
import Listado from '../components/Listado'
import styles from '../styles/Blog.module.css'
import Entrada from '../components/Entrada'


export default function Home({guitarras, fotos, cursos, blog}) {
    
    console.log(blog.data)

    const imagenCursos = fotos[18].url    
    
    return (
        <Layout pagina='Inicio'>
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado guitarras={guitarras} fotos={fotos}/>
            </main>

            <Curso
                cursos={cursos}
                imagen={imagenCursos}
            />

            <div className='contenedor'>
                <h2 className='heading'>Últimas entrads del Blog</h2>

                <div className={styles.blog}>
                    {
                        blog.data.map(entrada => { 

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
            </div>
        </Layout>
    )
}

export async function getServerSideProps() {
    
    // Múltiples Consultas en paralelo
    const urlGuitarras = `${process.env.API_URL}/guitarras`
    const urlFotos = `${process.env.API_URL}/upload/files/`
    const urlCursos = `${process.env.API_URL}/course`
    const urlBlog = `${process.env.API_URL}/blogs`
    
    const [resGuitarras, resCursos, resFotos, resBlog] = await Promise.all([
        fetch(urlGuitarras),
        fetch(urlCursos),
        fetch(urlFotos),
        fetch(urlBlog)
    ])

    const [guitarras, cursos, fotos, blog] = await Promise.all([
        resGuitarras.json(),
        resCursos.json(),
        resFotos.json(),
        resBlog.json()
    ])

    return {
        props: {
            guitarras,
            fotos,
            cursos,
            blog 
        }
    }
}