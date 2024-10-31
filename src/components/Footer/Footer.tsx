import { footerTexts } from "../UI/Texts/appText";

export default function Footer() {
  return (
    <footer className="text-center text-sm r bg-[#F9F4ED] p-4">
      <div>
        <ul className="flex gap-4 justify-center mb-4">
          {footerTexts.socialLinks.map((social) => (
            <li key={social.platform}>
              <a href={social.url}>
                <p className="underline text-[1.2rem] mb-2">
                  {social.platform}
                </p>
              </a>
              <span className="text-xs block">{social.handle}</span>
            </li>
          ))}
        </ul>
        <p className="text-gray-500">{footerTexts.quote}</p>
      </div>
    </footer>
  );
}
