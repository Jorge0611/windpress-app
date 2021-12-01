import ProjectForm from "../../../components/Forms/ProjectForm";
import UserLayout from "../../../layouts/User";
const NewProject = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const projectData = {
    name: "",
    description: "",
    startDate: today.toISOString().substr(0, 10),
    dueDate: tomorrow.toISOString().substr(0, 10),
    assignedTo: [],
  };

  return <ProjectForm formId="add-project-form" projectData={projectData} />;
};

export default NewProject;

NewProject.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Edit" description="Edit project information.">
      {page}
    </UserLayout>
  );
};
