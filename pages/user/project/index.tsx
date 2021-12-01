import UserLayout from "../../../layouts/User";
import CircularProgress from "../../../components/Items/CircularProgress";
import { useState, useEffect } from "react";
// import { items } from "../../../libs/data";
import { TaskList } from "../../../components/Cards/List/TaskList";

const Index = () => {

const [project, setProject] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/project")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setProject(data.data);
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
      <div className="flex flex-col md:flex-row p-6 text-accent bg-blue-gray-100 h-screen w-full">
        <div className="flex-none w-48 justify-center items-center mx-auto mb-3">
          <div className="items-center">
            <div className="">
              <CircularProgress percent={60} />
            </div>
            <div className="ml-2">
              <h1 className="text-2xl font-semibold tracking-widest">
                Project Name
              </h1>
            </div>
          </div>
        </div>
        <div className="md:flex-grow md:ml-8">
          <TaskList items={project} />
        </div>
      </div>
    </>
  );
};

/*export const TaskList = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [identifier, setIdentifier] = useState("");
  return (
    <AnimateSharedLayout>
      <div>
        {items.map((item, key) => (
          <SimpleCard
            key={key}
            id={item.id}
            name={item.name}
            status={item.status}
            dueDate={item.dueDate}
            users={item.users}
            onClick={() => {
              setIdentifier(item.id);
              setIsOpen(true);
            }}
          />
        ))}
      </div>
      <AnimatePresence exitBeforeEnter>
        {isOpen && identifier && (
          <Item id={identifier} onClick={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
};*/
export default Index;

Index.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Project" description="Display selected Project.">
      {page}
    </UserLayout>
  );
};
