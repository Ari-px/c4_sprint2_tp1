export default function FavoritesModal({ favorites, onClose, onRemove }) {

return (

<div className="fixed inset-0 bg-black/50 flex justify-center items-center">

<div className="bg-white p-6 rounded w-96">

<h2 className="text-xl font-bold mb-4">
Mi lista
</h2>

{favorites.length === 0 && (
<p>No hay elementos guardados</p>
)}

{favorites.map(item => (

<div
key={item.id}
className="flex justify-between mb-2"
>

<span>{item.title}</span>

<button
onClick={() => onRemove(item.id)}
className="bg-red-500 text-white px-2 rounded"
>

Eliminar

</button>

</div>

))}

<button
onClick={onClose}
className="mt-4 bg-gray-800 text-white w-full py-2 rounded"
>

Cerrar

</button>

</div>

</div>

)

}