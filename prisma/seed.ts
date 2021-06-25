import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function seed() {
  await prisma.mockType.createMany({
    data: [
      { type: 'algo', title: 'Algo mocks' },
      { type: 'sd', title: 'Syctem design mocks' },
      { type: 'sdFront', title: 'Syctem design mocks (Front-end)' },
      { type: 'sdMobile', title: 'Syctem design mocks (Mobile)' },
      { type: 'front', title: 'Front-end tasks' },
    ],
    skipDuplicates: true,
  })
}

seed()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

