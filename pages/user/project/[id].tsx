import { useRouter } from "next/router";
import useSWR from "swr";
import UserLayout from "../../../layouts/User";
import ProjectForm from "../../../components/Forms/ProjectForm";

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data);

const EditProject = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data: project, error } = useSWR(
    id ? `/api/project/${id}` : null,
    fetcher
  );

  if (error) return <p>Failed to load</p>;
  if (!project) return <p>Loading...</p>;

  const projectData = {
    name: project.name,
    description: project.description,
    startDate: project.start_date,
    dueDate: project.due_date,
    assignedTo: project.assigned_to,
  };

  return (
    <ProjectForm
      formId="edit-project-form"
      projectData={projectData}
      forNewProject={false}
    />
  );
};

export default EditProject;

EditProject.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Edit" description="Edit project information.">
      {page}
    </UserLayout>
  );
};
