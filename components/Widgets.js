import {
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Trending from "./Trending";

function Widgets({ trendingResults, followResults }) {
  return (
    <div className="hidden lg:inline ml-8 xl:w-[450px] py-1 space-y-5">
      <div className="sticky top-0 py-1.5 bg-black z-50 w-11/12 xl:w-9/12">
        <div className="flex items-center bg-[#202327] p-3 rounded-full relative">
          <MagnifyingGlassIcon className="text-gray-500 h-5 z-50" />
          <input
            type="text"
            className="bg-transparent placeholder-gray-500 outline-none text-[#d9d9d9] absolute inset-0 pl-11 border border-transparent w-full focus:border-[#1d9bf0] rounded-full focus:bg-black focus:shadow-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>

      <div className="text-[#d9d9d9] space-y-6 bg-[#15181c] pt-2 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">What's happening</h4>

        <div className="flex justify-between px-4">
          <div className="space-y-1">
            <h3 className="text-sm text-gray-300/50">NBA · Last night</h3>
            <p className="font-bold">Kings at Jazz</p>
          </div>
          <img src="nba.png" className="rounded-xl w-12 h-12 object-cover" />
        </div>

        <div className="flex justify-between px-4">
          <div className="space-y-1">
            <h3 className="text-sm text-gray-300/50">Trending in Spain</h3>
            <p className="font-bold">#MocionDeCensura</p>
            <p className="text-sm text-gray-300/50">65.3K Tweets</p>
          </div>
          <EllipsisHorizontalIcon className="h-5 hidden xl:inline ml-10" />
        </div>

        <div className="flex justify-between px-4">
          <div>
            <h3 className="text-sm text-gray-300/50">Politics - trending</h3>
            <p className="font-bold">Presidente</p>
            <p className="text-sm text-gray-300/50">752K Tweets</p>
          </div>
          <EllipsisHorizontalIcon className="h-5 hidden xl:inline ml-10" />
        </div>

        <button className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-3 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>

      <div className="text-[#d9d9d9] space-y-3 bg-[#15181c] pt-4 rounded-xl w-11/12 xl:w-9/12">
        <h4 className="font-bold text-xl px-4">Who to follow</h4>
        <div className="flex px-4">
          <img
            src="elonmusk.jpg"
            width={45}
            height={45}
            className="rounded-full"
          />
          <div className="ml-4 leading-5 group">
            <h4 className="font-bold group-hover:underline">Elon Musk</h4>
            <h5 className="text-gray-500 text-[15px]">@elonmusk</h5>
          </div>
          <button className="text-black rounded-full bg-white px-4 ml-16 mb-2 font-bold">
            Follow
          </button>
        </div>
        <div className="flex px-4">
          <img
            src="spacex.jpg"
            width={45}
            height={45}
            className="rounded-full"
          />
          <div className="ml-4 leading-5 group">
            <h4 className="font-bold group-hover:underline">SpaceX</h4>
            <h5 className="text-gray-500 text-[15px]">@spacex</h5>
          </div>
          <button className="text-black rounded-full bg-white px-4 ml-[83px] mb-2 font-bold">
            Follow
          </button>
        </div>
        <div className="flex px-4">
          <img src="nasa.jpg" width={45} height={45} className="rounded-full" />
          <div className="ml-4 leading-5 group">
            <h4 className="font-bold group-hover:underline">Nasa</h4>
            <h5 className="text-gray-500 text-[15px]">@nasa</h5>
          </div>
          <button className="text-black rounded-full bg-white px-4 ml-24 mb-2 font-bold">
            Follow
          </button>
        </div>
        <button className="hover:bg-white hover:bg-opacity-[0.03] py-3 px-4 cursor-pointer transition duration-200 ease-out flex items-center justify-between w-full text-[#1d9bf0] font-light">
          Show more
        </button>
      </div>
    </div>
  );
}

export default Widgets;
