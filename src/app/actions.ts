"use server";

import { getSession } from "@/helpers/session";
import { User } from "@prisma/client";
import prisma from "../helpers/db";

export async function getUserData() {
  const session = await getSession();

  const userData = session?.user as User;

  if (!userData) {
    throw new Error("User data not found");
  }

  const user = await prisma.user.findUnique({
    where: { id: userData.id as number },
  });

  return user;
}

export async function summaryText(formData: FormData) {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return "This is a summary of the text";
}
