import React, { useEffect, useState } from "react";
import google from "../../assets/google.svg";
import adobe from "../../assets/adobe.svg";
import airbnb from "../../assets/airbnb.svg";
import apple from "../../assets/apple.svg";
import netflix from "../../assets/netflix.svg";
import slack from "../../assets/slack.svg";
import snapchat from "../../assets/snapchat.svg";
import spotify from "../../assets/spotify.svg";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const Jobs = () => {
  const [userData, setUserData] = useState([]);
  const [userSearchData, setUserSearchData] = useState([]);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const Data = [
      {
        id: 1,
        image: google,
        title: "Web Developer",
        time: "Now",
        location: "Canada",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Google Co.",
      },
      {
        id: 2,
        image: adobe,
        title: "UI/UX Designer",
        time: "Now",
        location: "USA",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Adobe Co.",
      },
      {
        id: 3,
        image: snapchat,
        title: "Manager",
        time: "Now",
        location: "India",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Snapcat Co.",
      },
      {
        id: 4,
        image: airbnb,
        title: "Sales",
        time: "Now",
        location: "USA",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Airbnd Co.",
      },
      {
        id: 5,
        image: apple,
        title: "Marketing",
        time: "Now",
        location: "Berlin",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Apple Co.",
      },
      {
        id: 6,
        image: slack,
        title: "Backend Intern",
        time: "Now",
        location: "England",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Slack Co.",
      },
      {
        id: 7,
        image: netflix,
        title: "Data Analyst",
        time: "Now",
        location: "England",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Netflix Co.",
      },
      {
        id: 8,
        image: spotify,
        title: "Cloud Dev",
        time: "Now",
        location: "USA",
        desc: "Earum? Mollitia proident perspiciatis, blandit primis necessitatibus vehicula eius possimus, ut totam, cillum blandit?",
        company: "Spotify Co.",
      },
    ];

    setUserData(Data);
    setUserSearchData(Data);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    const newData = userData
      .filter((x) => x.title == (title == "" ? x.title : title))
      .filter((y) => y.location == (location == "" ? y.location : location));
    setUserSearchData(newData);
  };
  return (
    <>
      <div className="searchDiv grid gap-10 bg-grayish rounded-[10px] p-[3rem]">
        <form action="">
          <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white shadow-lg  shadow-grayish-700">
            <div className="flex gap-2 w-full items-center p-[20px]">
              <AiOutlineSearch className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-redish focus:outline-none w-[100%]"
                placeholder="Search Job.."
                onChange={(e) => setTitle(e.target.value)}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <div className="flex w-full gap-2 items-center p-[20px]">
              <CiLocationOn className="text-[25px] icon" />
              <input
                type="text"
                className="bg-transparent text-redish focus:outline-none w-[100%]"
                placeholder="Search by location"
                onChange={(e) => setLocation(e.target.value)}
              />
              <AiOutlineCloseCircle className="text-[30px] text-[#a5a6a6] hover:text-textColor icon" />
            </div>

            <button
              className="bg-redish h-full w-full p-3 mr-[3px] px-10 rounded-[10px] text-white cursor-pointer hover:bg-red-300"
              onClick={handleChange}
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div>
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {userSearchData && userSearchData.length > 0
            ? userSearchData.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-redish shadow-lg shadow-greyish hover:shadow-lg"
                  >
                    <span className="flex items-center justify-between gap-4">
                      <h1 className="text-[16px] font-semibold text-textColor group-hover:text-white ">
                        {item.title}
                      </h1>
                      <span className="flex items-center text-[#ccc] gap-1">
                        <BiTimeFive />
                        {item.time}
                      </span>
                    </span>
                    <h6 className="text-[#ccc]">{item.location}</h6>
                    <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white">
                      {item.desc}
                    </p>

                    <div className="company flex items-center gap-2">
                      <img
                        src={item.image}
                        alt="company logo"
                        className="w-[10%]"
                      />
                      <span className="text-[14px] py-[1rem] block group-hover:text-white text-[#959595]">
                        {item.company}
                      </span>
                    </div>
                    <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white  group-hover:text-textColor">
                      Apply Now
                    </button>
                  </div>
                );
              })
            : "No data"}
        </div>
      </div>
    </>
  );
};

export default Jobs;
