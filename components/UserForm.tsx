'use client';

import SubmitButton from '@/components/SubmitButton';
import { saveUser } from '@/actions/actions';
import { toaster } from '@/app/toaster';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';

export default function UserForm() {
  const ref = useRef<HTMLFormElement>(null);
  const router = useRouter();

  async function clientAction(formData: FormData) {
    const name = formData.get('name');
    const email = formData.get('email');

    if (!name || !email) {
      return;
    }

    const msg = await saveUser(formData);
    toaster.send(msg);
    if (msg.type === 'success') {
      ref.current?.reset();
      router.push('/portal/users');
      router.refresh();
    }
  }

  return (
    <form ref={ref} action={clientAction} className="flex flex-col align-middle items-center gap-2 mt-4">
      <input type="text" required name="name" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
      <input type="email" required name="email" placeholder="Email" className="input input-bordered input-primary w-full max-w-xs" />
      <SubmitButton />
    </form>
  );
}
