import Banner from '@/components/Banner';
import PhoneCase from '@/app/phonecase/page';
import Phone from '@/app/phone/page';
import Watch from '@/app/watches/page';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='w-full h-[805px]'>
      <Banner/>
      <Phone/>
      <PhoneCase/>
      <Watch/>

    </main>
  )
}
