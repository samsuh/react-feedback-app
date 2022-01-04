import {Link} from 'react-router-dom'
import Card from "../components/shared/Card"

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ea.</p>
        <p>Version 1.0</p>

        <Link to="/">Go To Home</Link>
      </div>
    </Card>
  )
}

export default AboutPage
