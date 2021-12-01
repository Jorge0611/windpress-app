import { useState } from "react";
import { useRouter } from "next/router";
import { MultiSelect } from "react-multi-select-component";
import Link from "next/link";
import { postData, putData } from "../../libs/utils";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Pineapple 🍍", value: "pineapple" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

interface FormProps {
  formId: string;
  projectData: any;
  forNewProject?: boolean;
}

const ProjectForm = ({
  formId,
  projectData,
  forNewProject = true,
}: FormProps) => {
  const [name, setName] = useState(projectData.name);
  const [description, setDescription] = useState(projectData.description);
  const [startDate, setStartDate] = useState(projectData.startDate);
  const [dueDate, setDueDate] = useState(projectData.dueDate);
  const [assignedTo, setAssignedTo] = useState<any[]>([]);

  const router = useRouter();
  const { id } = router.query;

  // Create object to collect all form data
  const form = {
    name: name,
    description: description,
    start_date: startDate,
    due_date: dueDate,
    assigned_to: assignedTo.map((option) => option.value),
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (dueDate < startDate)
      return alert("Due date has to be after Start date");

    if (assignedTo.length === 0)
      return alert("You have select at least one (1) user");
    forNewProject
      ? postData("/api/project", form, "/user/project", router)
      : putData(`/api/project/${id}`, form, "/user/project/", router);
  };

  return (
    <>
      <div className="text-blue-gray-600 font-medium bg-blue-gray-100 pt-4 h-screen w-full">
        <div className="flex flex-col bg-white mx-6 md:mx-48 my-6 md:my-10 p-6 rounded-lg space-y-5">
          <form id={formId} onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row w-full md:space-x-3">
              <div className="flex flex-col w-full mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Project name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  name="description"
                  className="focus:ring-blue-800 focus:border-blue-800  block py-2 sm:text-sm border-gray-300 rounded-md"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-row w-full space-x-3">
              <div className="flex flex-col w-full">
                <label htmlFor="startDate">Start date</label>
                <input
                  type="date"
                  name="startDate"
                  id="startDate"
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>

              <div className="flex flex-col w-full">
                <label htmlFor="name">Due date</label>
                <input
                  type="date"
                  name="dueDate"
                  id="dueDate"
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <div>
              <div>
                <h1>Assign to</h1>
                <pre className="truncate">{JSON.stringify(assignedTo)}</pre>
                <MultiSelect
                  options={options}
                  value={assignedTo}
                  onChange={setAssignedTo}
                  labelledBy="Select"
                  disableSearch
                  className="focus:ring-blue-800 focus:border-blue-800 py-2 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <Link href={"/user/project/"}>
                <a className="text-white border-0 w-28 py-2 px-6 focus:outline-none bg-red-600 hover:bg-red-700 rounded-md text-lg">
                  Cancel
                </a>
              </Link>
              <button
                type="submit"
                className="text-white border-0 w-28 py-2 px-6 focus:outline-none bg-green-600 hover:bg-green-700 rounded-md text-lg"
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

export default ProjectForm;
