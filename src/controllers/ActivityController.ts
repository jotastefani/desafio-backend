import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { stringify } from 'querystring'
import { z } from 'zod'


const prisma = new PrismaClient()

export default class ActivityController {
    async create(request: Request, response: Response) {

        const createActivity = z.object({
            name: z.string(),
            details: z.string(),
            type: z.string(),
            kilometer: z.number(),
            effort: z.number(),

        })

        const { name, details, type, kilometer, effort } = createActivity.parse(request.body)

        await prisma.sports_activity.create({
            data: {
                name, details, type, kilometer, effort
            }
        })

        return response.status(200).send({ success: "Sucesso" })
    }

    async readAll(request: Request, response: Response) {
        const allRead = await prisma.sports_activity.findMany()


        return response.status(200).send(allRead)
    }
    async read(request: Request, response: Response) {
        const readUnique = await prisma.sports_activity.findUnique({
            where: {
                id: Number(request.params.id),
            },
        })
        return response.status(200).send(readUnique)
    }
    async update(request: Request, response: Response) {
        const id = Number(request.params.id)
        const createActivity = z.object({
            name: z.string(),
            details: z.string(),
            type: z.string(),
            kilometer: z.number(),
            effort: z.number(),
        })

        const { name, details, type, kilometer, effort } = createActivity.parse(request.body)

        const update = await prisma.sports_activity.update({
            where: {
                id: id
            },
            data: {
                name, details, type, kilometer, effort
            }
        })
        return response.status(200).send(update)

    }
    async delete(request: Request, response: Response) {
        await prisma.sports_activity.delete({
            where: {
                id: Number(request.params.id),
            },
        })
        return response.status(200).send("Deletado com sucesso")
    }
}


