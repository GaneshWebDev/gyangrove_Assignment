import { ChevronRightIcon,LocationMarkerIcon } from '@heroicons/react/outline';
import Rectangle1 from '../../public/Rectangle 2.svg';
import Rectangle2 from '../../public/Rectangle 2.svg';
import Rectangle3 from '../../public/Rectangle 4-1.svg';
import Rectangle4 from '../../public/Rectangle 4.svg';
import Rectangle5 from '../../public/Rectangle 5-1.svg';
import Rectangle6 from '../../public/Rectangle 5-2.svg';
import Rectangle7 from '../../public/Rectangle 5.svg';
import Rectangle8 from '../../public/Rectangle 5.svg';
export default function Shows({shows}){
    const images=[ Rectangle1, Rectangle2, Rectangle3, Rectangle4, Rectangle5, Rectangle6, Rectangle7, Rectangle8]
    return(
        <div className='absolute bottom-[-45px] md:bottom-[-150px]  w-full  text-[0.8rem] md:text-[0.9rem] '>
            <header className='flex items-center justify-between mx-5'>
                <div className='flex items-center justify-center'>
                    <span className='ml-0 md:ml-24'>Recommended shows</span>
                    <ChevronRightIcon className="h-[18px] w-[18px] text-black-500"/>
                </div>
                <span className='ml-0 md:mr-24'>See all</span>
            </header>
            <div class="flex flex-col  m-auto p-auto mt-5">
                <div class="flex  pb-10 ">
                    <div class="flex flex-nowrap ml-10 md:ml-24 overflow-x-scroll no-scrollbar">
                    {shows.map((show,index)=>{
                        let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        let dateString =show.date;
                        let date = new Date(dateString);
                        let monthIndex = date.getMonth(); 
                        let year = date.getFullYear(); 
                        let day = date.getDate();
                        let monthName = monthNames[monthIndex];
                        let distance= Math.floor(show.distanceKm);
                        return(<div className="inline-block px-3 ">
                        <div
                            className="w-48 h-64 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out flex flex-col justify-end p-1"
                            style={{ backgroundImage: `url(${images[index]})`}}>
                            <div className='flex items-center justify-between px-1'>
                                <span>Make Agree</span>
                                <span className='text-[0.6rem]'>{monthName} {day}, {year}</span>
                            </div>
                            <div  className='flex text-[0.7rem] items-center justify-between px-1 '>
                                <div className='flex items-center gap-1'>
                                    <LocationMarkerIcon className="h-[9px] w-[9px] text-[0.5rem] text-white"/>
                                    <span>{show.cityName}</span>
                                </div>
                                <span>{show.weather} | {distance}</span>
                            </div>
                        </div>
                    </div>)})}
                    </div>
                </div>
            </div>
        </div>
    )
}