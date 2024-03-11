import { Album } from "../../interfaces/Album";
import AlbumCard from "./card";

interface props {
  title : string,
  list: null | Album[]
}

const AlbumList = ({ title, list }: props) => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl text-green-400 mb-4">{title}</h2>
      <div className="grid grid-cols-5 gap-4">
        {list &&
          list.length > 0 &&
          list.map((album) => {
            return <AlbumCard key={album.id} album={album}/>;
          })}
      </div>
    </section>
  );
};

export default AlbumList;
