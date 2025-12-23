import { useEffect } from "react";
import type { Route } from "./+types/index";
import FeaturedProjects from "~/components/FeaturedProjects";
import type { Project } from "~/type";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "The Friendly Dev | Welcome" },
    { name: "description", content: "Custom Website developement!" },
  ];
}

export async function loader({request}: Route.LoaderArgs): Promise<{projects:Project[]}>{
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return {projects: data}
}

const HomePage = ({loaderData}: Route.ComponentProps) => {
  const {projects} = loaderData;

  console.log(projects);

  return (
  <>
    <FeaturedProjects projects={projects} count={2}/>
  </>
  );
}

export default HomePage;