import { Button } from "@/components/ui/button"

import Link from 'next/link';
import Image from 'next/image';

const CTAButton = () => {
    return (
        <div>
          <Button 
            type="button"
            variant="default" 
            className="w-full h-10 md:h-12 text-sm md:text-base bg-[#FBBC05]/25 text-[#FBBC05]">
              Request Demo
          </Button>
        </div>
    ); 
}

export default CTAButton;