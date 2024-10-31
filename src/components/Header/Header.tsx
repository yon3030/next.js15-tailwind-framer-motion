import { headerTexts } from "../UI/Texts/appText";

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-8 md:mb-12 p-4">
      <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-center my-4 md:my-8 font-dinoko">
        {headerTexts.title}
      </h1>
      <h3 className="text-xl md:text-2xl font-bold text-center max-w-xl mt-2 md:mt-4">
        {headerTexts.subtitle}
      </h3>
      <p className="text-base md:text-lg text-center max-w-xl mt-2 md:mt-4">
        {headerTexts.mainText}
      </p>
      <p className="text-base md:text-lg text-center max-w-xl mt-2 md:mt-4">
        {headerTexts.notificationText}
      </p>
    </header>
  );
}
