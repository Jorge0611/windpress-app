import { dateDiffInDays } from "./utils";

interface Items {
  id: string;
  name: string;
  description: string;
  project: string;
  status: "completed" | "pending" | "archived";
  dueDate: string;
  users: {
    id: string;
    name: string;
    avatar: string;
  }[];
}

interface Projects {
  id: string;
  name: string;
  tasks: {
    id: string;
    name: string;
    description: string;
    dueDate: string;
    status: "completed" | "pending" | "archived";
    users: {
      id: string;
      name: string;
      avatar: string;
    }[];
  }[];
}

export const items: Items[] = [
  {
    id: "item1",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 1",
    status: "completed",
    dueDate: dateDiffInDays("2021-11-30"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item2",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 1",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-22"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item3",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 1",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-27"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item4",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 2",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-23"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item5",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 2",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-23"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item6",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 2",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-23"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item7",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 1",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-23"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
  {
    id: "item8",
    name: "Task name",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.\n",
    project: "Project name 1",
    status: "pending",
    dueDate: dateDiffInDays("2021-11-23"),
    users: [
      {
        id: "user1",
        name: "James Bond",
        avatar:
          "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user2",
        name: "Amelia Brown",
        avatar:
          "https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user3",
        name: "Katherine Gomez",
        avatar:
          "https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=580&q=80",
      },
      {
        id: "user4",
        name: "Lucy Lindemann",
        avatar:
          "https://images.unsplash.com/photo-1579503841516-e0bd7fca5faa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
      },
    ],
  },
];

export const projects: Projects[] = [
  {
    id: "project1",
    name: "Project 1",
    tasks: [
      {
        id: "task1",
        name: "Task 1",
        description: "Hola",
        dueDate: dateDiffInDays("2021-12-15"),
        status: "pending",
        users: [
          {
            id: "user1",
            name: "El pepe",
            avatar: "none",
          },
        ],
      },
    ],
  },
];
