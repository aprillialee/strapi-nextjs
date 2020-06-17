import Head from "next/head";

import fetch from "isomorphic-unfetch";

import { Flex, Box } from "reflexbox";

import Card from "components/Card";

export default function Home({ albums }) {
  return (
    <Box variant="container">
      <Box my={40} as="h2">
        Prilly's Favourite Albums
      </Box>
      <Flex
        justifyContent="space-between"
        flexDirection={{ _: "column", md: "row" }}
      >
        {albums.map((album) => (
          <Box width={{ _: "100%", md: "30%" }} padding={20} key={album.id}>
            <Card album={album} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/albums`);
  const data = await res.json();

  return {
    props: {
      albums: data,
    },
  };
}
