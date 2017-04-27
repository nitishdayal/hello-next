import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Post = ({ movie: { Title, Plot, Poster } }) => (
  <Layout>
    <h1>{Title}</h1>
    <p>{Plot}</p>
    <img src={Poster} alt="Movie poster" />
  </Layout>
);

Post.getInitialProps = async function({ query: { id } }) {
  const res = await fetch(`http://www.omdbapi.com/?i=${id}`);
  const movie = await res.json();

  console.info(`Fetched movie: ${movie.Title}`);

  return { movie };
};

export default Post;
