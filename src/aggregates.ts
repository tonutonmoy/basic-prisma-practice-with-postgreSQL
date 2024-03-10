import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const aggregates = async () => {
  //  find average age
  //   const avAge = await prisma.user.aggregate({
  //     _avg: {
  //       age: true,
  //     },
  //   });
  //   console.log(avAge);
  //  find age sum
  //   const sumAge = await prisma.user.aggregate({
  //     _sum: {
  //       age: true,
  //     },
  //   });
  //   console.log(sumAge);
  //  find age count
  const countAge = await prisma.user.aggregate({
    _count: {
      age: true,
    },
    where: {
      username: {
        in: ["user1", "user2"],
      },
    },
  });
  console.log(countAge);

  //     count table row
  //   const countTableRow = await prisma.user.count();
  //   console.log(countTableRow);
  //   console.log(countAge);
  //  find age max
  //   const maxAge = await prisma.user.aggregate({
  //     _max: {
  //       age: true,
  //     },
  //   });
  //   console.log(maxAge);
  //  find age  min
  //   const minAge = await prisma.user.aggregate({
  //     _min: {
  //       age: true,
  //     },
  //   });
  //   console.log(minAge);
};

aggregates();
