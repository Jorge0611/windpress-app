import Image from "next/image";
import UserLayout from "../../layouts/User";
const Profile = () => {
  return (
    <div>
      <div className="w-full h-48 bg-blue-500"></div>
      <div>
        <div className="flex h-48 w-48 max-h-48 max-w-48 bg-black -mt-24 relative mx-auto shadow-lg rounded-full">
          <Image
            layout="fill"
            alt="User Profile"
            className="rounded-full"
            priority
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          />
        </div>

        <div className="flex flex-col h-screen w-full -mt-24 bg-blue-gray-100 text-blue-gray-600">
          <div className="flex flex-col mt-32 p-6 mx-6 md:mx-80 bg-white rounded-md shadow-md space-y-4">
            <div>
              <h1 className="text-xl font-medium tracking-widest">
                Name and Lastname
              </h1>
              <h3 className="text-md tracking-widest">Position</h3>
            </div>
            <hr className="bg-blue-gray-600 h-0.5" />
            <div>
              <h1 className="text-lg font-medium tracking-widest mb-3">
                Information
              </h1>
              <div className="flex flex-col">
                <div className="flex flex-row justify-between">
                  <span className="font-medium mr-4">Email</span>
                  <h4 className="truncate">someone@example.com</h4>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="font-medium mr-4">Phone</span>
                  <h4 className="truncate">829-968-8357</h4>
                </div>
                <div className="flex flex-row justify-between">
                  <span className="font-medium mr-4">Occupation</span>
                  <h4 className="truncate">Frontend Developer</h4>
                </div>
              </div>
            </div>
            <hr className="bg-accent h-0.5" />

            <div>
              <h1 className="text-lg font-medium tracking-widest mb-3">
                Projects
              </h1>
              <div className="flex flex-col">
                <ul>
                  <li>
                    <h4 className="truncate">React JS Project</h4>
                  </li>
                  <li>
                    <h4 className="truncate">React JS Project</h4>
                  </li>
                  <li>
                    <h4 className="truncate">React JS Project</h4>
                  </li>
                  <li>
                    <h4 className="truncate">React JS Project</h4>
                  </li>
                  <li>
                    <h4 className="truncate">React JS Project</h4>
                  </li>
                  <li>
                    <h4 className="truncate">React JS Project</h4>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: JSX.Element) {
  return (
    <UserLayout title="Profile" description="User profile information">
      {page}
    </UserLayout>
  );
};
