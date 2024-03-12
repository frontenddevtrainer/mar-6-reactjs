import { useEffect, useState } from "react";
import AlbumList from "../../components/album-list";
import { getAlbums } from "../../model/albums/api";
import { Album } from "../../interfaces/Album";
import Carousel from "react-bootstrap/Carousel";
import "./homepage.scss"

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
        <Carousel>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Banner"
              className="rounded w-full"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Banner"
              className="rounded w-full"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src="https://via.placeholder.com/1200x400"
              alt="Banner"
              className="rounded w-full"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <AlbumList list={topAlbums} title="Top Albums" />
      <AlbumList list={latestAlbums} title="Latest Albums" />
    </>
  );
};

export default HomepageScreen;
