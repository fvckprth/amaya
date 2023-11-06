import { PrivacyHeader } from "@/components/marketing/privacy/PrivacyHeader"
import { PrivacyContent } from "@/components/marketing/privacy/PrivacyContent"

export const metadata = {
  title: 'Privacy',
}

export default function Privacy() {
  return (
    <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between px-4 md:px-12 pt-8 md:pt-32 h-screen overflow-y-hidden'>      
        <PrivacyHeader />
        <PrivacyContent />
    </div>
  )
}