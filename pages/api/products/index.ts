import type { NextApiRequest, NextApiResponse } from 'next'

import { createProduct, deleteProduct, getAllProducts } from '@/prisma/product'

type Data = {
  name: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
    try {
        
        switch (req.method) {
            case 'POST': {

                const {desarrollador, disponibilidad, distribuidor, genero, imagen, nombre_juego, precio} = req.body;

                const new_product = await createProduct({nombre_juego, genero, precio, desarrollador, distribuidor, disponibilidad,imagen});

                return res.status(201).json(new_product);

            }

            case 'GET': {

                const products = await getAllProducts()

                return res.status(200).json(products);

            }

            case 'DELETE': {

                // la parte de as { id: string } es para darle un tipo a req.query algo asi como decirle que va a lucir de la siguiente manera
                const { id } = req.query as { id: string }

                // el id lo va a buscar a esta direccion /Api/products?id=54654

                await deleteProduct(id)

                return res.status(200).json({message: 'Juegos borrado exitosamente'});

            }
                
        }

    } catch (error) {
        
    }
    
}