import AlbumList from "../../components/album-list";
import Carousel from "react-bootstrap/Carousel";
import "./homepage.scss";
import { useAlbumsListing } from "../../hooks/useAlbumsListing";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";

const GET_USER_QUERY = gql`
  query GetUserQuery {
    users {
      name
      username
      id
    }
  }
`;

const ADD_USER_MUTATION = gql`
  mutation AddUser($user: UserInput) {
    addUser(user: $user) {
      id
    }
  }
`;

const HomepageScreen = () => {
  const { data: topAlbums } = useAlbumsListing("top-albums");
  const { data: latestAlbums } = useAlbumsListing("latest-albums");

  const { data } = useQuery<{ users: any[] }>(GET_USER_QUERY);

  const [addUser] = useMutation(ADD_USER_MUTATION, {
    variables: {
      user: {
        email: "1@example.com",
        name: "1@example.com",
        phone: "1@example.com",
        username: "1@example.com",
        website: "1@example.com",
      },
    },
  });

  useEffect(() => {
    addUser();
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

      <div className="p-10 bg-slate-600 flex justify-between">
        <div className="w-1/3 p-4 bg-orange-400">
          <Link to={"/content1"} className="p-2 bg-cyan-300 w-full block">
            Link 1
          </Link>
          <Link to={"/content2"} className="p-2 bg-cyan-300 w-full block">
            Link 2
          </Link>
          <Link to={"/content3"} className="p-2 bg-cyan-300 w-full block">
            Link 3
          </Link>
          <Link to={"/content4"} className="p-2 bg-cyan-300 w-full block">
            Link 4
          </Link>
          <Link to={"/content5"} className="p-2 bg-cyan-300 w-full block">
            Link 5
          </Link>
        </div>
        <div className="w-2/3 p-4 bg-yellow-500">
          <Outlet />
        </div>
      </div>

      <ul>
        {data &&
          data?.users &&
          data?.users.length > 0 &&
          data?.users.map((user: any) => {
            return (
              <li key={user.id}>
                {user.name}, {user.username}
              </li>
            );
          })}
      </ul>
      <AlbumList list={topAlbums} title="Top Albums" />
      <AlbumList list={latestAlbums} title="Latest Albums" />
    </>
  );
};

export default HomepageScreen;
