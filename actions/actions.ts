'use server';

import prisma from '@/prisma/prisma';
import { formState } from '@/types';
import { Prisma } from '@prisma/client';

export async function saveUser(data: FormData): Promise<formState> {
  try {
    const user = await prisma.user.create({
      data: {
        name: data.get('name') as string,
        email: data.get('email') as string,
      }
    });

    return {
      message: `User ${user.name} created successfully`,
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
