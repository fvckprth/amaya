import { TermsHeader } from "@/components/marketing/terms/TermsHeader"
import { TermsContent } from "@/components/marketing/terms/TermsContent"

export const metadata = {
  title: 'Terms',
}

export default function Terms() {
  return (
    <div className='flex flex-col md:flex-row space-y-10 md:space-y-0 md:justify-between px-4 md:px-12 pt-8 md:pt-32 h-screen overflow-y-hidden'>      
        <TermsHeader />
        <TermsContent />
    </div>
  )
}