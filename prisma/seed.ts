import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.todo.deleteMany();
  const todo = await prisma.todo.create({
    data: {
      title: 'First Todo',
      description: 'This is the first todo',
      completed: false,
      createdAt: new Date(),
    },
  });
  console.log({ todo });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
