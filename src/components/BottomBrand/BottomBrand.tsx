import StreamAnimatedText from "../UI/StreamAnimatedText/StreamAnimatedText";
import { navTexts } from "../UI/Texts/appText";

export default function BottomBrand() {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F9F4ED] p-4 font-bubbleLove">
      <div className="text-center">
        <StreamAnimatedText text={navTexts.brand} />
      </div>
      <p className="text-xs p-4">&copy; {new Date().getFullYear()}</p>
    </div>
  );
}
