import {} from 'react'
import { NavLink } from 'react-router-dom'

function Nav(){

    return(
        <>
        <header className='menu'>
            <h1 id='título'>Título X</h1>
            <nav id='menu-nav'>
                <ul>
                    <NavLink to='Home' id='tlink'>Home</NavLink>
                    <NavLink to='Produtos' id='tlink'>Produtos</NavLink>
                    <NavLink to='Sobre' id='tlink'>Sobre</NavLink>
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Nav