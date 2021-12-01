import { NextRouter, Router, useRouter } from "next/router";
import { mutate } from "swr";

export const dateDiffInDays = (date: string) => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  const a = new Date();
  const dueDate = new Date(date);
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(
    dueDate.getFullYear(),
    dueDate.getMonth(),
    dueDate.getDate()
  );
  return Math.floor((utc2 - utc1) / _MS_PER_DAY).toString();
};

export const dueDateColor = (
  date: string,
  status: "completed" | "pending" | "archived"
) => {
  const dueDate: number = parseInt(date);
  if (status != "completed") {
    if (dueDate > 3) {
      return " text-yellow-500 ";
    } else if (dueDate <= 3) {
      return " text-red-500 ";
    }
  } else {
    return " text-green-500 ";
  }
};

export const groupBy = function (xs: Array<any>, key: any) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

/* Database methods */

const contentType: string = "application/json";

export async function postData(
  api: string,
  form: any,
  url: string,
  router: NextRouter
) {
  try {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(form),
    });

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    router.push(url);
  } catch (error) {}
}

/* The PUT method edits an existing entry in the mongodb database. */
export async function putData(
  api: string,
  form: any,
  url: string,
  router: NextRouter
) {
  const { id } = router.query;
  try {
    const res = await fetch(api, {
      method: "PUT",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(form),
    });

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      throw new Error(res.status.toString());
    }

    const { data } = await res.json();

    mutate(`/api/project/${id}`, data, false); // Update the local data without a revalidation
    router.push(url);
  } catch (error) {}
}

export async function deleteData(api: string, router: NextRouter) {
  const { id } = router.query;
  try {
    const res = await fetch(api, {
      method: "DELETE",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(id),
    });

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      throw new Error(res.status.toString());
    }
  } catch (error) {}
}
