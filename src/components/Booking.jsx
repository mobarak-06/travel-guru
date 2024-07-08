import { useLoaderData } from "react-router-dom";
import NavBar from "./NavBar";
import BookingRooms from "./BookingRooms";

const Booking = () => {
    const data = useLoaderData();
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <NavBar></NavBar>
      
      <div>
        {
            data.map(room => <BookingRooms key={room.id} room={room}></BookingRooms> )
        }
      </div>
      </div>
    </div>
  );
};

export default Booking;
