import { Link } from 'react-router-dom'
import { linkToKaKaoMap } from 'utils/index'

const Home = () => {
  return (
    <div>
      HOME
      <button
        onClick={() =>
          linkToKaKaoMap({
            latitude: 37.4979502,
            longitude: 127.0276368,
          })
        }
      >
        MOBILE?
      </button>
      <Link to='detail'>Detail</Link>
    </div>
  )
}

export default Home
