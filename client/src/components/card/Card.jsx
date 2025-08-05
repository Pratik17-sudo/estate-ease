import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-all bg-white">
      <Link to={`/${item.id}`} className="block">
        <img
          src={item.images[0]}
          alt=""
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4">
        <h2 className="text-lg font-semibold">
          <Link to={`/${item.id}`} className="hover:underline">
            {item.title}
          </Link>
        </h2>
        <p className="text-sm text-gray-600 flex items-center mt-1">
          <img src="/pin.png" alt="location" className="w-4 h-4 mr-1" />
          {item.address}
        </p>
        <p className="text-blue-600 font-bold text-lg mt-2">$ {item.price}</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-sm text-gray-700">
              <img src="/bed.png" alt="bedroom" className="w-4 h-4" />
              {item.bedroom} beds
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-700">
              <img src="/bath.png" alt="bathroom" className="w-4 h-4" />
              {item.bathroom} baths
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/save.png" alt="save" className="w-5 h-5" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded">
              <img src="/chat.png" alt="chat" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
