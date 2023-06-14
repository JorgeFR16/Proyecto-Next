import { info_juego } from '@/interfaces';
import axios from 'axios';
import useSWR from 'swr'

export const useAddProduct = (path:string) => {

    const {mutate} = useSWR(path);

    const addProduct = async (data: info_juego) => {

        const res = await axios.post(path, data);

        if(res.status>=300 || res.status<=199){

            console.log(res.status);
            console.log(res.data.ok);
            throw new Error('No se pudo agregar el producto')
        }

        mutate();

    }

    return addProduct;

}