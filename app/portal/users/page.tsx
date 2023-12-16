import { Suspense } from 'react';
import Users from '@/components/Users';
import LoadingSkeleton from '@/components/LoadingSkeleton';
import { User } from '@/types';

export const revalidate = 0;

async function ListUsers() {
  const users: User[] = [];

  if (users.length == 0) {
    return <h1>No users yet</h1>;
  }

  return <Users users={users} />;
}

export default async function Page() {
  return <div className="container py-2">
    <h1 className="text-3xl font-bold underline">Users</h1>
    <Suspense fallback={<LoadingSkeleton />}>
      <ListUsers />
    </Suspense>
  </div>
}
