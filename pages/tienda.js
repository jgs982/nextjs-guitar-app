import Layout from '../components/Layout'
import Listado from '../components/Listado'


const Tienda = ({guitarras, fotos}) => {

    return (
        <Layout pagina='Tienda Virtual'>
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Colección</h1>
                <Listado guitarras={guitarras} fotos={fotos}/>
            </main>
        </Layout>        
    )
}

export async function getServerSideProps() {

    const url = `${process.env.API_URL}/guitarras`
    const respuesta = await fetch(url)
    const guitarras = await respuesta.json()

    const urlFotos = `${process.env.API_URL}/upload/files/`
    const res = await fetch(urlFotos)
    const fotos = await res.json()

    return {
        props: {
            guitarras,
            fotos
        }
    }
}

export default Tienda 