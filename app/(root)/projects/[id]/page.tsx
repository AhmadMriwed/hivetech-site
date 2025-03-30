import Loader from "@/components/Loader";
import axios from "axios";
import React, { Suspense } from "react";
import { Carousel } from "@/components/cards/Carousel";
import Image from "next/image";
import CategoryCard from "@/components/cards/CategoryCard";
import { Category } from "@/types";
import Animation from "@/components/animation/Animation";

interface Props {
  params: {
    id: number;
  };
}

const ServicesPage = async ({ id }: { id: number }) => {
  // Simulate loading delay
  await new Promise((resolve) => setTimeout(resolve, 200));

  // Fetch project data
  const response = await axios.get(
    `https://main.hivetech.space/api/projects/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const project = response.data.data;
  console.log(project);

  return (
    <div className="min-h-screen py-20 pt-36 md:pt-40  sm:px-8 lg:px-10">
      {/* Project Header */}
      <div className="max-w-7xl mx-auto text-center pb-10 px-4">
        <Animation
          animationVertix={"y"}
          text={project.title}
          style={{ letterSpacing: "3px" }}
          className={
            "text-2xl md:text-3xl lg:text-4xl text-primary-color1 hover:text-primary-hover font-semibold mb-4"
          }
        />

        <Animation
          className="text-lg text-gray-600"
          animationVertix="y"
          text={project.sub_title}
        />
      </div>

      {/* <div className="flex w-full max-lg:flex-col-reverse justify-center px-4">
        <div className="flex justify-center flex-1 p-4 pt-10 md:pl-10">
          <Animation
            className="lg:text-lg"
            style={{ letterSpacing: "1.7px", lineHeight: "2.4rem" }}
            animationVertix="x"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nam
            dolore voluptas eaque eum perferendis consectetur vero blanditiis
            ipsum illo adipisci voluptates soluta a velit cum impedit,
            excepturi, natus ipsam.Lorem Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Optio fugiat quae minima autem sequi commodi
            incidunt eum magnam rem pariatur aliquid, excepturi, at harum
            laudantium qui officia soluta dolorum adipisci!"
          />
        </div>
        <div className="flex flex-1 px-4 items-center justify-center">
          <Image
            src={`https://main.hivetech.space/storage/${project.image}`}
            alt={project.title}
            width={500}
            height={400}
            className="rounded-xl h-full xl:w-[80%] aspect-auto" // Ensure the image scales properly
          />
        </div>
      </div> */}
      <div className="mx-auto max-w-7xl py-12 sm:px-10 px-6">
        <Animation animationVertix="y">
          <p className="sm:text-[18px] text-[14px] dark:text-gray-300 uppercase tracking-wider text-gray-500">
            Introduction
          </p>
          <h2 className="font-bold md:text-[35px] sm:text-[30px] text-[25px] tracking-wider">
            Project Overview.
          </h2>
        </Animation>

        <Animation
          delay={0.6}
          duration={1}
          className="mt-4 text-[17px] max-w-3xl leading-[30px] tracking-wider text-gray-600 dark:text-gray-300"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            doloremque dicta, nulla quas quia ratione harum necessitatibus
            quaerat suscipit, sapiente iusto aspernatur? Eius dolor cupiditate
            error, excepturi vero quo voluptate.
          </p>
        </Animation>
      </div>
      <div className="py-24 md:py-32 w-full   max-w-5xl lg:max-w-6xl mx-auto overflow-hidden md:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
        {" "}
        <Carousel slides={project.files} />
      </div>

      <div className="max-w-7xl mx-auto py-14 sm:px-10 px-6">
        <div className="pb-16">

        <Animation animationVertix="y" className="py-3">
          <h2 className="font-bold md:text-[35px] sm:text-[30px] text-[25px] tracking-wider">
            Project Responsibilities
          </h2>
        </Animation>
        <Animation
          delay={0.6}
          duration={1}
          className="mt-4 text-[17px] max-w-3xl leading-[30px] tracking-wider text-gray-600 dark:text-gray-300"
          >
          <p>
            The responsibilities outlined here represent the structured approach
            taken to execute the project. Each responsibility corresponds to a
            specific phase or domain, ensuring that all aspects of the project
            are addressed systematically and efficiently.
          </p>
        </Animation>
          </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.categories.map((category: Category, index: number) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </ul>
      </div>



    </div>
  );
};

export default async function Page({ params }: Props) {
  const { id } = await params;

  return (
    <Suspense fallback={<Loader />}>
      <ServicesPage id={id} />
    </Suspense>
  );
}
