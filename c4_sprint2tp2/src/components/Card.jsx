export default function Card({ item, onAdd, favorites = [] }) {

if (!item) return null

const isAdded = favorites.some(f => f.id === item.id)

return (

<div className="relative group rounded-xl overflow-hidden shadow-lg
hover:shadow-2xl transition duration-300">

{/* CONTENEDOR CON PROPORCIÓN */}
<div className="w-full aspect-2/3 overflow-hidden">

<img
src={item.image}
alt={item.title}
className="w-full h-full object-cover
group-hover:scale-110 transition duration-300"
/>

</div>

{/* OVERLAY */}
<div
  className="absolute inset-0 bg-black/60 
  opacity-100 md:opacity-0 
  md:group-hover:opacity-100 
  transition duration-300 
  flex flex-col justify-end p-4
  active:opacity-100"
>

<h3 className="text-white text-lg font-bold">
{item.title}
</h3>

<button
onClick={() => onAdd(item)}
disabled={isAdded}
className={`mt-2 px-3 py-1 rounded text-sm font-semibold
transition active:scale-95
${isAdded 
  ? "bg-gray-400 text-white cursor-not-allowed"
  : "bg-purple-600 text-white hover:bg-purple-700"}
`}
>

{isAdded ? "✔ Agregado" : "Agregar"}

</button>

</div>

</div>

)
}