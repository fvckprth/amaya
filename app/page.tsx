import Nav from '@/components/marketing/Nav'
import Body from '@/components/marketing/Body'
import { RequestDemoForm } from '@/components/marketing/RequestDemoForm'
import { Footer } from '@/components/marketing/Footer'

export default function Home() {
  return (
    <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2'>      
      <div className='flex-col space-y-5 md:space-y-6 w-max'>
        <div>
          <Nav />
          <Body />
          <Footer />
        </div>
        <div>
          <RequestDemoForm />
        </div>
      </div>
    </div>
  )
}