import AlbumList from "../../components/album-list";
import Carousel from "react-bootstrap/Carousel";
import "./homepage.scss";
import { useAlbumsListing } from "../../hooks/useAlbumsListing";

import { gql, useMutation, useQuery } from "@apollo/client";
import { useEffect } from "react";

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

  const { loading, data } = useQuery<{ users: any[] }>(GET_USER_QUERY);

  const [addUser, { data: mutationData }] = useMutation(ADD_USER_MUTATION, {
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
