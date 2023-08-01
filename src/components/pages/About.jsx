import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import man from "../../assets/man.jpg";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const About = () => {
  return (
    <div className="w-[85%] m-auto">
      <Navbar />
      <div className="aboutUs py-8 md:py-16">
        <div className="container mx-auto px-2 md:px-0 flex flex-col-reverse md:flex-row">
          <div className="md:w-1/2 w-full  md:px-16">
            <h2 className=" text-textColor text-3xl font-semibold mb-5">
              About Us
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ipsam
              possimus provident amet dignissimos ullam, consequatur voluptates
              saepe aut magnam ex voluptas nostrum error corporis aperiam ipsa
              cupiditate qui. Unde magni sapiente nisi consectetur ad eligendi
              temporibus tenetur reprehenderit nihil! Fugit eius praesentium
              optio cum nostrum tempore veritatis nisi quaerat. Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. At quia sit
              voluptates reiciendis vero corporis possimus facilis quae aliquam
              eos voluptatibus placeat doloribus sapiente aut corrupti porro
              maxime, excepturi id dolorum voluptate, autem quod optio dolorem
              error. Ratione, quisquam neque.
            </p>
            <div className="icons flex gap-4 py-[1rem]">
              <AiFillInstagram className="w-[35px] p-[5px] icon h-[35px] text-white bg-redish rounded-full cursor-pointer" />
              <AiFillFacebook className="w-[35px] p-[5px] icon h-[35px] text-white bg-redish rounded-full cursor-pointer" />
              <AiFillTwitterSquare className="w-[35px] icon p-[5px] h-[35px] text-white bg-redish rounded-full cursor-pointer" />
            </div>
          </div>
          <div className="relative md:w-1/2 mb-[2rem]">
            <img
              src={man}
              alt="not found"
              className="z-10 relative  w-full  mr-[10px]"
            />
            <div className="bg-redish h-full w-full  absolute top-4  left-4 md:margin-4"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
