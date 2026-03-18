export default function Header({ openModal }) {

return (

<header className="bg-slate-800 text-white p-4 flex justify-between">

<h1 className="text-2xl font-bold">
📺 Watchlist Series/Peliculas
</h1>

<button
onClick={openModal}
className="bg-white text-purple-700 px-4 py-2 rounded"
>

Mi lista

</button>

</header>

)

}