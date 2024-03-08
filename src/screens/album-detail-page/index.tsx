import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAlbum } from "../../model/albums/api";

const AlbumDetailpageScreen = () => {
  const params = useParams();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      try {
        const data = await getAlbum(params.id);
        setData(data);
      } catch (error) {;
        setError(error);
        navigate("/404");
      } finally {
        setIsLoading(false);
      }
    };
    callApi();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="relative">
        <img
          src="https://via.placeholder.com/1920x500"
          alt="Album"
          className="w-full"
        />
        <div className="absolute top-4 left-4">
          <h1 className="text-4xl font-bold text-white">Album Name</h1>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300">
            Add to Cart
          </button>
          <button className="material-icons text-green-400 hover:text-green-300 text-3xl">
            play_arrow
          </button>
        </div>
      </div>
    </>
  );
};

export default AlbumDetailpageScreen;
