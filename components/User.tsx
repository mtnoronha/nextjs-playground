import { User } from "@/types";

interface UserProps {
  user: User;
}

const UserComponent = ({ user }: UserProps) => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <h2>{ user.name }</h2>
      <p>Id: { user.id }</p>
      <p>Email: { user.email }</p>
    </div>
  );
}

export default UserComponent;