import React from "react";
import HomeLeftBlock from "../Home/HomeLeftBlock";

const Profile = () => {
  return (
    <div className="flex       bg-[#e0ebf5] p-4  ">
      <div className="-mt-6">
        <HomeLeftBlock />
      </div>
      <div
        className=" h-[100%] w-[75%] rounded-lg bg-[#ffffff]  grow-[1] mr-3 "
        style={{ boxShadow: " 0 4px 6px rgba(0, 0, 0, 0.1)  " }}
      >
        <div className="flex  flex-col  items-center">

        <div className="flex justify-around p-4">
          <div className="flex items-center ">
            <div>
              <img
                className="h-32  rounded-full"
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1679828299386/g92L1gMHR.jpg?w=500&h=500&fit=crop&crop=faces&auto=compress,format&format=webp"
                alt=""
              />
            </div>
            <div className="flex flex-col  pl-6 justify-between gap-3 ">
              <div className="">
                {/* <button className="bg-[#f5f5f5] text-[#000000]  text-sm font-semibold px-4 py-2 rounded-full  hover:bg-[#e0ebf5]">
                Edit Profile
              </button> */}
                <h1 className="text-2xl font-bold">Nishant Sharma</h1>
                <p className="text-sm text-gray-500">@Nishant-Sharma</p>
              </div>
              <p className=" text-lg w-[80%]">
                Devrel @CIC | Connecting web, opensource, communities & you 🚀
              </p>
              <div className=" flex  items-center gap-6">
                <h3 className="text-md ">23 Followers</h3>
                <h3 className="text-md ">34 Following</h3>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col items-center">
              <h3 className="text-md ">23</h3>
              <p className="text-sm text-gray-500">Posts</p>
            </div>
            <div className="">
              <button className="bg-[#f5f5f5] text-[#000000]  text-sm font-semibold px-4 py-3 rounded-full  hover:bg-[#e0ebf5]">
                Edit Profile
              </button>
              <button className="bg-[#f5f5f5] text-[#000000]  text-sm font-semibold px-4 py-3 rounded-full  hover:bg-[#e0ebf5]">
                Follow
              </button>
            </div>
          </div>
        </div>
        <div className="  justify-center text-gray-600 py-6  gap-20 items-center border rounded-lg   w-[85%] flex">
          <div className="flex">
            <p>Lor</p>
            <p>Lor</p>
            <p>Lor</p>
            <p>Lor</p>
          </div>
          <div>kolkatha,west bengal,india</div>
          <div>
            <p>Member Since Aug,2022</p>
          </div>
        </div>
      </div>
    </div>
              </div>
  );
};

export default Profile;
