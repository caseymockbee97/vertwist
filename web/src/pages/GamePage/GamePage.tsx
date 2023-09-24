import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const GamePage = () => {
  return (
    <>
      <MetaTags title="Game" description="Game page" />

      <h1>Howdy 🤠</h1>
      <p>
        We have a second page!!
      </p>
      <p>
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default GamePage
