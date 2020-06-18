import styled from "@emotion/styled";
import { rem } from "polished";

import Link from "next/Link";

function Card({ album }) {
  const { API_URL } = process.env;

  if (!album.genre) {
    album.genre = {};
    album.genre.slug = "uncategorised";
  }
  return (
    <CardStyled>
      <div className="body">
        <Link
          href="/albums/[genre]/[slug]"
          as={`/albums/${album.genre.slug}/${album.slug}`}
        >
          {album.album_cover && (
            <img
              className="image"
              src={API_URL + album.album_cover.url}
              alt="album-cover"
            ></img>
          )}
        </Link>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: ${rem(20)};
  overflow: hidden;
  box-shadow: 0 0 10px rgba(166, 184, 200, 0.2);
  background: #a6b8c8;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }

  a {
    display: inline-block;
    margin: 20px 0;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default Card;
