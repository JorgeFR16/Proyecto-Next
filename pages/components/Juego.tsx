import { useDeleteProduct } from "@/hooks/useDeleteProduct";
import { info_juego } from "@/interfaces";

const Juego = ({ product }: any) => {

    const deleteProduct = useDeleteProduct('/api/products');

    const handleDelete = async (id:string) => {
      await deleteProduct(id)
    }


  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow.lg items-center">
        <img className="h-[400px]" src={product.imagen} alt="imagen de juego" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.nombre_juego}</div>
          <p className="text-gray-200 text-base">${product.precio}</p>
          <p className="text-gray-200 text-base">{product.genero}</p>
        </div>
        <div className="px-6 py-4">
            <button className="bg-red-600 my-1 px-1 py-0.5 shadow-md rounded-sm" onClick={() => handleDelete(product.id)}>Borrar el juego</button>
        </div>
      </div>
    </div>
  );
};

export default Juego;
