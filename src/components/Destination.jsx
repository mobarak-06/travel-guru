import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import { FaRegCalendarAlt } from "react-icons/fa";

const Destination = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/NT5fMTz/shifaaz-shamoon-qtb-V-8-P-Ksk-unsplash.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60">
          <div className="max-w-7xl mx-auto">
            <NavBar></NavBar>
            <div className="mt-20 flex gap-48">
              <div>
                <h2 className="text-7xl text-white">Cox`s bazar</h2>
                <p className="text-white w-[505px] mt-6">
                  Cox`s Bazar is a town on the southeast coast of Bangladesh.
                  It`s known for its very long, sandy beachfront, stretching
                  from Sea Beach in the north to Kolatoli Beach in the south.
                  Aggameda Khyang monastery is home to bronze statues and
                  centuries-old Buddhist manuscripts. South of town, the
                  tropical rainforest of Himchari National Park has waterfalls
                  and many birds. North, sea turtles breed on nearby Sonadia
                  Island.position: absolute; width: 505px; height: 193px; left:
                  135px; right: 800px; top: 350px; bottom: 357px;
                </p>
              </div>
              <div className="w-[500px] h-[420px] bg-[#FFFFFF] px-10 py-10 rounded-lg ">
                <div>
                  <p>Origin</p>
                  <input
                    type="text"
                    name="origin"
                    className="input input-bordered w-full bg-[#F2F2F2]"
                  />
                </div>
                <div className="mt-3">
                  <p>Destination</p>
                  <input
                    type="text"
                    name="origin"
                    className="input input-bordered w-full bg-[#F2F2F2]"
                  />
                </div>
                {/* calendar */}
                <div className="flex gap-4 mt-2">
                  <div>
                    <p>From</p>
                    <div className="relative">
                    <input
                      type="text"
                      name="origin"
                      className="input input-bordered w-full bg-[#F2F2F2]"
                    />
                    <FaRegCalendarAlt className="absolute top-3 right-3"/>
                    </div>
                  </div>
                  <div>
                    <p>To</p>
                    <div className="relative">
                    <input
                      type="text"
                      name="origin"
                      className="input input-bordered w-full bg-[#F2F2F2]"
                    />
                    <FaRegCalendarAlt className="absolute top-3 right-3"/> 
                    </div>
                  </div>
                </div>
                <div className="mt-7">
                  <Link to="/booking" className="btn w-full bg-[#F9A51A]">
                    Start Booking
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
