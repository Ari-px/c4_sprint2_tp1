import { useState } from "react"
import { motion } from "framer-motion"

export default function Hero(){

const [promo,setPromo] = useState(false)

return(

<section className="bg-pink-100 py-20 text-center">

<motion.h2
initial={{opacity:0,y:-60}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-4xl font-bold text-gray-800"
>

Bienvenido a Hallyu Store

</motion.h2>

<p className="mt-4 text-gray-600">
Tu tienda online de álbumes K-Pop
</p>

<button
onClick={()=>setPromo(!promo)}
className="mt-6 bg-pink-400 text-white px-6 py-2 rounded hover:bg-pink-500"
>

Ver promoción

</button>

{promo && (

<motion.p
initial={{opacity:0}}
animate={{opacity:1}}
className="mt-4 text-gray-700"
>
🎉 20% de descuento en álbumes seleccionados

</motion.p>

)}

</section>

)

}