import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const BookingRooms = ({room}) => {
    const {image_url, title, rating, per_night_price, room_details} = room

    useEffect(() =>{
        AOS.init({
            duration:"1000"
        });
    },[])
    return (
        <div data-aos="fade-right" className="flex gap-28 border w-[850px] p-6 mb-5 rounded-lg shadow-xl">
            <div className="w-[350px] h-[200px]">
                <img data-aos="zoom-in" src={image_url} alt="" />
            </div>
            <div>
                <h2 className="card-title">{title}</h2>
                <div className="flex justify-around mt-2">
                {
                    room_details.map(item => <p>{item}</p>)
                }
                </div>
                <p className="text-[#6A6A6A]">Wif Air conditioning Kitchen</p>
                <p className="text-[#6A6A6A]">Cancellation fexibility availiable</p>
            </div>
        </div>
    );
};

export default BookingRooms;