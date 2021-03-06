import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis()

  if (!isAuthenticated) return <Login />

  return (
    <div className="h-screen">
      <Head>
        <title>metaverse challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to Metaverse challenge</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
