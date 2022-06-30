import Image from "next/image";
import Link from "next/link";
import Logo from '../public/img/logo.svg'

export default function Home() {
  return (
    <div className="mt-36 h-full">
		    <div className="flex justify-center">      
            <Image src={Logo} alt="logo"/>
        </div>
        <div className="flex justify-center mt-5">
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8AFF8F] hover:border-[#8AFF8F] hover:text-slate-900 font-bold rounded-md'>
              <Link href="/Quran">
                <a>Ayo Ngaji</a>
              </Link>
            </button>
        </div>
	</div>
  )
}
