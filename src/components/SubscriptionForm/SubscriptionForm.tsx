import React from "react";
import LargerAnimatedText from "@/components/UI/LargerAnimatedText/LargerAnimatedText";
import { subscriptionTexts } from "@/components/UI/Texts/appText";

export default function SubscriptionForm() {
  return (
    <section className="flex flex-col items-center bg-[#F9F4ED] pb-6 p-4">
      <LargerAnimatedText />
      <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold font-dinoko text-center mb-4 md:mb-8">
        {subscriptionTexts.inboxTitle}
      </h2>
      <p className="text-base md:text-lg text-center max-w-lg mb-4">
        {subscriptionTexts.introText}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <input
          type="email"
          placeholder={subscriptionTexts.emailPlaceholder}
          className="w-full sm:w-2/3 p-3 rounded-md border border-gray-300 focus:border-orange-500 focus:ring-orange-500"
        />
        <button className="w-full sm:w-1/3 bg-orange-500 text-white px-4 py-3 rounded-md font-bold btn-dump">
          {subscriptionTexts.buttonText}
        </button>
      </div>
      <p className="text-sm md:text-base m-4 text-center max-w-lg">
        {subscriptionTexts.feedbackText}
      </p>
    </section>
  );
}
 