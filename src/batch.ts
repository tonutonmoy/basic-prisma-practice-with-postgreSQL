import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
  const createUser = prisma.user.create({
    data: {
      username: "minny",
      email: "minny@phi.com",
    },
  });
  const updateUser = prisma.user.update({
    where: {
      id: 2,
    },
    data: {
      username: "updatedUsername2",
    },
  });

  const [createData, updateData] = await prisma.$transaction([
    createUser,
    updateUser,
  ]);
  console.log(createData, updateData);
};

batchTransaction();
