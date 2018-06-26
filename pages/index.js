import Head from 'next/head';
import Link from "next/link";

import '../scss/style.scss';
import Navbar from '../components/Navbar'

const Index = (props) => (
  <section className='page-section '>
    <Head>
      <title>This is a new title</title>
    </Head>
      <Navbar />
      <h1 >Hello World from Next JS</h1>
      <div className='container mx-auto'>
      <Link as={`/posts/${props.slug}`}  href={`/post?title=${props.title}`}>
        <a  title='Learn NextJS'>Latest post on NextJS</a>
      </Link>
      <p >
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quo optio pariatur, cumque quisquam velit aperiam aut placeat quod magnam porro, dolorum, et facere. Porro, soluta repellat. Temporibus, cum, necessitatibus.</span>
        <span>Quis distinctio perspiciatis mollitia adipisci cum, optio ad error odit placeat molestiae quod nesciunt velit reiciendis, sunt hic nam deleniti expedita non. Laboriosam molestiae sunt quisquam repellendus nostrum, laudantium blanditiis!</span>
        <span>Nam, rerum quibusdam itaque voluptatum facere aspernatur deserunt nemo eius, optio hic, laudantium. Molestiae est praesentium ad impedit cum voluptas corporis quos, animi, reiciendis libero recusandae ab doloribus sunt earum.</span>
        <span>Dolor ea quidem at ullam sequi quisquam autem explicabo voluptate perspiciatis rem eveniet ipsa hic maxime, recusandae suscipit quas culpa, error laborum optio consequuntur tempore aut laboriosam mollitia ad, pariatur!</span>
      </p>

      </div>
  </section>
  )

Index.getInitialProps = async function(props) {
  //typically get from database
  let title = 'Latest post on nextJS'
  let slug= 'latest-post-next-js'
  return {
    title,
    slug,
  }
}

export default Index;