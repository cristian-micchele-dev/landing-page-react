
import Logo from '../../assets/Logo.png'
import { useState } from 'react'

const navbarlinks = [
    {
        id:1 ,
        title:'Inicio',
        link:'/'
    },
      {
        id:2 ,
        title:'Nosotros',
        link:'#'
    },
      {
        id:3 ,
        title:'Contacto',
        link:'#'
    },
      {
        id:4 ,
        title:'Soporte',
        link:'#'
    }
]

// redes
const navbarRedes = [
    {
    id:1 ,
    title:'Instagram',
    link:'https://www.instagram.com/',
    icon: "bi bi-instagram"
},
    {
    id:2 ,
    title:'Facebook',
    link:'https://www.facebook.com/',
    icon: "bi bi-facebook"
    },
]
export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

  return (
    <nav className='fixed top-0 left-0 w-full bg-purple-950 bg-opacity-30 backdrop-blur-md z-50'>
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3  '>

    {/* Logo */}
        <div>
            <img src={Logo} alt="Logo del sitio" className='w-[100px]'/> 
        </div>

        {/* Boton hamburger */}
        <button onClick={toggleMenu} className='md:hidden text-white'>
            <svg 
            className='w-6 h-6 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24' >

              {isOpen ? (      
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
               
            />) : (   <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
               
            />) } 
        

         



            </svg>
        </button>

    <div className='hidden md:block'>
        <ul className='flex sm:sace-x-8 space-x-4'>
            { /* Navegacion*/
                navbarlinks.map((link) => (
                    <li key={link.id}>
                        <a href={link.link} className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110
                        transform  inline-block duration-300'>
                            {link.title}
                            </a>
                    </li>
                ))
            }
        </ul>
    </div>



       <div className='hidden md:block'>
        <ul className='flex space-x-4'>
            {/* Redes */}
               { 
                navbarRedes.map((link) => (
                    <li key={link.id}>
                        <a 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block transition-transform hover:scale-125 duration-300'

                        href={link.link}>
                        <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 text-2xl transition-all duration-300`}></i>
                        </a>
                    </li>
                ))
            }
        </ul>
    </div>

      </div>


{/* mobile menu */}
<div className={`md:hidden absolute w-full bg-purple-950 transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0 invisible"}`}>
    <ul className='flex flex-col px-4 py-2'>
            { /* Navegacion*/
                navbarlinks.map((link) => (
                    <li key={link.id} className='py-2 text-center'>
                        <a href={link.link} className='text-white hover:text-sky-200' onClick={()=> setIsOpen(false)}>
                            {link.title}
                            </a>
                    </li>
                ))
            }
        </ul>



<ul className='flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center'>
            {/* Redes */}
               { 
                navbarRedes.map((link) => (
                    <li key={link.id}>
                        <a 
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-block'
                        onClick={()=> setIsOpen(false)}
                        href={link.link}>
                        <i className={`${link.icon} text-lg text-white hover:text-sky-200`}></i>
                        </a>
                    </li>
                ))
            }
        </ul>



</div>


    </nav>
  )
}
