import { findUser } from '@/actions/actions';
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

  return (
    <div className="container py-2">
      <h1 className="text-center text-2xl">{headerText}</h1>
      <UserForm user={user} />
    </div>
  );
}
