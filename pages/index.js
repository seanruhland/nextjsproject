import Navbar from '../components/Navbar'
import '../scss/style.scss';
import Head from 'next/head';

const Index = () => (
  <section>
    <Head>
      <title>This is a new title</title>
    </Head>
      <Navbar />
      <h1>Hello World from Next JS</h1>

  </section>

  )

export default Index;