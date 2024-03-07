import AlbumList from "../../components/album-list";

const HomepageScreen = () => {
  return (
    <>
      <section className="mb-12">
        <img
          src="https://via.placeholder.com/1200x400"
          alt="Banner"
          className="rounded w-full"
        />
      </section>
      <AlbumList title="Top Albums"/>
      <AlbumList title="Latest Albums"/>
    </>
  );
};

export default HomepageScreen;
