import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    return (
        <div className='p-4 md:p-6 w-auto flex flex-row justify-between border-l border-r border-t border-[#2E2E2E] border-opacity-25'>
            <Image 
                src='/images/amaya-logo.svg' 
                width={80} 
                height={24} 
                priority
                alt='Amaya Logo'
                className='w-20 md:w-24'
            />
            <Link href="mailto:info@eastpark.xyz" className='py-1 px-2 bg-[#E7E6E9] bg-opacity-25 text-base text-[#E7E6E9]' passHref>
                <div className='flex flex-row items-center'>
                    <Image 
                        src='/icons/mail-fill.svg' 
                        alt='Email Icon' 
                        width={16} 
                        height={16} 
                        className='w-3 h-3 md:w-4 md:h-4'
                    />
                    <span className='ml-1 md:ml-2 text-sm md:text-base'>Email</span>
                </div>
            </Link>
        </div>
    ); 
}

export default Nav;