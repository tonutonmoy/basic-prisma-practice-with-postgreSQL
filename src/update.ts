import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const updates = async () => {
  //   const singleUpdate = await prisma.post.update({
  //     where: {
  //       id: 7,
  //     },
  //     data: {
  //       title: "Title 5",
  //       // content: "Content 4",
  //       // authorName: "Author 4"
  //     },
  //   });
  //   console.log(singleUpdate);
  //   update many
  const updateMany = await prisma.post.updateMany({
    where: {
      title: "Title 2",
    },
    data: {
      published: true,
    },
  });
  console.log(updateMany);
  // const upsertData = await prisma.post.upsert({
  //   where: {
  //     id: 1,
  //   },
  //   update: {
  //     authorName: "Fahim",
  //   },
  //   create: {
  //     title: "Title 22",
  //     content: "content 22",
  //   },
  // });
  // console.log(upsertData);
};

updates();
