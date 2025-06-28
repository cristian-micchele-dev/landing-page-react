
import Personaje from '../../assets/Personaje.png'
import Logo from '../../assets/Logo.png'
import {motion} from 'framer-motion'
import { slipeUp, slipeFromSide } from '../../utility/animation' 
export const Hero = () => {
  return (
    <section className="mt-36">
        <div className='grid grid-cols-1 md:grid-cols-2'>
            {/* Texto y descripcion */}
            <div className='p-10 sm:p-10 md: p-15 lg:p-30 xl:p-36'>
                <motion.img src={Logo} alt="Logo del sitio" variants={slipeUp(0.2)} initial="initial" animate="animate"/>
                <motion.p className='py-12 text-white' variants={slipeUp(0.3)} initial="initial" animate="animate">
                    Magic Quest es un juego de aventuras y fantasía en el que encarnás a Lyra, una poderosa hechicera de energía astral que despierta en un mundo olvidado, sumido en sombras y caos. Con su dominio del fuego etéreo y una conexión mística con los elementos, Lyra debe embarcarse en una épica travesía para restaurar el equilibrio mágico del reino de Elaria.
                    Explorá bosques encantados, templos ancestrales y dimensiones ocultas mientras desbloqueás hechizos, enfrentás criaturas oscuras y descubrís secretos del pasado. Las decisiones que tomes alterarán el destino del mundo... ¿usarás tu poder para proteger o dominar?
                </motion.p>
<motion.div className='flex justify-center gap-6' variants={slipeUp(1)} initial="initial" animate="animate">
    <a className='bg-purple-600 py-2 px-12 rounded-3xl text-white hover:bg-purple-700 transition-all duration-300 items-center cursor-pointer'
     href=""> Jugar Ahora <i className="bi bi-controller text-xl ml-2"></i>
     </a>
    <a className='text-white flex items-center cursor-pointer '
    href=""> Ver gameplay <i className="bi bi-youtube text-xl ml-2">
    </i></a>

</motion.div>
            </div>

            {/* Imagen */}
            <motion.div className='p-10 sm:p-10 md: p-15 lg:p-30 xl:p-36' 
            variants={slipeFromSide("right" , 0.5)} initial="initial" animate="animate">
                <img src={Personaje} alt="Personaje del juego"/>
            </motion.div>

        </div>
    </section>
  )
}
