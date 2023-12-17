import { findUser } from '@/actions/actions';
import { toaster } from '@/app/toaster';
import UserForm from '@/components/UserForm';
import { User } from '@prisma/client';

type idProp = {
  id: string[];
}

type ParamsProps = {
  params: idProp;
};

export default async function Page({ params } : ParamsProps) {
  const userId = params?.id ? params.id[0] : null;
  const headerText = userId ? 'Edit user' : 'New user';

  const userFormState = await findUser(userId);
  const user = userFormState.data as User;

  if (userFormState.type === 'error') {
    // FIXME cant call toaster here because we're on server-side
    // What should we do? Create another component like an Alert?
    // toaster.send(userFormState);
  }

  return (
    <div className="container py-2">
      <h1 className="text-center text-2xl">{headerText}</h1>
      <UserForm user={user} />
    </div>
  );
}
