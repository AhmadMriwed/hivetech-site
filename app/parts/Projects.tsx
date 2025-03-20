
import ProjectCard from "@/components/cards/ProjectCard";
import Header from "@/components/Header";
import { ProjectProps } from "@/types";
import axios from "axios";
import Link from "next/link";


export default async function Projects() {


    const response = await axios.get('https://main.hivetech.space/api/projects', {
      headers: {
        "Content-Type": "application/json",
      }
    });
    const projects = response.data.data.slice(0, 6); // Assuming the array is nested under `data`
    // console.log(testimonials); // Verify the structure


  return (
    <section className="container flex flex-col items-center  mt-40 px-5 md:px-12 mx-auto">
    
    <Header title='Our Projects' paragragh='We are ready to scale up your business with our great work result.'/>
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-x-8 sm:gap-y-10 justify-items-center mx-auto mt-10 ">
          {projects.map((project:ProjectProps, index:number) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        <button
        type="button"
        className=" mt-10 w-40 h-14 rounded-[30px] text-primary-color1 
        border-primary-color1 border hover:bg-primary-color1
         hover:border-none font-semibold hover:opacity-75 hover:text-primary-color3
         transition-all duration-500"
      >
        <Link href={"/projects"}>see more &gt;&gt;</Link>
      </button>
    </section>
  )
 
}


