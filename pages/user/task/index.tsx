import { useState, useEffect } from "react";
import UserLayout from "../../../layouts/User";
import Link from "next/link";
import { TaskList } from "../../../components/Cards/List/TaskList";

const Index = () => {
  const [tasks, setTasks] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/task")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setTasks(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col p-6 text-blue-gray-600 bg-blue-gray-100 w-full h-screen">
        <div className="flex justify-between items-center mb-3">
          <h1 className="text-2xl font-semibold tracking-widest">My Tasks</h1>
          <Link href="/user/task/new">
            <a className="flex flex-row items-center justify-center md:w-28 px-4 py-2 rounded-md text-white font-semibold border-0 focus:outline-none bg-green-500 hover:bg-green-700">
              Add Item
            </a>
          </Link>
        </div>
        <div className="flex-grow">
          <TaskList items={tasks} />
        </div>
      </div>
    </>
  );
};

export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Tasks" description="Display the user tasks.">
      {page}
    </UserLayout>
  );
};
