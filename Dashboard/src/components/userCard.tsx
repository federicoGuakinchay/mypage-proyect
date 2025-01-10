import { useNavigate } from "react-router-dom";

type User = {
  id: number; 
  alias: string; 
  email: string; 
  first_name: string; 
  last_name: string } | null;

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  if (!user) {
    return <p>No user data available.</p>;
  }

  return (
    <div className="item flex group items-center gap-6 ">
      <img
        src={user.picture || '/default-avatar.png'} // Default avatar if no picture
        alt={`${user.first_name} ${user.last_name}'s avatar`}
        className="user-card__image w-16 h-16 rounded-full object-cover group-hover:brightness-150"
      />
      <div className="flex flex-col items-center">
        <h2 className="">
          {user.first_name} {user.last_name}
        </h2>
        <p className="">@{user.slug}</p>
      </div>
      <div className="flex flex-col items-center">
        <p className={` ${
          user.is_active ? 'text-green-500' : 'text-red-500'
        }`}>
          {user.is_active ? 'Active' : 'Inactive'}
        </p>
        <p className="">{user.role}</p>
      </div>
    </div>
  );
};

export default UserCard;