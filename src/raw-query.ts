import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async () => {
  const post =
    // await prisma.$queryRaw`Select * from "posts"  where published = true `;

    //   console.log(post);

    // delete table data

    // await prisma.$queryRaw` TRUNCATE  TABLE "users" CASCADE`;
    await prisma.$queryRaw` TRUNCATE  TABLE "categories" CASCADE`;
};

rawQuery();
