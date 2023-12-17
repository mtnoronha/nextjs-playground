import type { User } from '@prisma/client';
import UserComponent from './User';

interface UsersProps {
  users: User[];
}

const UsersComponent = ({ users }: UsersProps) => {
  return (
    <div>
      {users.map((user) => (
        <UserComponent key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UsersComponent;