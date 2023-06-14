import { info_juego } from '@/interfaces';
import useSWR from 'swr'

export const useDeleteProduct = (path:string) => {

    const {mutate} = useSWR(path);

    const deleteProduct = async (id: string) => {

        const response = await fetch(`${path}?id=${id}`, {
            method: 'DELETE',
        })

        if(!response.ok) {
            throw new Error('Algo salio mal')
        }

        mutate(); // actualiza la info despues de que el request esta completado

    }

    return deleteProduct;

}