import culture1 from '@/assets/images/culture/culture1.jpg'
import culture2 from '@/assets/images/culture/culture2.jpg'
import culture3 from '@/assets/images/culture/culture3.jpg'
import culture4 from '@/assets/images/culture/culture4.jpg'
import Image from 'next/image'

// const cultures = [
//     {
//       id: 1,
//       title: 'A Guide to Exploring Colonial New York City',
//       href: '#',
//       date: '3503 S Harbor Blvd, Santa Ana, California',
//       imageUrl: culture1,    
//     },
//     {
//       id: 2,
//       title: 'Should Travel Be Inexpensive?',
//       href: '#',
//       date: '3503 S Harbor Blvd, Santa Ana, California',
//       imageUrl: culture2,    
//     },
//     {
//       id: 3,
//       title: 'Where to Stay in Dubrovnik: The Best Neighborhoods for Your Visit',
//       href: '#',
//       date: '3503 S Harbor Blvd, Santa Ana, California',
//       imageUrl: culture3,    
//     },
//     {
//       id: 4,
//       title: 'The 4 Best Tour Companies in Peru',
//       href: '#',
//       date: '3503 S Harbor Blvd, Santa Ana, California',
//       imageUrl: culture4,   
//     },
// ]
function formatDate() {
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const date = new Date();
    return date.toLocaleDateString(undefined, options);
}
export default function Experience() {
    const formattedDate = formatDate();
  return (
    <div className="bg-white "> 
      <main className="isolate">
        <div className="relative isolate -z-10">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 xs:pb-36 pb-20 pt-20 md:pt-56 lg:px-8 lg:pt-20">
              <div className="sm:block md:flex mx-auto max-w-2xl md:gap-x-2  gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full lg:shrink-0 xl:w-45 md:pt-0 xl:pt-12">
                  <h2 className="mt-24 xs:text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 xs:mt-4">
                    Experience the culture and nature throughout California
                  </h2>
                  <p className="relative mt-6 md:text-base text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Get to know the rest of the countryside and find out new places to visit using our blog where we share news,
                    thoughts, and opinions from all across California.
                  </p>
                  <button
                    type="button"
                    className="rounded-full mt-8 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Read more
                  </button>
                </div>     
                           
                <div className="mt-14 block justify-end gap-4 xs:mt-8 md:-mt-40 xs:justify-start md:pl-0 lg:mt-0 lg:pl-0 ">
                    <div className='flex md:gap-x-2 gap-x-4 h-52 lg:h-48'>
                        <div className='relative top-20'>
                            <Image
                                src={culture1}
                                alt=""
                                className="xs:w-140 md:w-25 xl:w-56 h-44 rounded-xl bg-gray-900/5 object-cover shadow-lg "
                            />
                            <div className='relative  md:h-16 h-20 md:-mt-16 -mt-20 bg-gradient-to-t from-gardien-color rounded-xl lg:w-56'>
                                <h3 className='xs:ml-2 ml-4 text-white font-semibold xs:text-xs text-sm'>A Guide to Exploring Colonial New York City</h3>
                                <span className='xs:ml-2 sm:ml-4 text-white text-sm font-normal'>{formattedDate}</span>
                            </div>
                        </div>
                        <div>
                            <Image
                                src={culture2}
                                alt=""
                                className="md:w-32 xl:w-48 h-64 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                            />
                            <div className='relative md:w-32 xs:h-28 sm:h-24 md:h-20 h-20 xs:-mt-28 sm:-mt-24 md:-mt-20 -mt-20 bg-gradient-to-t from-gardien-color rounded-xl lg:w-48'>
                                <h3 className='xs:ml-2 ml-4 text-white font-semibold xs:text-xs text-sm'>A Guide to Exploring Colonial New York City</h3>
                                <span className='xs:ml-2 sm:ml-4 text-white text-sm font-normal'>{formattedDate}</span>
                            </div>
                        </div>
                    </div>
                <div className='flex md:gap-x-2 gap-x-4 relative xs:top-16 xl:top-20'>
                    <div>
                        <Image
                            src={culture3}
                            alt=""
                            className="md:w-32 xl:w-48 h-64 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className='relative md:w-32 xs:h-24 md:h-20 h-20 xs:-mt-24 md:-mt-20 -mt-20 bg-gradient-to-t from-gardien-color rounded-xl lg:w-48'>
                            <h3 className='xs:ml-2 ml-4 text-white font-semibold xs:text-xs text-sm'>A Guide to Exploring Colonial New York City</h3>
                            <span className='xs:ml-2 ml-4 text-white text-sm font-normal'>{formattedDate}</span>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={culture4}
                            alt=""
                            className="xs:w-140 md:w-25 xl:w-56 h-44 rounded-xl bg-gray-900/5 object-cover shadow-lg"
                        />
                        <div className='relative md:h-16 h-20 md:-mt-16 -mt-20 bg-gradient-to-t from-gardien-color rounded-xl lg:w-56'>
                            <h3 className='xs:ml-2 ml-4 text-white font-semibold xs:text-xs text-sm'>A Guide to Exploring Colonial New York City</h3>
                            <span className='xs:ml-2 ml-4 text-white text-sm font-normal'>{formattedDate}</span>
                        </div>
                    </div>
                    
                </div>
       
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
     
    </div>
  )
}
