import { PrismaClient } from '@prisma/client'
import type { NextApiRequest,NextApiResponse } from 'next'

const prisma = new PrismaClient()

async function main() {
    const post = await prisma.post.create({
        data: {
          title: 'new post added',
        },
      })
      console.log(post)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })