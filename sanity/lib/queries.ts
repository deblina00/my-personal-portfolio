import { client } from "./client";

export async function getProjectData() {
  const query = `*[_type == "project"] | order(_createdAt asc) {
    title,
    description,
    "image": image.asset->url,
    Live_link
  }`;

  try {
    const data = await client.fetch(query);
    console.log("Sanity Response:", data);
    return data;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}

export async function getSkillData() {
  const query = `*[_type == "skills"] | order(_createdAt asc) {
    title,
    "image": image.asset->url,
    percent
  }`;

  try {
    const data = await client.fetch(query);
    console.log("Sanity Response:", data);
    return data;
  } catch (error) {
    console.error("Sanity Fetch Error:", error);
    return [];
  }
}
