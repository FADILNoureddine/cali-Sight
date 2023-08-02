import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faMobileScreen,
  faMapPin,
  faEnvelope,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import cruise from "@/assets/images/Featured/cruise_2-696x423.jpg";
import balloon from "@/assets/images/Featured/adventure_2-696x423.jpg";
import trip from "@/assets/images/Featured/trip_5-696x423.jpg";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "River City Queen",
    href: "#",
    description: "1110 Front St, Sacramento, California.",
    imageUrl: cruise,
    price: "250$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 2,
    title: "Cielo Balloons Temecula",
    href: "#",
    description: "39730 Calle Contento, Temecula, California.",
    imageUrl: balloon,
    price: "150$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 3,
    title: "Trail Park Beach",
    href: "#",
    description: "Dana Point, California ,Dana Point, California.",
    imageUrl: trip,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 4,
    title: "Trail Park Beach",
    href: "#",
    description: "Dana Point, California ,Dana Point, California.",
    imageUrl: trip,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 5,
    title: "Trail Park Beach",
    href: "#",
    description: "Dana Point, California ,Dana Point, California.",
    imageUrl: trip,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 6,
    title: "Trail Park Beach",
    href: "#",
    description: "Dana Point, California ,Dana Point, California.",
    imageUrl: trip,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
];

export default function Featured() {
  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex((index) => (index === 0 ? posts.length - 1 : index - 1));

  const next = () =>
    setIndex((index) => (index === posts.length - 1 ? 0 : index + 1));

  return (
    <div className="relative sm:z-10 xs:-mt-8 sm:-mt-24 md:mt-0 bg-white py-20 sm:py-20">
      <div className="mx-auto max-w-[79rem] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured attractions
          </h2>
        </div>
        <div
          className="mx-auto mt-16 flex transition-transform ease-out duration-500  overflow-x-auto scrollbar-hidden max-w-6xl gap-x-8 md:gap-x-4 gap-y-4 lg:mx-0 lg:max-w-none "
        
          style={{ transform: `translateX(-${index * 30}%)` }}
        >
          {posts.map((post) => (
            <article
              key={post.id}
              className="carosel border-solid border rounded-lg flex flex-col items-start justify-between"
            >
              <div className="relative w-full">
                <Image
                  src={post.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-fill xs:h-48 md:h-32 lg:h-56 sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-t-lg" />
              </div>
              <div className="xs:w-86 sm:w-88 md:w-27 lg:w-19 xxl:w-96">
                <div className="group px-8 md:px-4 relative">
                  <h3 className="mt-3 text-lg md:text-sm font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
                <div className="border-b mt-4"></div>
                <a
                  href={post.category.href}
                  className="relative z-10 xs:left-48 sm:left-72 md:left-32 lg:left-52 xxl:left-72 bottom-4 text-xs rounded-full bg-primary-color px-3 py-1.5 font-medium text-white hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
                <div className="flex px-4 pt-0 pb-6 justify-between">
                  <div className="flex">
                    <span className="mr-2">
                      <FontAwesomeIcon icon={faMobileScreen} />
                    </span>
                    <p>Get on call</p>
                  </div>
                  <div>
                    <p className="font-bold">{post.price}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="justify-content: center justify-center flex mt-8">
        <FiChevronLeft
          onClick={prev}
          className="w-8 h-8 border rounded-full mr-2.5 text-arrow-color hover:bg-primary-color hover:text-white"
        />
            
        
          <FiChevronRight
            onClick={next}            
            className="w-8 h-8 border rounded-full text-arrow-color hover:bg-primary-color hover:text-white"
          />
        </div>

        <div className="flex pt-20">
          <div className="sm:block md:flex">
            <div className="flex">
              <div className="xs:mr-8 md:mr-4 flex-shrink-0 flex items-center">
                <FontAwesomeIcon
                  icon={faMapPin}
                  className="h-10 w-10 p-4 rounded-full bg-section text-icon-color"
                />
              </div>
              <div className="pr-2">
                <h4 className="md:text-base md:font-semibold text-lg font-bold">
                  Get invested
                </h4>
                <p className="mt-1 md:text-xs md:font-normal text-sm text-gray-400">
                  With a simple subscription you get to post your own listing
                  each month hereforth.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="xs:mr-8 md:mr-4 flex-shrink-0 flex items-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-10 w-10 p-4 rounded-full bg-section text-icon-color"
                />
              </div>
              <div className="pr-2">
                <h4 className="md:text-base md:font-semibold text-lg font-bold">
                  Easy booking
                </h4>
                <p className="mt-1 md:text-xs md:font-normal text-sm text-gray-400">
                  You can contact the staff of the destination directly through
                  email and get a prompt reply.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="xs:mr-8 md:mr-4 flex-shrink-0 flex items-center">
                <FontAwesomeIcon
                  icon={faCheck}
                  className="h-10 w-10 p-4 rounded-full bg-section text-icon-color"
                />
              </div>
              <div className="pr-2">
                <h4 className="md:text-base md:font-semibold text-lg font-bold">
                  Contact Us
                </h4>
                <p className="mt-1  md:text-xs md:font-normal text-sm text-gray-400">
                  We're ready to help you find the exact destination you have in
                  mind when you start searching.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
