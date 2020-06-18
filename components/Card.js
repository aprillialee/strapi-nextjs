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
      <div className="poster">
        {album.album_cover && (
          <img
            className="image"
            src={API_URL + album.album_cover.url}
            alt="album-cover"
          ></img>
        )}
      </div>
      <div className="body">
        <h2>{album.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: album.Review }} />
        <Link
          href="/albums/[genre]/[slug]"
          as={`/albums/${album.genre.slug}/${album.slug}`}
        >
          <a>More about this album</a>
        </Link>
      </div>
    </CardStyled>
  );
}

const CardStyled = styled.div`
  width: 100%;
  border: 1px solid #cccccc;
  margin-top: ${rem(50)};
  border-radius: ${rem(20)};
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .image {
    width: 100%;
  }

  .body {
    padding: ${rem(20)};
    h3 {
      margin-bottom: ${rem(20)};
    }

    p {
      color: #666666;
      line-height: 1.5;
    }
    a {
      display: inline-block;
      margin: 20px 0;
      text-decoration: none;
    }
  }
`;

export default Card;
