import styled from "@emotion/styled";

import { rem } from "polished";

function Card({ album }) {
  const { API_URL } = process.env;
  return (
    <CardStyled>
      <div className="poster">
        <img
          className="image"
          src={API_URL + album.album_cover.url}
          alt="album-cover"
        ></img>
      </div>
      <div className="body">
        <h2>{album.title}</h2>
        <p dangerouslySetInnerHTML={{ __html: album.Review }} />
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
  }
`;

export default Card;
