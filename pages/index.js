import Link from 'next/link'

const Index = () => (
  <div>
    <h1>Hello World from Next JS</h1>
    <Link href='/about'>
      <a title="About NextJS">About This Project</a>
    </Link>
  </div>

  )

export default Index;