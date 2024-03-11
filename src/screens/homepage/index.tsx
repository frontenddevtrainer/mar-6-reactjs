import { useEffect, useState } from "react";
import AlbumList from "../../components/album-list";
import { getAlbums } from "../../model/albums/api";
import { Album } from "../../interfaces/Album";

const HomepageScreen = () => {
  const [topAlbums, setTopAlbums] = useState<null | Album[]>(null);
  const [latestAlbums, setLatestAlbums] = useState<null | Album[]>(null);

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
