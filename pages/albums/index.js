import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import { useRouter } from "next/router";

function AlbumPage({ albums, page, numberOfAlbums }) {
  const router = useRouter();

  const lastPage = Math.ceil(numberOfAlbums / 3);

  return (
    <Box variant="container" pt={40}>
      <ul>
        {albums.map((album) => (
          <li key={album.id}>
            <h3>{album.title}</h3>
          </li>
        ))}
      </ul>
      <Flex mt={40} pl={20} justifyContent="space-between" maxWidth={300}>
        <button
          onClick={() => router.push(`/albums?page=${page - 1}`)}
          disabled={page <= 1}
        >
          Previous
        </button>
        <button
          onClick={() => router.push(`/albums?page=${page + 1}`)}
          disabled={page >= lastPage}
        >
          Next
        </button>
      </Flex>
    </Box>
  );
}

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const numberOfAlbumsResponse = await fetch(`${API_URL}/albums/count`);
  const numberOfAlbums = await numberOfAlbumsResponse.json();

  const res = await fetch(`${API_URL}/albums?_limit=3&_start=${start}`);
  const data = await res.json();

  return {
    props: {
      albums: data,
      page: +page,
      numberOfAlbums,
    },
  };
}

export default AlbumPage;
