'use server';

import prisma from '@/prisma/prisma';
import { formState } from '@/types';
import { Prisma, User } from '@prisma/client';

export async function findUser(id: string | null): Promise<formState<User>> {
  if (!id) {
    return Promise.resolve({
      message: 'No user to find',
      type: 'info',
    });
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!user) {
      return {
        message: 'User not found',
        type: 'error',
      };
    }

    return {
      data: user,
      type: 'success',
      message: `User ${user?.name} found`,
    };
  } catch (error) {
    console.log('something on server side went wrong', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        message: error.message,
        type: 'error',
      };
    }

    return {
      message: 'Unknown error occurred',
      type: 'error',
    };
  }
}

async function createNewUser(data: FormData): Promise<User> {
  return await prisma.user.create({
    data: {
      name: data.get('name') as string,
      email: data.get('email') as string,
    }
  });
}

async function updateUser(data: FormData, id: number): Promise<User> {
  return await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: data.get('name') as string,
      email: data.get('email') as string,
    }
  });
}

export async function saveOrUpdateUser(data: FormData, id: number | undefined): Promise<formState<User>> {
  try {
    const user = !id ? await createNewUser(data) : await updateUser(data, id);

    return {
      message: `User ${user.name} was saved successfully`,
      type: 'success',
    };
  } catch (error) {
    console.log('something on server side went wrong', error);

    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        message: error.message,
        type: 'error',
      };
    }

    return {
      message: 'Unknown error occurred',
      type: 'error',
    };
  }
}
