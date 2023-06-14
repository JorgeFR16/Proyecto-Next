import { useGetProducts } from "@/hooks/useGetProducts";
import Juego from "../components/Juego";
import { info_juego } from "@/interfaces";




const Products = () => {
  

  const { data: products, isLoading, error } = useGetProducts();

  return (
    <>
      <h1 className="text-4xl mt-3 p-4 text-center font-serif">Todos los Juegos</h1>
      <hr />

      <div className="container mx-auto mt-5 py-4">
        <div className="grid drif-cols-l lg:grid-cols-3 md:grid-cols-2 items-center mt-3 py-3">
          {
            products?.map((product: info_juego) => {
              return <Juego key={ product.nombre_juego } product={product} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Products;