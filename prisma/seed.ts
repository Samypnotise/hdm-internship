import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

const roundsOfHashing = 10;

async function main() {
  const userPassword = await bcrypt.hash('test123@', roundsOfHashing);

  const user1 = await prisma.user.upsert({
    where: { email: 'samy.djemili@utbm.fr' },
    update: { password: userPassword },
    create: {
      username: 'Samypnotise',
      email: 'samy.djemili@utbm.fr',
      password: userPassword,
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: 'sami.djemyly@utbm.fr' },
    update: { password: userPassword },
    create: {
      username: 'Samipnotyse',
      email: 'sami.djemyly@utbm.fr',
      password: userPassword,
    },
  });

  const post1User1 = await prisma.post.create({
    data: {
      title: 'Test',
      content: 'Ceci est un test',
      authorId: user1.id,
    },
  });

  const post2User2 = await prisma.post.create({
    data: {
      title: 'Test 2',
      content: 'Ceci est un 2e test',
      authorId: user2.id,
    },
  });

  console.log('Data created :', {
    user1,
    user2,
    post1User1,
    post2User2,
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit();
  })
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  .finally(async (): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/await-thenable, @typescript-eslint/unbound-method
    await prisma.$disconnect;
  });
