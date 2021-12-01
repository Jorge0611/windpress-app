import Image from "next/image";
type Props = {
  users: {
    id: string;
    avatar: string;
    name: string;
  }[];
};
const UserAvatars = ({ users }: Props) => {
  return (
    <div className="inline-flex flex-row-reverse">
      <div className="flex bg-blue-500 items-center justify-center text-white h-7 w-7 rounded-full relative -mr-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
      {users.map((user, key) => (
        <div
          key={"users-avatar-" + key}
          className="h-7 w-7 rounded-full relative -mr-2.5"
        >
          <Image
            src={
              user.avatar
                ? user.avatar
                : "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80"
            }
            layout="fill"
            alt={user.name}
            className="rounded-full"
          />
        </div>
      ))}
    </div>
  );
};

export default UserAvatars;
