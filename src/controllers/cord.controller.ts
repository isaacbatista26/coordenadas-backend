import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient().coordenada;

// get all cords
export const getAllCords = async (req: Request, res: Response) => {
    try {
        const cords = await prisma.findMany();
        res.json(cords).status(200);
    } catch (error) {
        throw error;
    }
};

// get cord by id
export const getCordsById = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const cord = await prisma.findUnique({
            where: {
                id: id,
            },
        });

        res.json(cord).status(200);
    } catch (error) {
        throw error;
    }
};

// create new cord
export const createCord = async (req: Request, res: Response) => {
    const { lng, lat } = req.body;
    try {
        const latitude: number = parseFloat(lat);
        const longitude: number = parseFloat(lng);
        const cord = await prisma.create({
            data: {
                latitude,
                longitude, 
            },
        });

        res.json(cord).status(201);
    } catch (error) {
        throw error;
    }
};

// update cord
export const updateCord = async (req: Request, res: Response) => {
    const id = req.params.id;
    const { longitude, latitude } = req.body;
    try {
        const cord = await prisma.update({
            where: {
                id: id,
            },
            data: {
                latitude,
                longitude,
            },
        });

        res.json(cord).status(200);
    } catch (error) {
        throw error;
    }
};


// delete cord
export const deleteCord = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        const cord = await prisma.delete({
            where: {
                id: id,
            },
        });

        res.json(cord).status(200);
    } catch (error) {
        throw error;
    }
}

// export cord controller
export default {
    getAllCords,
    getCordsById,
    createCord,
    updateCord,
    deleteCord,
}