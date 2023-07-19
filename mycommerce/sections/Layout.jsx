'use client';

import Header from './Header'
import Footer from './Footer'
import CuadroInicial from '@/components/CuadroInicial/CuadroInicial';
import CuadroSegundario from '@/components/CuadroSegundario/CuadroSegundario';
export function Layout() {


    return (
        <>
            <Header />
            <main>
                <CuadroInicial />
                <CuadroSegundario />
            </main>
            <Footer />
        </>
    )
}

export default Layout