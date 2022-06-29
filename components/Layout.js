import Head from 'next/head'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, pagina}) => {
    return (
        <>
            <Head>
                <title> GuitarLa - {pagina} </title>
                <meta name='description' content='Web de venta de guitarras'/>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header/>

            {children}

            <Footer/>
        </>
    )
}

export default Layout