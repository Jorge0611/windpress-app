import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  await fetch('https://api.clerk.dev/v1/users',{
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.NEXT_PRIVATE_CLERK_BACKEND_TOKEN}`
    },
  }).then((response: Response) => {
    if(response.ok){
      return response.json();
    }
    throw  response;
  }).then((data) => {
    res.status(200).json({ users: data });
  }).catch((error) => {
    console.error("Error fetching data: " + error);
  })
}
