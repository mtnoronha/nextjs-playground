import { findUser } from '@/actions/actions';
import UserForm from '@/components/UserForm';

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

  if (userFormState.type === 'error') {
    return <h1 className="text-center text-2xl">{userFormState.message}</h1>;
  }

  const user = userFormState.data;

  return (
    <div className="container py-2">
      <h1 className="text-center text-2xl">{headerText}</h1>
      <UserForm user={user} />
    </div>
  );
}
