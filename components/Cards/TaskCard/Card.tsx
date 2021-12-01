import { motion } from "framer-motion";
import { memo } from "react";
import UserAvatars from "../../Items/UserAvatars";

type CardProps = {
  id: string;
  name: string;
  description: string;
  status: "completed" | "pending" | "archived";
  dueDate: string;
  users: {
    id: string;
    name: string;
    avatar: string;
  }[];
  onClick: () => void;
};

const Card = memo(function Card({
  id,
  name,
  description,
  status,
  dueDate,
  users,
  ...props
}: CardProps) {
  return (
    <>
      <div {...props}>
        <motion.div
          key={id}
          layoutId={id}
          className="flex flex-col rounded-md bg-white text-blue-gray-600 shadow-md p-5 space-y-2 cursor-pointer"
        >
          <motion.div>
            <h2 className="text-xl font-semibold tracking-widest truncate">
              {name}
            </h2>
          </motion.div>
          <motion.div>
            <p className="max-h-36 whitespace-pre-line overflow-y-hidden overflow-hidden break-words">
              {description}
            </p>
          </motion.div>
          <motion.div className="flex items-center justify-start overflow-x-auto">
            <UserAvatars users={users} />
          </motion.div>
          <motion.div
            className={
              "flex justify-end min-w-max items-center " +
              (status === "completed"
                ? " text-green-500 "
                : parseInt(dueDate) > 3
                ? " text-yellow-500 "
                : " text-red-500 ")
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              className={"h-5 w-5 mr-1"}
              fill="currentColor"
            >
              <path d="M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
            </svg>
            {status === "completed" ? (
              <span>Completed</span>
            ) : (
              <span>Due in {dueDate} days</span>
            )}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
});

export default Card;
