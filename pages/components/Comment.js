import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";

import { HeartIcon as HeartIconFilled } from "@heroicons/react/24/solid";

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import Moment from "react-moment";
import { useRecoilState } from "recoil";
import { db } from "../../firebase";
import Menu from "@mui/material/Menu";
import { modalState, postIdState } from "../atoms/modalAtom";
import { Button, MenuItem } from "@mui/material";

function Comment({ comment, id }) {
  const { data: session } = useSession();
  const [likes, setLikes] = useState([]);
  const [liked, setLiked] = useState(false);
  const [response, setResponse] = useState([]);
  const [isOpen, setIsOpen] = useRecoilState(modalState);
  const router = useRouter();
  const postId = window.location.pathname.replace("/", "");
  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(
    () =>
      onSnapshot(
        collection(db, "posts", postId, "comments", id, "likes"),
        (snapshot) => setLikes(snapshot.docs)
      ),
    [db, id]
  );

  useEffect(
    () =>
      setLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  );

  const likeComment = async () => {
    if (liked) {
      await deleteDoc(
        doc(db, "posts", postId, "comments", id, "likes", session.user.uid)
      );
    } else {
      await setDoc(
        doc(db, "posts", postId, "comments", id, "likes", session.user.uid),
        {
          username: session.user.name,
        }
      );
    }
  };

  return (
    <div
      className="p-3 flex cursor-pointer border-b border-gray-700"
      onClick={() => router.push(`/${postId}`)}
    >
      <img
        src={comment?.userImg}
        alt=""
        className="h-11 w-11 rounded-full mr-4"
      />
      <div className="flex flex-col space-y-2 w-full">
        <div className="flex justify-between">
          <div className="text-[#6e767d]">
            <div className="inline-block group">
              <h4 className="font-bold text-[#d9d9d9] text-[15px] sm:text-base inline-block group-hover:underline">
                {comment?.username}
              </h4>
              <span className="ml-1.5 text-sm sm:text-[15px]">
                @{comment?.tag}{" "}
              </span>
            </div>{" "}
            ·{" "}
            <span className="hover:underline text-sm sm:text-[15px]">
              <Moment fromNow>{comment?.timestamp?.toDate()}</Moment>
            </span>
            <p className="text-[#d9d9d9] mt-0.5 max-w-lg overflow-scroll text-[15px] sm:text-base scrollbar-hide">
              {comment?.comment}
            </p>
            <img
              src={comment?.image}
              alt=""
              className="rounded-2xl max-h-[700px] object-cover mr-2"
            />
          </div>
          <div className="icon group flex-shrink-0">
            <div className="-ml-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deleteDoc(doc(db, "posts", postId, "comments", id));
                }}
              >
                <TrashIcon className="h-5 text-[#6e767d] group-hover:text-red-600" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-[#6e767d] flex justify-between w-10/12">
          <div
            className="flex items-center space-x-1 group"
            onClick={(e) => {
              e.stopPropagation();
              setPostId(id);
              setIsOpen(true);
            }}
          >
            <div className="icon group-hover:bg-[#1d9bf0] group-hover:bg-opacity-10">
              <ChatBubbleOvalLeftEllipsisIcon className="h-5 group-hover:text-[#1d9bf0]" />
            </div>
            {response.length > 0 && (
              <span className="group-hover:text-[#1d9bf0] text-sm">
                {response.length}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-1 group">
            <div
              className="flex items-center space-x-1 group"
              onClick={(e) => {
                e.stopPropagation();
                likeComment();
              }}
            >
              <div className="icon group-hover:bg-pink-600/10">
                {liked ? (
                  <HeartIconFilled className="h-5 text-pink-600" />
                ) : (
                  <HeartIcon className="h-5 group-hover:text-pink-600" />
                )}
              </div>
              {likes.length > 0 && (
                <span
                  className={`group-hover:text-pink-600 text-sm ${
                    liked && "text-pink-600"
                  }`}
                >
                  {likes.length}
                </span>
              )}
            </div>
            <span className="group-hover:text-pink-600 text-sm"></span>
          </div>

          <div className="icon group">
            <ShareIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
          <div className="icon group">
            <ChartBarIcon className="h-5 group-hover:text-[#1d9bf0]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
