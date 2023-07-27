import Image from "next/image";
import HeroComponents from "@/assets/images/hero/header-hero.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faCloudSun } from '@fortawesome/free-solid-svg-icons'
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faCampground } from '@fortawesome/free-solid-svg-icons'
import { faHeadphones } from '@fortawesome/free-solid-svg-icons'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faWorm } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {

    return (
      <div className="relative bg-section">
        <div className="mx-auto md:flex max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="px-6 pb-24 sm:pt-8 md:pt-28 sm:pb-16  lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-24 xl:col-span-6">
            <div className="mx-auto xl:max-w-md max-w-2xl  lg:mx-0">        
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Take a trip to California
                </p>
              <h1 className="mt-24 text-5xl sm:text-2xl md:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 sm:mt-4 ">
                Discover and enjoy new places and experiences
              </h1>
            
              <div className="mt-10 flex items-center gap-x-6">
                <button
                    type="button"
                    className="rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-primary-color shadow-sm ring-2 ring-inset ring-primary-color"
                >
                    Explore destinations
                </button>             
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
            <Image
              className="aspect-[3/2] md:aspect-[2/3] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
              src={HeroComponents}
              alt="Hero header"
            />
          </div>
          <div className="bg-white md:absolute sm:relative sm:bottom-48 md:bottom-8 sm:block md:flex sm:w-90 md:w-full xl:w-94 xxl:w-85 2xl:w-63 3xl:w-47 rounded-lg sm:left-5 md:left-auto">
            <div className="sm:p-2 p-4 sm:w-full w-1/4 md:border-r-2">
                <div className="flex sm:p-2">
                    <FontAwesomeIcon icon={faCloudSun} style={{color: "#2639e2",}} />
                    <p className="px-4 font-xs font-semibold">seasonal</p>
                </div>
                <div className="flex sm:p-2">
                    <FontAwesomeIcon icon={faMapLocationDot} style={{color: "#2639e2",}} />
                    <p className="px-4 font-xs font-semibold">Adventure</p>
                </div>                
            </div>
            <div className="sm:p-2 md:p-4 sm:w-full w-1/4 md:border-r-2">
                <div className="flex sm:p-2">           
                    <FontAwesomeIcon icon={faCampground} style={{color: "#2639e2",}} />
                    <p className="px-4">Cruises</p>
                </div>
                <div className="flex sm:p-2">
                    <FontAwesomeIcon icon={faHeadphones} style={{color: "#2639e2",}} />
                    <p className="px-4">Shows </p>
                </div>            
                
                
            </div>
            <div className="sm:p-2 md:p-4 sm:w-full w-1/4 md:border-r-2">
            <div className="flex sm:p-2">            
                <FontAwesomeIcon icon={faBurger} style={{color: "#2639e2",}} />
                <p className="px-4">Food & Drink</p>
            </div>            
            <div className="flex sm:p-2">
                <FontAwesomeIcon icon={faWorm} style={{color: "#2639e2",}} />
                <p className="px-4">Tours & Trips</p>
            </div>
                
                
            </div>
            <div className="sm:p-2 md:p-4 sm:w-full w-1/4">
            
            <div className="flex sm:p-2">
                <FontAwesomeIcon icon={faCalendarDays} style={{color: "#2639e2",}} />
                <p className="px-4">History</p>
            </div>
            <div className="flex sm:p-2">
                <FontAwesomeIcon icon={faComments} style={{color: "#2639e2",}} />
                <p className="px-4">Workshops</p>
            </div>            
            </div>
          </div>
        </div>       
      </div>
    )
  }
  