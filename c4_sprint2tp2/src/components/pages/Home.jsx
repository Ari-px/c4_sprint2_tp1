import { useState } from "react"
import Header from "../Header"
import List from "../List"
import FavoritesModal from "../FavoriteModal"
import useFavorites from "../../hooks/useFavorites"

const items = [

{
id:1,
title:"Stranger Things",
image:"/public/img/image_01.jpg"
},

{
id:2,
title:"Breaking Bad",
image:"/public/img/image_02.jpg"
},

{
id:3,
title:"El Viaje de Chihiro",
image:"/public/img/image_03.jpg"
},

{
id:4,
title:"Boyfriend on Demand",
image:"/public/img/image_04.jpeg"
}, 

{
id:5,
title:"The KPOP Demon Hunter",
image:"/public/img/image_05.jpg"
},

{
id:6,
title:"The Housemaid",
image:"/public/img/image_06.jpeg"
}

]

export default function Home() {

const { favorites, addFavorite, removeFavorite } = useFavorites()

const [isOpen, setIsOpen] = useState(false)

return (

<div className="min-h-screen bg-gray-100">

<Header openModal={() => setIsOpen(true)} />

<List
items={items}
onAdd={addFavorite}
/>

{isOpen && (

<FavoritesModal
favorites={favorites}
onClose={() => setIsOpen(false)}
onRemove={removeFavorite}
/>

)}

</div>

)

}