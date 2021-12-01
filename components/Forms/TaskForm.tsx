import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { MultiSelect } from "react-multi-select-component";
import { postData, putData } from "../../libs/utils";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Pineapple 🍍", value: "pineapple" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

interface FormProps {
  formId: string;
  taskData: any;
  forNewTask?: boolean;
}

function handleSelect(projects: any[], project: number) {
  if (!projects) {
    return "";
  }
  const data = projects[project];
  return data._id;
}

const TaskForm = ({ formId, taskData, forNewTask = true }: FormProps) => {
  const [name, setName] = useState(taskData.name);
  const [description, setDescription] = useState(taskData.description);
  const [project, setProject] = useState(taskData.project);
  const [status, setStatus] = useState(taskData.status);
  const [dueDate, setDueDate] = useState(taskData.dueDate);
  const [assignedTo, setAssignedTo] = useState<any[]>([]);

  const [projects, setProjects] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  //const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const { id } = router.query;

  const form = {
    name: name,
    description: description,
    project: project,
    status: status.toLowerCase(),
    due_date: dueDate,
    assigned_to: assignedTo.map((option) => option.value),
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    if (assignedTo.length === 0)
      return alert("You have select at least one (1) user");
    forNewTask
      ? postData("/api/task", form, "/user/task", router)
      : putData(`/api/task/${id}`, form, "/user/task/", router);
  };

  useEffect(() => {
    fetch("/api/project")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        setProjects(data.data);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      })
      .finally(() => {
        //setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/api/users")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        let user = data.users.map((o: any) => ({ label: `${o.first_name} ${o.last_name}`, value: o.id }))
        setUsers(user);
      })
      .catch((error) => {
        console.error("Error fetching data: " + error);
      })
      .finally(() => {
        //setLoading(false);
      });
  },[])

  return (
    <>
      <div className="bg-blue-gray-100 font-medium text-blue-gray-600 pt-4 h-screen w-full">
        <div className="flex flex-col bg-white mx-6 md:mx-48 md:my-10 p-6 rounded-lg space-y-5">
          <form id={formId} onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row w-full md:space-x-3">
              <div className="flex flex-col w-full mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Task name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="focus:ring-blue-800 focus:border-blue-800  block py-2 sm:text-sm border-gray-300 rounded-md"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="flex flex-row w-full space-x-3">
              <div className="flex flex-col w-full">
                <label htmlFor="project">Project</label>
                <select
                  name="project"
                  id="project"
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => {
                    const data = handleSelect(
                      projects,
                      e.target.options.selectedIndex
                    );
                    setProject(data);
                  }}
                  required
                >
                  <option/>
                  {projects.map((data: any, key: number) => (
                    <option key={"option-" + key}>{data.name}</option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="project">Status</label>
                <select
                  name="status"
                  id="status"
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                  onChange={(e) => setStatus(e.target.value)}
                  required
                >
                  <option/>
                  <option value="pending">Pending</option>
                  <option value="completed">Completed</option>
                  <option value="archived">Archived</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col w-full">
              <label htmlFor="dueDate">Date</label>
              <input
                type="date"
                name="dueDate"
                id="dueDate"
                className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
              />
            </div>

            <div>
              <div>
                <h1>Select Fruits</h1>
                <pre className="truncate">{JSON.stringify(assignedTo)}</pre>
                <MultiSelect
                  options={users}
                  value={assignedTo}
                  onChange={setAssignedTo}
                  labelledBy="Select"
                  disableSearch
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <Link href={"/user/task/"}>
                <a className="text-white text-center font-semibold border-0 w-28 py-2 px-6 focus:outline-none bg-red-600 hover:bg-red-700 rounded-md text-lg">
                  Cancel
                </a>
              </Link>
              <button
                type="submit"
                className="text-white font-semibold border-0 w-28 py-2 px-6 focus:outline-none bg-green-600 hover:bg-green-700 rounded-md text-lg"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TaskForm;
