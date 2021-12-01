import UserLayout from "../../layouts/User";
import { useState, useEffect } from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import Card from "../../components/Cards/TaskCard/Card";
import dynamic from "next/dynamic";
const Item = dynamic(() => import("../../components/Cards/TaskCard/Item"));

const Index = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [identifier, setIdentifier] = useState("");

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
    <div className="bg-blue-gray-100 h-screen">
      <AnimateSharedLayout>
        <div className="grid grid-cols-2 md:grid-cols-3 p-4 gap-5">
          {tasks.map((item: any, key: number) => (
            <Card
              onClick={() => {
                setIdentifier(item._id);
                setIsOpen(true);
              }}
              key={"card-item-" + key}
              id={item._id}
              name={item.name}
              description={item.description}
              status={item.status}
              dueDate={item.due_date}
              users={item.assigned_to}
            />
          ))}
        </div>
        <AnimatePresence exitBeforeEnter>
          {identifier && isOpen && (
            <Item
              id={identifier}
              items={tasks}
              deleteApi={`/api/task/${identifier}`}
              onClick={() => setIsOpen(false)}
            />
          )}
        </AnimatePresence>
      </AnimateSharedLayout>
    </div>
  );
};

export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Overview" description="Display every task in the user">
      {page}
    </UserLayout>
  );
};
