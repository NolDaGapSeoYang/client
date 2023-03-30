import { Link } from 'react-router-dom'
import { linkToKaKaoMap } from 'utils/index'

const Home = () => {
  return (
    <div>
      HOME
      <button
        onClick={() =>
          window.Kakao.Share.sendCustom({
            templateId: 91940,

            callback: () => console.log('???'),
          })
        }
      >
        MOBILE?
      </button>
      <Link to='detail'>Detail</Link>
      <Link to='result'>result</Link>
    </div>
  )
}

export default Home
