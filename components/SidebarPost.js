import React from "react";
import Image from "next/legacy/image";
import SidebarLink from "./SidebarLink";
import {
  HomeIcon,
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  UserIcon,
  ClipboardIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atoms/modalAtom";
import { usePathname } from "next/navigation";

function Sidebar() {
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const [postId, setPostId] = useRecoilState(postIdState);
  const { data: session } = useSession();
  const router = useRouter();
  const getId = usePathname();
  const id = getId.substring(getId.lastIndexOf("/") + 1);

  const tagName = session.user.name.split(" ").join("").toLocaleLowerCase();

  return (
    <div className="hidden sm:flex flex-col items-center xl:items-start xl:w-[340px] p-2 fixed h-full">
      <div className="flex items-center justify-center w-14 h-14 hoverAnimation p-0 xl:ml-24">
        <Image
          src="/logo.jpg"
          width={30}
          height={30}
          onClick={() => router.push("./")}
        />
      </div>
      <div className="space-y-2.5 mt-4 mb-2.5 xl:ml-24">
        <SidebarLink
          text="Home"
          Icon={HomeIcon}
          active
          onClick={() => router.push("/")}
        />
        <SidebarLink text="Explore" Icon={HashtagIcon} />
        <SidebarLink text="Notifications" Icon={BellIcon} />
        <SidebarLink text="Messages" Icon={InboxIcon} />
        <SidebarLink text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarLink text="Lists" Icon={ClipboardIcon} />
        <SidebarLink text="Profile" Icon={UserIcon} />
        <SidebarLink text="More" Icon={EllipsisHorizontalIcon} />
      </div>
      <button
        className="hidden xl:inline ml-auto bg-[#1d9bf0] text-white rounded-full w-56 h-[52px] text-lg font-bold shadow-md hover:bg-[#1a8cd8]"
        onClick={(e) => {
          e.stopPropagation();
          setPostId(id);
          setIsOpen(true);
          console.log(setIsOpen(true), "isOpen");
        }}
      >
        Tweet
      </button>
      <div
        className="text-[#d9d9d9] flex items-center justify-center mt-auto hoverAnimation xl:ml-auto xl:-mr-5"
        onClick={() => {
          signOut;
        }}
      >
        <img
          src={session?.user?.image}
          className="w-10 h-10 rounded-full xl:mr-2.5"
        />
        <div className="hidden xl:inline leading-5">
          <h4 className="font-bold">{session?.user?.name}</h4>
          <p className="text-[#6e767d]">@{tagName}</p>
        </div>
        <EllipsisHorizontalIcon className="h-5 hidden xl:inline ml-10" />
      </div>
    </div>
  );
}

export default Sidebar;
