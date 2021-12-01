import { motion } from "framer-motion";
import UserAvatars from "../Items/UserAvatars";

type Props = {
  id: string;
  name: string;
  status: "completed" | "pending" | "archived";
  dueDate: string;
  users: {
    id: string;
    name: string;
    avatar: string;
  }[];
  onClick: () => void;
};

const SimpleCard = ({ id, name, status, dueDate, users, ...props }: Props) => {
  return (
    <div {...props}>
      <motion.div
        layoutId={id}
        className="flex flex-row justify-between text-blue-gray-600 bg-white items-center my-2 px-6 py-2 rounded-lg shadow cursor-pointer"
      >
        <motion.div className="flex justify-start  ">
          <motion.h3 className="text-lg font-semibold">{name}</motion.h3>
        </motion.div>
        <div className="flex items-center justify-end space-x-6 pr-1">
          <motion.div>
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-2 -2 24 24"
                className="h-5 w-5 mr-1"
                fill="currentColor"
              >
                <path d="M11 9h4a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v5zm-1 11C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" />
              </svg>
              {status === "completed" ? (
                <span>Completed</span>
              ) : (
                <span>Due in {dueDate} days</span>
              )}
            </div>
          </motion.div>
          <motion.div className="hidden md:flex">
            {/* <UserAvatars users={users} /> */}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default SimpleCard;
