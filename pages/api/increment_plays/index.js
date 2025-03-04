import { prisma } from "../../../lib/prisma.js"

// PUT /api/increment_plays
export default async function handle(req, res) {
   const date = req.body.date

   const stat = await prisma.image.update({
      where: { date: date },
      data: {
         plays: { increment: 1 },
      },
   })

   const total_plays = await prisma.stat_book.update({
      where: { id: "stat_book" },
      data: {
         total_plays: { increment: 1 },
      },
   })
   res.json(stat)
}
