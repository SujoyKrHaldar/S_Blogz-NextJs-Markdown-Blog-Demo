import Head from "next/head";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  // Step one : get the data from the folder name blogs.
  const files = fs.readdirSync(path.join("posts"));

  // Step two : generating slug,
  const blog = files.map((file_name) => {
    //Step three : we remove the .md extension from the end of the name.
    const slug = file_name.replace(".md", "");

    return slug;
  });
  console.log(blog);

  return {
    props: {},
  };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
}
