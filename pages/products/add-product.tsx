import { useAddProduct } from "@/hooks/useAddProduct";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const AddProduct = () => {

  const addProduct = useAddProduct('/api/products');

  const router = useRouter();

  const [nombre_juego, setNombreJuego] = useState("");
  const [genero, setGenero] = useState("");
  const [precio, setPrecio] = useState("");
  const [desarrollador, setDesarrollador] = useState("");
  const [distribuidor, setDistribuidor] = useState("");
  const [disponibilidad, setDisponibilidad] = useState("");
  const [imagen, setImagen] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nuevoJuego = {
      nombre_juego,
      genero,
      precio: parseFloat(precio),
      desarrollador,
      distribuidor,
      disponibilidad: parseInt(disponibilidad),
      imagen
    }


    await addProduct(nuevoJuego); 

    router.push('/products')

  }

  return (
    <>
      <h1 className="text-4xl mt-3 p-4 text-center font-serif">
        Agregar Juegos
      </h1>
      <div className="bg-blue-50 h-screen">
        <form className="max-w-x1 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="nombre_juego"
            >
              Nombre del Juego
            </label>
            <input
              onChange={(e) => setNombreJuego(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              id="nombre_juego"
              type="text"
              placeholder="Agrega nombre del juego"
            />
          </div>

          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="genero"
            >
              Genero del Juego
            </label>
            <input
              onChange={(e) => setGenero(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-within:selection "
              id="genero"
              type="text"
              placeholder="Agrega genero del juego"
            />
          </div>

          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="precio"
            >
              Precio del Juego
            </label>
            <input
              onChange={(e) => setPrecio(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-within:selection "
              id="precio"
              type="number"
              placeholder="Agrega precio del juego"
            />
          </div>

          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="desarrollador"
            >
              Desarrollador del Juego
            </label>
            <input
              onChange={(e) => setDesarrollador(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-within:selection "
              id="desarrollador"
              type="text"
              placeholder="Agrega desarrollador del juego"
            />
          </div>

          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="distribuidor"
            >
              Distribuidor del Juego
            </label>
            <input
              onChange={(e) => setDistribuidor(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-within:selection "
              id="distribuidor"
              type="text"
              placeholder="Agrega distribuidor del juego"
            />
          </div>

          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="disponibilidad"
            >
              Disponibilidad del Juego
            </label>
            <input
              onChange={(e) => setDisponibilidad(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-within:selection "
              id="disponibilidad"
              type="number"
              placeholder="Agrega disponibilidad del juego"
            />
          </div>

          <div className="mb-4">
            <label
              className="pl-4 block text-gray-700 font-bold mb-2"
              htmlFor="imagen"
            >
              Imagen del Juego
            </label>
            <input
              onChange={(e) => setImagen(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus-within:selection "
              id="imagen"
              type="text"
              placeholder="Agrega imagen del juego"
            />
          </div>

          <div className="flex items-center justify-center">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
