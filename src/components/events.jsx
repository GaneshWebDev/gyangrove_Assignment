import { ChevronRightIcon,LocationMarkerIcon } from '@heroicons/react/outline';
export default function Events({events}){
    return(
        <div className='flex flex-col items-center justify-center w-full  text-[0.8rem] md:text-[0.9rem] text-black mt-[12vh] md:mt-[25vh] '>
             <header className='flex items-center justify-between w-[85vw] md:w-full mx-5  '>
                <div className='flex items-center justify-center'>
                    <span className='ml-0 md:ml-24'>Upcoming events</span>
                    <ChevronRightIcon className="h-[18px] w-[18px] text-black-500"/>
                </div>
                <span className='ml-0 md:mr-24 '>See all</span>
            </header>
            <div className='flex items-center justify-center w-[85vw] mt-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-10 '>
                    {events.map((event)=>{
                        let distance= Math.floor(event.distanceKm);
                        return(<div className='flex flex-col items-center justify-between rounded-lg border'>
                        <img src='https://img.freepik.com/free-photo/fresh-water-texture-background-transparent-liquid_53876-142911.jpg' className='w-[96%] h-[75%] m-2 border rounded-lg !important'/>
                        <div className='flex flex-col items-center justify-center h-[25%] w-full px-2'>
                        <div className='flex items-center justify-between px-1 w-[100%]  font-bold'>
                                    <span >After note nearly</span>
                                    <span></span>
                         </div>
                                <div  className='flex text-[0.7rem] items-center justify-between px-1  w-[100%]  text-[#989090]'>
                                    <div className='flex items-center gap-1'>
                                        <LocationMarkerIcon className="h-[9px] w-[9px] text-[0.5rem"/>
                                        <span>{event.cityName}</span>
                                    </div>
                                    <span>{event.weather} | {distance}</span>
                                </div>
                                </div>
                    </div>)})}

                </div>

            </div>
        </div>
    )
}