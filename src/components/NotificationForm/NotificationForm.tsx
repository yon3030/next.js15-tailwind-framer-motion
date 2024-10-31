import { useState } from 'react';
import { notificationTexts } from "../UI/Texts/appText";

export default function NotificationForm() {
  const [email, setEmail] = useState('');

  return (
    <section className="flex flex-col items-center mb-24 p-4">
      <p className="text-2xl mb-4 text-center max-w-lg">
        {notificationTexts.title}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={notificationTexts.emailPlaceholder}
          className="w-full sm:w-2/3 p-3 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-orange-500"
        />
        <button className="w-full sm:w-1/3 bg-orange-500 text-white px-4 py-3 rounded-md font-bold btn-dump">
          {notificationTexts.buttonText}
        </button>
      </div>
    </section>
  );
}
