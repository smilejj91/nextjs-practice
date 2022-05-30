import Head from 'next/head'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Contents from '../components/Contents'

export default function Home({ contents }) {
  return (
    <div className=''>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Header */}
      <Header />

      {/* Navgation */}
      <Nav />

      {/* Contents */}
      <Contents contents={contents}/>

    </div>
  )
}

export async function getServerSideProps(context) {

  const menu = context.query.menu;

  const BASE_URL = 'https://api.themoviedb.org';
  const API_KEY = process.env.API_KEY;

  const res = await fetch(`${BASE_URL}/3/discover/movie?api_key=${API_KEY}&language=kr&with_genres=${menu}`)
  const data = await res.json()
  return {
      props: {
          contents: data.results
      },
  }
}