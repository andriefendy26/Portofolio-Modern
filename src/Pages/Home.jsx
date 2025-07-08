import Hero from '../Layout/Hero'
import ScrollVelocityLayout from '../Layout/ScrollVelocityLayout'
import About from '../Layout/About'
import Timeline from '../Layout/Timeline'
import Activity from '../Layout/Activity'
import RecentProject from '../Layout/RecentProject'
import TechStack from '../Layout/TechStack'
import GetInTouch from '../Layout/GetInTouch'

export default function Home() {
  return (
    <div className='overflow-hidden'>
      <Hero></Hero>
      <ScrollVelocityLayout></ScrollVelocityLayout>
      <About></About>
      <Timeline></Timeline>
      <Activity></Activity>
      <TechStack></TechStack>
      <RecentProject></RecentProject>
      <GetInTouch></GetInTouch>
    </div>
  )
}
