import UserLayout from "../../../layouts/User";
import TaskForm from "../../../components/Forms/TaskForm";

const taskData = {
  name: "",
  description: "",
  project: "",
  status: "",
  dueDate: "",
  assignedTo: [],
};

const NewTask = () => {
  return (
    <TaskForm formId="add-task-form" taskData={taskData} forNewTask={true} />
  );
};

export default NewTask;

NewTask.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Edit" description="Edit project information.">
      {page}
    </UserLayout>
  );
};
