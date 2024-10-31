"use client";
import React from "react";
import Topnav from "@/components/Topnav/Topnav";
import Header from "@/components/Header/Header";
import NotificationForm from "@/components/NotificationForm/NotificationForm";
import SubscriptionForm from "@/components/SubscriptionForm/SubscriptionForm";
import Footer from "@/components/Footer/Footer";
import BottomBrand from "@/components/BottomBrand/BottomBrand";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

export default function Home() {
  useSmoothScroll();
  return (
    <div>
      <Topnav />
      <Header />
      <NotificationForm />
      <SubscriptionForm />
      <Footer />
      <BottomBrand />
    </div>
  );
}
