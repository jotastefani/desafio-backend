import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { stringify } from 'querystring'
import { z } from 'zod'


const prisma = new PrismaClient()

export default class ActivityController {
    async create(request: Request, response: Response) {
        
        const createActivity = z.object({
            name:      z.string(),
            details:   z.string(),
            type:      z.string(),
            kilometer: z.number(),
            effort:    z.number(),
            
        })

        const { name, details, type, kilometer, effort } = createActivity.parse(request.body)

        await prisma.sports_activity.create({
            data: {
                name, details, type, kilometer, effort                
            }
        })

        return response.status(200).send({ success: "Sucesso" })
    }
}


