import Image from 'next/image'
import concert_1 from '@/assets/images/activite/concert_1.jpg'
import concert_2 from '@/assets/images/activite/concert_2.jpg'
import concert_3 from '@/assets/images/activite/concert_3.jpg'
import concert_4 from '@/assets/images/activite/concert_4.jpg'
import concert_5 from '@/assets/images/activite/concert_5.jpg'
import adventure_1 from '@/assets/images/activite/adventure_1.jpg'
import adventure_2 from '@/assets/images/activite/adventure_2.jpg'
import adventure_3 from '@/assets/images/activite/adventure_3.jpg'
import adventure_4 from '@/assets/images/activite/adventure_4.jpg'
import adventure_5 from '@/assets/images/activite/adventure_5.jpg'
import adventure_6 from '@/assets/images/activite/adventure_6.jpg'
import adventure_7 from '@/assets/images/activite/adventure_7.jpg'



const people = [
  {
    id: '1',
    title: 'Rock City Night',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Free Parking',
    categorie: 'Booking',
    imageUrl:concert_1,
  },
  {
    id: '2',
    title: 'Stand Up Comedy Night',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Paid Parking',
    categorie: 'Booking',
    imageUrl:concert_2,
  },
  {
    id: '3',
    title: 'Kings of Pop',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'No Parking',
    categorie: 'Booking',
    imageUrl:concert_3,
  },
  {
    id: '4',
    title: 'Punk Rock Night',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Paid Parking',
    categorie: 'Booking',
    imageUrl: concert_4,
  },
  {
    id: '5',
    title: 'R&B Night',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Paid Parking',
    categorie: 'Booking',
    imageUrl:concert_5,
  },
  {
    id: '6',
    title: 'Van Rides Tour',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Free Parking',
    categorie: 'Booking',
    imageUrl: adventure_1,
  },
  {
    id: '7',
    title: 'Cielo Balloons Temecula',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'No Parking',
    categorie: 'Booking',
    imageUrl: adventure_2,
  },
  {
    id: '8',
    title: 'California Canoe & Kayak Brooklyn Basin',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Paid Parking',
    categorie: 'Booking',
    imageUrl: adventure_3,
  },
  {
    id: '9',
    title: 'The Peak of Fremont',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Free Parking',
    categorie: 'Booking',
    imageUrl: adventure_4,
  },
  {
    id: '10',
    title: 'Salt Point State Park',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Free Parking',
    categorie: 'Booking',
    imageUrl: adventure_5,
  },
  {
    id: '11',
    title: 'River City Queen',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Paid Parking',
    categorie: 'Booking',
    imageUrl: adventure_6,
  },
  {
    id: '12',
    title: 'Spa On The Water Cruises',
    description: 'Magna nostra sed Ullamcorper vulputate est sociis...',
    price: 'Paid Parking',
    categorie: 'Booking',
    imageUrl: adventure_7,
  },
]
export default function Activite() {
  return (
    <div className="bg-section py-20">
      <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">More activities</h2>            
          </div>    
      <ul role="list" className="grid gap-6 bg-section sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xxl:grid-cols-4 mx-auto max-w-7xl px-6 pt-36 xs:pt-12 lg:px-8 lg:pt-20">
        {people.map((person) => (
          <li key={person.id} className="col-span-1 rounded-lg bg-white shadow">
            <div className=" w-full items-center justify-between px-6 pt-6">
              <div className='flex'>
                <Image className="h-12 w-12 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" />
                <div className="ml-6 flex items-center space-x-3">
                  <h3 className=" text-sm font-semibold text-gray-900">{person.title}</h3>                
                </div>
              </div>
              <div className='flex-1'>
                <p className="mt-1 p-4 font-semibold text-sm lg:text-xs text-gray-700">{person.description}</p>
              </div>
              <div className="">
                
              
              </div>
            </div>
            <div>
              <div className="-mt-px flex ">
                <div className="flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-xs font-bold text-gray-900"
                  >                  
                    {person.price}
                  </a>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href="#"
                    className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-xs font-bold text-primary-color"
                  >                 
                    Booking
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    
  )
}
