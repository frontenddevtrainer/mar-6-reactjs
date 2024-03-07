import AlbumCard from "./card";

const AlbumList = ({ title }) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl text-green-400 mb-4">{title}</h2>
      <AlbumCard />
    </section>
  );
};

export default AlbumList;
