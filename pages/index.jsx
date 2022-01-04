import Head from 'next/head'
import dbConnect from "../lib/dbConnect"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Movies</h1>
      </main>
    </div>
  )
}

export async function getServerSideProps(){
  try {
    await dbConnect();
    return {props: {movies: 123}}
  }
};