import { NextSeo } from "next-seo";

function About() {
  const SEO = {
    title: "About Page",
    description: "Just an about page",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <h1>I am an about page</h1>
    </>
  );
}

export default About;
