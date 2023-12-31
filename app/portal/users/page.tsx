import { Suspense } from 'react';
import Users from '@/components/Users';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import type { User } from '@prisma/client';
import prisma from '@/prisma/prisma';
import Link from 'next/link';

export const revalidate = 0;

async function ListUsers() {
  const users: User[] = await prisma.user.findMany();

  if (users.length == 0) {
    return <h1>No users yet</h1>;
  }

  return <Users users={users} />;
}

export default async function Page() {
  return <div className="container py-2">
    <h1 className="text-3xl font-bold underline">Users</h1>
    <Link href="/portal/user/form" className="btn btn-neutral">New user</Link>
    <Suspense fallback={<LoadingSkeleton />}>
      <ListUsers />
    </Suspense>
  </div>
}
