'use client';

import SubmitButton from '@/components/SubmitButton';
import { saveOrUpdateUser } from '@/actions/actions';
import { toaster } from '@/app/toaster';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import type { User } from '@prisma/client';

type UserProps = {
  user: User;
};


export default function UserForm({ user }: UserProps) {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function clientAction(formData: FormData) {
    console.log('Am I being called?');
    const name = formData.get('name');
    const email = formData.get('email');

    if (!name || !email) {
      return;
    }

    const msg = await saveOrUpdateUser(formData, user?.id);
    toaster.send(msg);
    if (msg.type === 'success') {
      if (user == null) {
        ref.current?.reset();
      }

      router.push('/portal/users');
      router.refresh();
    }
  }

  return (
    <form ref={ref} action={clientAction} className="flex flex-col align-middle items-center gap-2 mt-4">
      <input type="text"  defaultValue={(user?.name || '')} required name="name" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
      <input type="email" defaultValue={user?.email} required name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
      <SubmitButton />
    </form>
  );
}
