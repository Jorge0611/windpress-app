import { motion } from "framer-motion";
import { memo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteData } from "../../../libs/utils";
import UserAvatars from "../../Items/UserAvatars";

type Props = {
  id: string;
  items: any[];
  deleteApi: string;
  onClick: () => void;
};

interface Items {
  id: string;
  name: string;
  description: string;
  project: string;
  status: "completed" | "pending" | "archived";
  dueDate: string;
  assigned_to: {
    id: string;
    name: string;
    avatar: string;
  }[];
}

const Item = memo(function Item({ id, items, deleteApi, ...props }: Props) {
  const { name, description, project, status, dueDate, assigned_to }: Items =
    items.find((item) => item._id === id)!;

  const router = useRouter();
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.15 } }}
        transition={{ duration: 0.3, delay: 0.15 }}
        style={{ pointerEvents: "auto" }}
        className="fixed top-0 left-0 w-screen h-screen cursor-pointer backdrop-filter backdrop-blur-sm bg-gray-900 bg-opacity-50"
        {...props}
      />
      <div className="fixed top-0 left-0 right-0  m-6 mt-12 md:m-16 z-20">
        <motion.div
          layoutId={id}
          className="bg-white rounded-lg p-6 h-full w-full text-blue-gray-600"
        >
          <motion.div className="flex justify-end -mt-4 -mr-3">
            <motion.button
              {...props}
              className="flex bg-blue-gray-100 shadow hover:shadow-2xl items-center justify-center text-blue-gray-600 h-7 w-7 rounded-full relative"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>
          <motion.div className="fle flex-col space-y-2">
            <motion.div>
              <motion.div>
                <motion.h2 className="text-3xl font-semibold tracking-widest">
                  {name}
                </motion.h2>
              </motion.div>
              <motion.div>
                <motion.h5 className="text-md">  </motion.h5>
              </motion.div>
            </motion.div>
            <motion.div className="flex flex-col md:flex-row justify-between">
              <motion.div className="flex flex-row md:items-center justify-between md:space-x-24">
                <motion.div
                  className={
                    "flex items-center " +
                    (status === "completed"
                      ? " text-green-500 "
                      : parseInt(dueDate) > 3
                      ? " text-yellow-500 "
                      : "text-red-500")
                  }
                >
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
                </motion.div>
                <motion.div className="flex flex-row space-x-1 items-center">
                  <label htmlFor="status" className="font-semibold">
                    Status:{" "}
                  </label>
                  <span id="status">{status.toLocaleUpperCase()}</span>
                </motion.div>
              </motion.div>
              <motion.div className="flex my-4 md:justify-end space-x-4">
                <motion.button
                  onClick={() => {
                    deleteData(deleteApi, router).then(() => router.reload());
                  }}
                  className="flex flex-row items-center md:w-28 px-4 py-2 rounded-md text-white font-semibold border-0 focus:outline-none bg-red-500 hover:bg-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-3 -2 24 24"
                    className="h-6 w-6 md:mr-2"
                    fill="currentColor"
                  >
                    <path d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z" />
                  </svg>
                  <span className="hidden md:flex">Delete</span>
                </motion.button>
                <motion.div>
                  <Link href={`/user/task/${id}`}>
                    <a className="flex flex-row items-center md:w-28 px-4 py-2 rounded-md text-white font-semibold border-0 focus:outline-none bg-blue-500 hover:bg-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="-2.5 -2.5 24 24"
                        className="h-6 w-6 md:mr-2"
                        fill="currentColor"
                      >
                        <path d="M12.238 5.472L3.2 14.51l-.591 2.016 1.975-.571 9.068-9.068-1.414-1.415zM13.78 3.93l1.414 1.414 1.318-1.318a.5.5 0 0 0 0-.707l-.708-.707a.5.5 0 0 0-.707 0L13.781 3.93zm3.439-2.732l.707.707a2.5 2.5 0 0 1 0 3.535L5.634 17.733l-4.22 1.22a1 1 0 0 1-1.237-1.241l1.248-4.255 12.26-12.26a2.5 2.5 0 0 1 3.535 0z"/>
                      </svg>
                      Edit
                    </a>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div className="flex flex-row space-x-3 items-center">
              <span>Assigned to:</span>
              <UserAvatars users={assigned_to} />
            </motion.div>
            <motion.div className="flex flex-col">
              <motion.h2 className="text-lg font-semibold tracking-widest">
                Description
              </motion.h2>
              <motion.div className="bg-blue-gray-50 rounded-md p-3 mt-2">
                <motion.p className="">{description}</motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
});

export default Item;
