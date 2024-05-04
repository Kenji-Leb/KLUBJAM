import like from "../../../../assets/Home/icons/like.svg";
import comment from "../../../../assets/Home/icons/comment.svg";
import share from "../../../../assets/Home/icons/forward.svg";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import CommentsPopup from "./commentsPopup";
import { useEffect, useState } from "react";
import { sendRequest } from "../../../../../core/remote/request";
import { setPosts } from "../../../../../redux/postsSlice";

const Posts = () => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.post.posts);
  const user = useAppSelector((state) => state.user.user);
  const [error, setError] = useState("");
  const [openCommentsPopup, setOpenCommentsPopup] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [newcomment, setNewComment] = useState("");

  const openCommentPopup = (post: any) => {
    setSelectedPost(post);
    setOpenCommentsPopup(true);
  };

  const validateComment = () => {
    if (newcomment === "") {
      setError("Please insert a comment");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const createComment = async (post: { id: any } | undefined) => {
    if (validateComment()) {
      try {
        const postData = {
          content: newcomment,
          userId: user?.id,
        };
        const headers = {
          "Content-Type": "application/json",
        };
        const res = await sendRequest(
          "POST",
          `/comments/${post!.id}`,
          postData,
          headers
        );
        setNewComment("");
        console.log("comment created");
      } catch (error: any) {
        console.log(error.message);
      }
    }
  };

  const getPosts = async () => {
    try {
      const headers = {
        "Content-Type": "multipart/form-data",
      };
      const res = await sendRequest("GET", "/posts", "", headers);
      if ((res.status = 200)) {
        dispatch(setPosts(res.data.result));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, [posts]);

  return (
    <div className="ml-[350px] mt-[48px] mb-[120px]">
      {openCommentsPopup && (
        <CommentsPopup
          post={selectedPost}
          setOpenCommentsPopup={setOpenCommentsPopup}
        ></CommentsPopup>
      )}
      {posts.map((post, i) => (
        <div key={i} className="flex flex-col mb-[30px] ">
          <div className="flex items-center gap-[8px]">
            <img
              src={post.user.profile_picture}
              alt=""
              className="max-w-[40px]  max-h-[40px]"
            />
            <h2 className="font-medium text-[12px]">{post.user.username}</h2>
          </div>
          <div
            className="pt-[40px] pb-[40px] pr-[60px] pl-[60px] border-[1px] border-solid border-greyText
         w-[436px] mt-[12px] mb-[12px]"
          >
            <img
              src={`http://127.0.0.1:3000${post.post_picture}`}
              alt="nullpic"
            />
          </div>
          <div className="flex gap-[18px]">
            <img src={like} alt="" className="cursor-pointer" />
            <img src={comment} alt="" className="cursor-pointer" />
            <img src={share} alt="" className="cursor-pointer" />
          </div>
          <div className="mt-[20px] mb-[20px]">
            <h2 className="font-medium text-[14px]">{`${post.likes._count} likes`}</h2>
            <div className="flex gap-[8px]">
              <h2 className="font-medium text-[14px]">{post.user.username}</h2>
              <h2 className="text-[14px]">{post.caption}</h2>
            </div>
          </div>
          <div>
            <h2
              className="font-medium text-[14px] text-greyText cursor-pointer hover:text-white"
              onClick={() => openCommentPopup(post)}
            >
              {`View all ${post.comments._count} comments`}
            </h2>
            <div className="flex w-[430px] justify-between items-center">
              <input
                type="text"
                className="font-medium text-[14px]  w-[370px] text-white bg-transparent  border-transparent focus:border-transparent cursor-pointer hover:placeholder:text-white  border-0 focus:outline-none placeholder-white placeholder-opacity-50 mb-[10px] mt-[10px]"
                placeholder="Add a comment..."
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button
                className=" pl-[10px] text-primary cursor-pointer hover:opacity-50 font-bold"
                onClick={() => createComment(post)}
              >
                Post
              </button>
            </div>

            <div className="border-b  border-solid border-greyText w-[436px] mt-2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
