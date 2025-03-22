'use client';
import { ServiceProps } from '@/types'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
const ServiceCard = ({service, index}:{service:ServiceProps; index:number}) => {
  return (
    <motion.div
    key={service.id}
    initial={{
      opacity: 0,
      y:  150 ,
      scale: "90%",
    }}
    whileInView={{ opacity: 1, y: 0, scale: "100%" }}
    transition={{ delay: index * 0.2, duration: 0.9 }}
  >
    <div className="flex flex-col justify-between h-full rounded-2xl bg-gray-100 shadow-xl m-3 transform transition duration-500 hover:scale-110">
      <Link href={`/services/${service.id}`} className="relative cursor-pointer h-4/5">

          <div className="absolute w-full rounded-t-2xl rounded-b-lg h-full bg-primary-color2 opacity-0 hover:opacity-30" />
          <Image
            src={`https://main.hivetech.space/storage/${service.image}`}
            alt={`image${service.id}`}
            width={400}
            height={300}
            className="rounded-t-2xl rounded-b-[5px] object-fill bg-cover w-full h-full"
          />
      </Link>
      <div className="py-7 text-center mx-2">
        <h2 className="text-primary-color2 text-[16px] sm:text-lg font-medium">
          {service.title}
        </h2>
      </div>
    </div>
  </motion.div>
  )
}

export default ServiceCard