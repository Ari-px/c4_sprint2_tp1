import { useState } from "react"

export default function useFavorites() {

// 🔥 inicialización correcta desde localStorage
const [favorites, setFavorites] = useState(() => {
  return JSON.parse(localStorage.getItem("favorites")) || []
})

const addFavorite = (item) => {

  // 🔒 verificar si ya existe
  const exists = favorites.some(f => f.id === item.id)

  if (exists) return // ❌ no lo agrega de nuevo

  const updated = [...favorites, item]

  setFavorites(updated)
  localStorage.setItem("favorites", JSON.stringify(updated))

}

const removeFavorite = (id) => {

  const updated = favorites.filter(item => item.id !== id)

  setFavorites(updated)
  localStorage.setItem("favorites", JSON.stringify(updated))

}

return { favorites, addFavorite, removeFavorite }

}