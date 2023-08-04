import Image from "next/image";
import cruise_1 from "@/assets/images/trip/cruise_1.jpg";
import cruise_2 from "@/assets/images/trip/cruise_2.jpg";
import cruise_3 from "@/assets/images/trip/cruise_3.jpg";
import cruise_4 from "@/assets/images/trip/cruise_4.jpg";
import newsletter from "@/assets/images/trip/newsletter.png";
import concert_1 from "@/assets/images/trip/concert_1.jpg";
import concert_2 from "@/assets/images/trip/concert_2.jpg";
import concert_3 from "@/assets/images/trip/concert_3.jpg";
import concert_4 from "@/assets/images/trip/concert_4.jpg";
import concert_5 from "@/assets/images/trip/concert_5.jpg";
import adventure_1 from "@/assets/images/trip/adventure_1.jpg";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleLeft,
  faMobileScreen,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import { BsChevronCompact } from "react-icons/bs";
const posts = [
  {
    id: 1,
    title: "Spa On The Water Cruises",
    href: "#",
    imageUrl: cruise_1,
  },
  {
    id: 2,
    title: "City Cruises Sacramento",
    href: "#",
    imageUrl: cruise_2,
  },
  {
    id: 3,
    title: "The Cruise Experts Agency",
    href: "#",
    imageUrl: cruise_3,
  },
  {
    id: 4,
    title: "City Cruises Berkeley",
    href: "#",
    imageUrl: cruise_4,
  },
];
const concerts = [
  {
    id: 1,
    title: "Rock City By Night, California",
    href: "#",
    description: "3503 S Harbor Blvd, Santa Ana, California",
    imageUrl: concert_1,
    price: "60-150$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 2,
    title: "Stand Up Comedy Night",
    href: "#",
    description: "3790, CA 90010, Wilshire Blvd, California",
    imageUrl: concert_2,
    price: "30-50$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 3,
    title: "Kings of Pop",
    href: "#",
    description: "5060 Montclair Plaza, Montclair, California",
    imageUrl: concert_3,
    price: "50-150$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 4,
    title: "Punk Rock Night",
    href: "#",
    description: "1822 Sunset Blvd, Los Angeles, California",
    imageUrl: concert_4,
    price: "35-150$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 5,
    title: "R&B Night",
    href: "#",
    description: "12062 California St, Yucaipa, California",
    imageUrl: concert_5,
    price: "35-100$",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 6,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 7,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 8,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 9,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 10,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 11,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 12,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
  {
    id: 13,
    title: "Van Rides Tour",
    href: "#",
    description: "Silver Valley Unified School , California",
    imageUrl: adventure_1,
    price: "Free",
    category: { title: "Booking", href: "#" },
  },
];

export default function Trip() {
  const itemsPerPage = 6;
  const [post, setPost] = useState(itemsPerPage);

  const handleLoadMore = () => {
    setPost((prevVisibleItems) => prevVisibleItems + 3);
  };

  const handleClick = () => {
    setPost((prevVisibleItems) => prevVisibleItems + 3);
  };

  const displayedData = concerts.slice(0, post);
  return (
    <div className="bg-section py-20 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Plan your next trip
          </h2>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr gap-4 xs:mt-20 lg:mx-0 lg:max-w-none xs:grid-cols-2 md:grid-cols-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 md:px-8 xs:px-4 pb-8 xs:pt-28 sm:pt-44 md:pt-36 xl:pt-60 xxl:pt-80"
            >
              <Image
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
              <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />

              <h3 className="relative md:w-32 md:right-4 xs:text-xs md:text-sm mt-3 text-base font-semibold leading-6 text-white">
                <a href={post.href}>
                  <span className="inset-0" />
                  {post.title}
                </a>
              </h3>
            </article>
          ))}
        </div>

        <div className="justify-content justify-between relative md:bottom-40 xl:bottom-52 xxl:bottom-60 2xl:bottom-52 flex xs:py-4">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="w-8 h-8 md:-ml-4 xl:-ml-8 xxl:-ml-12 2xl:-ml-10 border rounded-full text-arrow-color"
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className="w-8 h-8 md:-mr-4 xl:-mr-8 xxl:-mr-12 2xl:-mr-10 border rounded-full text-arrow-color"
          />
        </div>

        <div>
          <a href="#">
            <Image src={newsletter} alt="newsLetter" />
          </a>
        </div>

        <div className="mt-16 border rounded xs:p-4 sm:p-12 pr-2 sm:block md:flex divide-x-2">
          <h3 className="xs:text-lg xs:font-bold xs:pb-4 md:pb-0 md:w-95 xl:w-50 2xl:text-xl xxl:font-extrabold xxl:w-30 flex items-center">
            Discover a beautiful new place in California
          </h3>
          <p className="md:text-base xl:text-lg font-medium pl-6 text-gray-900">
            Experience California's sun-soaked charm! Explore breathtaking
            coastlines, world-class wineries, vibrant cities, and picturesque
            landscapes. Unforgettable memories await in the Golden State.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl md:gap-x-4 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {displayedData.map((concert) => (
            <div className="carosel border-solid border rounded-lg flex flex-col items-start justify-between" key={concert.id}>
              <div className="relative w-full">
                <Image
                  src={concert.imageUrl}
                  alt=""
                  className="aspect-[16/9] w-full rounded-t-lg bg-gray-100 object-fill h-56 sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-t-lg" />
              </div>
              <div className="sm:w-96 md:w-43 lg:w-29 xxl:w-96">
                <div className="group px-8 relative">
                  <h3 className="mt-3 text-base font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={concert.href}>
                      <span className="absolute inset-0" />
                      {concert.title}
                    </a>
                  </h3>
                </div>
                <div className="pl-8">
                  <p className="mt-5 line-clamp-3 text-xs font-semibold leading-6 text-gray-800">
                    {concert.description}
                  </p>
                </div>
                <div className="border-b mt-8" />
                <a
                  href={concert.category.href}
                  className="relative z-10 xs:left-48 sm:left-72 md:left-60 lg:left-52 xxl:left-72 bottom-4 text-xs rounded-full bg-primary-color px-3 py-1.5 font-medium text-white hover:bg-gray-100"
                >
                  {concert.category.title}
                </a>
                <div className="flex px-8 pt-0 pb-6 justify-between">
                  <div className="flex">
                    <span className="mr-2">
                      <FontAwesomeIcon icon={faMobileScreen} />
                    </span>
                    <p>Get on call</p>
                  </div>
                  <div>
                    <p className="font-bold">{concert.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-center flex">
            {concerts.length > post && (
              <button
                className="mt-4 rounded-full bg-white px-3.5 py-2 text-sm font-semibold text-primary-color shadow-sm ring-1 ring-inset ring-primary-color hover:bg-gray-50"
                onClick={handleClick}
              >
                Load More
                <FontAwesomeIcon icon={faAngleDown} className="pl-2" />
              </button>
            )}
          </div>
      </div>
    </div>
  );
}
