import { useScrollVisibility } from '../../hooks/useScrollVisibility';
import BasicAnimatedElement from '../UI/BasicAnimatedElement/BasicAnimatedElement';
import Image from 'next/image';
export default function Topnav() {
  const isVisible = useScrollVisibility();

  return (
    <div className={`bg-[#F9F4ED] w-full h-16 sm:h-18 md:h-20 mt-1 p-2 sm:p-3 md:p-4 border-b-2 rounded-lg border-orange-500 flex items-center justify-center sticky top-0 transition-transform duration-500 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}>
      <header className="flex flex-col left">
        <BasicAnimatedElement>
          <Image 
            src="/FUNKENKERN/logo.svg"
            alt="Wimp Logo"
            width={144}
            height={144}
            className="w-24 sm:w-28 md:w-32 lg:w-36"
          />
        </BasicAnimatedElement>
      </header>
    </div>
  );
}