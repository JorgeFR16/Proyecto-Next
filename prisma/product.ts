// import { NextApiRequest, NextApiResponse } from "next";

import { PrismaClient } from "@prisma/client";

import { info_juego } from '@/interfaces'


// export default async function handler(req: NextApiRequest, res: NextApiResponse){
//     const {desarrollador, disponibilidad, distribuidor, genero, imagen, nombre_juego, precio} = req.body

//     try {
//         await prisma?.juegos.create({
//             data: {
//                 desarrollador,
//                 disponibilidad,
//                 distribuidor,
//                 genero,
//                 imagen,
//                 nombre_juego,
//                 precio
//             }
//         })
//         res.status(200).json({message:'Juego Creado'})
//     } catch (error) {
//         console.log('Fallo la creacion');
        
//     }
// }


const prisma = new PrismaClient()

export const createProduct = async({nombre_juego, genero, precio, desarrollador, distribuidor, disponibilidad,imagen}:info_juego) => {

    const product = await prisma.juegos.create({
        data: {
            nombre_juego,
            genero,
            precio,
            desarrollador,
            distribuidor,
            disponibilidad,
            imagen     
        }
    });

    return product;
}

export const getAllProducts = async() => {

    const products = await prisma.juegos.findMany();

    return products;
}

// Asi es otra forma pero no logre que funcionara por el tipo de dato export const deleteProduct = async(id:string | string[] | undefined) 
export const deleteProduct = async(id:any) => {

    const products = await prisma.juegos.delete({
        where: {
            id: id
        }
    })
}
