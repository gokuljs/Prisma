import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // create user
  //   const user = await prisma.user.create({
  //     data: {
  //       name: "gokuljs",
  //       email: "jsgokul123@gmail.com",
  //     },
  //   });
  //   const users = await prisma.user.findMany();

  const article = await prisma.article.create({
    data: {
      title: "jhon snow",
      body: "dragon ball zeen",
      author: {
        connect: {
          id: 1,
        },
      },
    },
  });
  console.log(article);
  const articles = await prisma.article.findMany();
  console.log(articles);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
