import UserLayout from "../../../layouts/User";
import { useRouter } from "next/router";
import useSWR from "swr";
import TaskForm from "../../../components/Forms/TaskForm";

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const Edit = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: task, error } = useSWR(id ? `/api/task/${id}` : null, fetcher);

  if (error) return <p>Failed to load</p>;
  if (!task) return <p>Loading...</p>;

  const taskData = {
    name: task.name,
    description: task.description,
    project: task.project,
    status: task.status,
    dueDate: task.due_date,
    assignedTo: task.assigned_to,
  };

  return (
    <TaskForm formId="edit-task-form" taskData={taskData} forNewTask={false} />
  );
};

export default Edit;

Edit.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Edit" description="Edit task information.">
      {page}
    </UserLayout>
  );
};
