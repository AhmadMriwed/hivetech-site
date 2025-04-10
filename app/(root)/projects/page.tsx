import axios from "axios";
import ProjectCard from "@/components/cards/ProjectCard";
import { ProjectProps, ProjectsArray } from "@/types";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import { Suspense } from "react";

const  ProjectsPage = async () =>  {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const response = await axios.get("https://main.hivetech.space/api/projects", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const projects = response.data.data;
  return (

      <section className=" flex flex-col items-center pt-40 px-4 md:px-12">
        {/* <Header
          title="All Projects"
          paragragh="this is the all of our projects"
        /> */}
        <div className="sm:px-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-x-10 sm:gap-y-10 justify-items-center mx-auto mt-10 ">
          {projects.map((project: ProjectProps, index: number) => (
            <ProjectCard key={project.id} project={project} index={index}  />
          ))}
        </div>
      </section>
   
  );
}

export default function page() {
  return (
        <Suspense fallback={<Loader />}><ProjectsPage /> </Suspense>
  )
}