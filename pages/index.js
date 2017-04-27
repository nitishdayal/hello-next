import React, { Component } from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";

const Index = ({ movies }) => (
  <Layout>
    <h1>Batman Movies</h1>
    <ul>
      {movies.map(movie => (
        <li key={movie.imdbID}>
          <Link as={`p/${movie.imdbID}`} href={`/post?id=${movie.imdbID}`}>
            <a>{movie.Title}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async function() {
  const res = await fetch("http://www.omdbapi.com/?s=batman");
  const data = await res.json();

  console.log(`Movie data fetched: Found ${data.Search.length} movies`);

  return {
    movies: data.Search
  };
};

export default Index;
