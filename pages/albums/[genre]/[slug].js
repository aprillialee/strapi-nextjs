import { Box, Flex } from "reflexbox";
import styled from "@emotion/styled";
import { rem } from "polished";

import getConfig from "next/config";
import fetch from "isomorphic-unfetch";

import { NextSeo } from "next-seo";

function Album({ album }) {
  const { API_URL } = process.env;

  const SEO = {
    title: `Prilly's Albums | ${album.title}`,
    description: `${album.review}`,
  };
  return (
    <>
      <NextSeo {...SEO} />
      <SlugStyle>
        <Box variant="container">
          <Box as="h2" my={40}>
            {album.title}
          </Box>
          <Box>
            <img
              className="image"
              src={API_URL + album.album_cover.url}
              alt="album-cover"
            ></img>
          </Box>
          <Box>
            <p dangerouslySetInnerHTML={{ __html: album.Review }} />
          </Box>
        </Box>
      </SlugStyle>
    </>
  );
}

const { publicRuntimeConfig } = getConfig();

export async function getServerSideProps(context) {
  const { slug } = context.query;
  const res = await fetch(`${publicRuntimeConfig.API_URL}/albums?slug=${slug}`);
  const data = await res.json();
  return {
    props: {
      album: data[0],
    },
  };
}

const SlugStyle = styled.div`
  width: 100%;
  text-align: center;

  img {
    width: ${rem(350)};
    border: 1px solid #cccccc;
    border-radius: ${rem(20)};
    overflow: hidden;
    box-shadow: 0 0 10px rgba(166, 184, 200, 0.2);
  }

  p {
    margin-top: 50px;
  }
`;

export default Album;
