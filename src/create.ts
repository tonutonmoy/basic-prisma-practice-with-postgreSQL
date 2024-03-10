import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // create data into db
  // const result = await prisma.post.create({
  //   data: {
  //     title: "This is title 2!",
  //     content: "This is content...2",
  //     authorName: "Fahim Ahammed Firoz",
  //   },
  // });
  // console.log(result);
  // create many
  // const createUser = await prisma.user.create({
  //   data: {
  //     username: "user1",
  //     email: "user1@ph.com",
  //     role: UserRole.user,
  //   },
  // });
  // console.log(createUser);
  // const createProfile = await prisma.profile.create({
  //   data: {
  //     bio: "this is bio...",
  //     userId: 2,
  //   },
  // });
  // console.log(createProfile);
  // const createCategory = await prisma.category.create({
  //   data: {
  //     name: "software engineering",
  //   },
  // });
  // console.log(createCategory);
  // const createPost = await prisma.post.create({
  //   data: {
  //     title: "this is title 5 ",
  //     content: "this is content of the post.5 ",
  //     authorId: 2,
  //     postCategory: {
  //       create: [
  //         {
  //           categoryId: 1,
  //         },
  //         {
  //           categoryId: 2,
  //         },
  //         {
  //           categoryId: 3,
  //         },
  //       ],
  //     },
  //   },
  //   include: {
  //     postCategory: true,
  //   },
  // });
  // console.log(createPost);
};

main();
