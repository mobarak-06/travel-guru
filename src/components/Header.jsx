import { Link } from "react-router-dom";
import Slider from "./Slider";


const Header = () => {
  return (
    <div  className="grid grid-cols-3 mt-20">
      <div>
        <h2 className="text-7xl text-white">Cox`s bazar</h2>
        <p className="text-white mt-8">Cox`s Bazar is a city, fishing port, tourism centre and <br />district headquarters in southeastern Bangladesh. It is <br /> famous mostly for its long natural sandy beach, and it ...</p>
        <Link to="/booking" className="btn bg-[#F9A51A] border border-[#F9A51A] hover:bg-[#ff4d01] mt-8">Booking</Link>
      </div>
      <div className="col-span-2">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Header;
