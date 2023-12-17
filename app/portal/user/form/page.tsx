import UserForm from '@/components/UserForm';

export default function Page() {
  return (
    <div className="container py-2">
      <h1 className="text-center text-2xl">Add new user</h1>
      <UserForm />
    </div>
  );
}
