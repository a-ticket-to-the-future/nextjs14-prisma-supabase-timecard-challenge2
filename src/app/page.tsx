import Image from 'next/image'
import getCurrentUser from './actions/getCurrentUser'
import Timecard from './components/timecard/Timecard'

export default async function Home() {

  const currentUser = await getCurrentUser()

  return (
    <div className="text-center">{currentUser ? <div>
                                                  <div>認証中</div>
                                                  <Timecard />
                                                </div> 
                                                : <div>未認証</div>}</div>
  )
}
