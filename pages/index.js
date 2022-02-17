import Head from "next/head";

import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/feaured-posts";
import Hero from "../components/home-page/hero";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Peyne's Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //ravalidate: 600,
    //regenerate the posts every 600 seconds
  };
}

export default HomePage;

// 1) Hero Section (presentation section)
// 2) Featured Posts
