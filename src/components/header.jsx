import {
    SearchIcon,
    MenuIcon,
    HeartIcon,
    LocationMarkerIcon,
    UserIcon 
  } from "@heroicons/react/outline";
export default function Header(){
    return(
        <div className="flex flex-col w-full h-[13vh] border-red-600 ">
        <div className="flex justify-between items-center h-[35%] md:h-[60%] text-[#1E2022] w-full border-green-500">
            <span className="text-red-600 font-bold ml-5 md:ml-8">BookUsNow</span>
            <div className="flex gap-2 ">
                <div className="hidden md:flex cursor-pointer justify-center items-center text-white px-2 py-1 rounded-md gap-2 bg-[#1E2022]">
                    <MenuIcon className="h-[18px] w-[18px] text-black-500"/>
                    <span>Categories</span>
                </div>
                <div className="relative border rounded-sm hidden md:flex item-center justify-start w-[380px]">
                    <input type="text" placeholder="DJI phantom" className="px-2 " />
                    <SearchIcon className=" absolute right-1 top-2 h-[16px] w-[16px] text-[#989090]"/>
                </div>
            </div>
            <div className="flex items-center justify-center mx-2 gap-3">
                <SearchIcon className="inline md:hidden  h-[18px] w-[18px] text-[#989090]"/>
                <div className="flex items-center justify-center gap-1">
                    <HeartIcon className="h-[18px] w-[18px] text-[#989090]"/>
                    <span className="  hidden md:flex">Favorites</span> 
                </div>
                <UserIcon className="inline md:hidden h-[18px] w-[18px] text-[#989090]"/>
                <button className=" border hidden md:flex px-3 py-1 rounded-sm">Sign In</button>
            </div>
            
        </div>
        <div className="flex flex-col gap-2 md:gap-0 md:flex-row  justify-start md:justify-center item-center w-full  h-[65%]  md:h-[40%] text-[0.8rem] text-[#989090]">
            <div className="flex w-full md:w-[30vw]  items-center justify-start pl-5 md:pl-8 ">
                <LocationMarkerIcon className="h-[16px] w-[16px] text-[#989090]"/>
                <p>Mumbai India <span>&#62;</span></p>
            </div>
            <div className="flex gap-5 md:gap-7 w-full  md:w-[70vw] items-center justify-start  overflow-x-scroll no-scrollbar  pl-5 md:pl-0">
                <span className="text-nowrap">Live shows</span>
                <span>Streams</span>
                <span>Movies</span>
                <span>Play</span>
                <span>Events</span>
                <span>Sports</span>
                <span>Activities</span>
            </div>
        </div>
        </div>
    )
}