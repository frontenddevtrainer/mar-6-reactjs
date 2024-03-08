import { Link } from "react-router-dom";

const AlbumCard = ({ album }) => {
  return (
    <div className="bg-gray-800 p-4 rounded relative">
      <div className="relative">
        <img
          src="https://via.placeholder.com/150"
          alt="Album"
          className="w-full rounded mb-2"
        />
        <button className="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300">
          <span className="material-icons text-white"> play_arrow </span>
        </button>
      </div>

      <div className="text-left">
        <h3 className="text-md font-bold mb-1">
          <Link to={`/albums/${album.id}`}>{album.name}</Link>
        </h3>
        <p className="text-sm mb-2 text-gray-400">
          By {album.singers.join(", ")}
        </p>
        <p className="text-sm mb-2 text-green-200">${album.price}</p>

        <a
          href="#"
          className="inline-flex items-center text-green-400 hover:text-green-300"
        >
          <span className="material-icons"> shopping_cart </span>
          <span className="ml-1">Add to Cart</span>
        </a>
      </div>
    </div>
  );
};

export default AlbumCard;
