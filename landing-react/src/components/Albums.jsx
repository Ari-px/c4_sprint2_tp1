import { useState } from "react"
import { motion } from "framer-motion"

const albums = [
{
id:1,
name:"BTS - Map of the Soul",
price:"$35",
icon:"bi-music-note"
},

{
id:2,
name:"Stray Kids - 5 Star",
price:"$32",
icon:"bi-disc"
},

{
id:3,
name:"BTS - Proof",
price:"$30",
icon:"bi-stars"
},

{
id:4,
name:"BLACKPINK - Born Pink",
price:"$28",
icon:"bi-vinyl"
},

{
id:5,
name:"NewJeans - Get Up",
price:"$25",
icon:"bi-heart-fill"
}
]

export default function Albums(){

const [mostrar,setMostrar]=useState(false)

function toggleAlbums(){
setMostrar(!mostrar)
}

return(

<section className="py-16 text-center bg-pink-50">

<h2 className="text-3xl font-bold text-pink-900 mb-6">
Álbumes populares
</h2>

<button
onClick={toggleAlbums}
className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded mb-8 transition"
>
{mostrar ? "Ocultar álbumes" : "Mostrar álbumes"}
</button>

{mostrar && (

<motion.div
className="grid md:grid-cols-3 gap-8 px-10"
initial={{opacity:0}}
animate={{opacity:1}}
transition={{duration:0.5}}
>

{albums.map((album)=>(

<motion.div
key={album.id}
className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"

initial={{opacity:0, y:40}}
animate={{opacity:1, y:0}}
transition={{duration:0.5}}

whileHover={{scale:1.08}}
>

<motion.i
className={`bi ${album.icon} text-5xl text-pink-500 mb-3`}
animate={{rotate:[0,10,-10,0]}}
transition={{duration:1.5, repeat:Infinity}}
/>

<h3 className="font-bold text-lg text-center">
{album.name}
</h3>

<p className="text-pink-600 font-semibold mt-1">
{album.price}
</p>

<button
onClick={()=>alert("Añadido al carrito 🛒")}
className="mt-4 bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded transition"
>
Comprar
</button>

</motion.div>

))}

</motion.div>

)}

</section>

)
}