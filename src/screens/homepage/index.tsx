import { useEffect, useState } from "react";
import AlbumList from "../../components/album-list";
import { getAlbums } from "../../model/albums/api";

const HomepageScreen = () => {
  const [topAlbums, setTopAlbums] = useState(null);
  const [latestAlbums, setLatestAlbums] = useState(null);

  useEffect(() => {
    const callApi = async () => {
      const topAlbumsData = await getAlbums("top-albums");
      const latestAlbumsData = await getAlbums("latest-albums");
      setTopAlbums(topAlbumsData);
      setLatestAlbums(latestAlbumsData);
    };
    callApi();
  }, []);

  return (
    <>
      <section className="mb-12">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Banner"
          className="rounded w-full"
        />
      </section>
      <AlbumList list={topAlbums} title="Top Albums" />
      <AlbumList list={latestAlbums} title="Latest Albums" />
    </>
  );
};

export default HomepageScreen;
