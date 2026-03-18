import Card from "./Card"

export default function List({ items, onAdd }) {

return (

<div className="grid md:grid-cols-3 gap-6 p-6">

{items.map(item => (

<Card
key={item.id}
item={item}
onAdd={onAdd}
/>

))}

</div>

)

}