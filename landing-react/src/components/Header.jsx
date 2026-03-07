import { FaCompactDisc } from "react-icons/fa";

export default function Header() {
  return (
    <header className="bg-pink-200 p-4 shadow-md flex justify-between items-center">
      
      <h1 className="text-3xl font-bold flex items-center gap-2 text-pink-900">
        <FaCompactDisc className="text-pink-600"/>
        Hallyu
      </h1>

      <nav className="flex gap-6 text-pink-800 font-medium">

      <a href="#albums" className="hover:underline"> 
        
Álbumes
</a>

<a href="#contacto" className="hover:underline">
Contacto
</a>

</nav>



    </header>
  );
}