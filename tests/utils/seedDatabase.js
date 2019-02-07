import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "../../src/prisma";

const userOne = {
  input: {
    name: "[ DEV - user 1 ]",
    email: "dev1@example.com",
    password: bcrypt.hashSync("devPassword123")
  },
  user: undefined,
  jwt: undefined
};

const userTwo = {
  input: {
    name: "[ DEV - user 2 ]",
    email: "dev2@example.com",
    password: bcrypt.hashSync("adminPassword123")
  },
  user: undefined,
  jwt: undefined
};

const seedDatabase = async () => {
  // Delete the test data
  await prisma.mutation.deleteManyUsers();

  // Create a new user
  userOne.user = await prisma.mutation.createUser({
    data: userOne.input
  });
  userOne.jwt = jwt.sign({ userId: userOne.user.id }, process.env.JWT_SECRET);

  // Create second new user
  userTwo.user = await prisma.mutation.createUser({
    data: userTwo.input
  });
  userTwo.jwt = jwt.sign({ userId: userTwo.user.id }, process.env.JWT_SECRET);
};

export { seedDatabase as default, userOne, userTwo };
