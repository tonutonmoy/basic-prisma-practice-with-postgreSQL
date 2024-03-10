import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const interactive = async () => {
  const result = await prisma.$transaction(async (tonu) => {
    //  query 1
    const getAllPost = await tonu.post.findMany({
      where: {
        published: true,
      },
    });

    //  query 2
    const countUser = await tonu.user.count();

    //  query 2
    const updateUser = await tonu.user.update({
      where: {
        id: 1,
      },
      data: {
        age: 56,
      },
    });

    return {
      getAllPost,
      countUser,
      updateUser,
    };
  });

  console.log(result);
};

interactive();
