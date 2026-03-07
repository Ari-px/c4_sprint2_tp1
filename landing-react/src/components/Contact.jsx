import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {

const [isSubmitted,setIsSubmitted] = useState(false)

const handleSubmit=(e)=>{
e.preventDefault()
setIsSubmitted(true)
}

const resetForm=()=>{
setIsSubmitted(false)
}

return(

<section id="contacto" className="py-20 bg-pink-100">

<div className="container mx-auto px-6 max-w-lg">

<h2 className="text-3xl font-bold text-center mb-8">
Consulta por un Álbum
</h2>

{isSubmitted ? (

<motion.div
initial={{opacity:0}}
animate={{opacity:1}}
className="bg-white p-8 rounded shadow text-center"
>

<i className="bi bi-check-circle-fill text-green-500 text-6xl mb-4"></i>

<h3 className="text-2xl font-bold mb-2">
¡Consulta enviada!
</h3>

<p className="text-gray-600 mb-6">
Te responderemos pronto.
</p>

<button
onClick={resetForm}
className="text-pink-500 hover:underline"
>

Enviar otra consulta

</button>

</motion.div>

):( 

<motion.form
initial={{opacity:0}}
animate={{opacity:1}}
onSubmit={handleSubmit}
className="bg-white p-8 rounded shadow"
>

<div className="mb-4">

<label className="block mb-2">
Nombre
</label>

<input
type="text"
required
className="w-full p-2 border rounded"
/>

</div>

<div className="mb-4">

<label className="block mb-2">
Email
</label>

<input
type="email"
required
className="w-full p-2 border rounded"
/>

</div>

<div className="mb-4">

<label className="block mb-2">
Grupo K-pop
</label>

<input
type="text"
placeholder="Ej: BTS"
required
className="w-full p-2 border rounded"
/>

</div>

<div className="mb-6">

<label className="block mb-2">
Mensaje
</label>

<textarea
required
rows="4"
className="w-full p-2 border rounded"
></textarea>

</div>

<button
type="submit"
className="w-full bg-pink-400 text-white py-3 rounded hover:bg-pink-500"
>

Enviar Consulta

</button>

</motion.form>

)}

</div>

</section>

)

}

export default Contact