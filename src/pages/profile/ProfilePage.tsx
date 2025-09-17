import {
  Bell,
  CreditCard,
  Heart,
  HelpCircle,
  LogOut,
  Settings as SettingsIcon,
  Shield,
} from "lucide-react";
import React from "react";

const items: ProfileItem[] = [
  {
    id: "notifications",
    label: "Notification",
    icon: Bell,
    type: "toggle",
    enabled: true,
  },
  {
    id: "payment",
    label: "Payment Method",
    icon: CreditCard,
    type: "link",
    href: "/payment-methods",
  },
  {
    id: "favorites",
    label: "Favorite",
    icon: Heart,
    type: "link",
    href: "/favorites",
  },
  {
    id: "settings",
    label: "Settings",
    icon: SettingsIcon,
    type: "link",
    href: "/settings",
  },
  {
    id: "faqs",
    label: "FAQs",
    icon: HelpCircle,
    type: "link",
    href: "/faqs",
  },
  {
    id: "privacy",
    label: "Privacy Policy",
    icon: Shield,
    type: "link",
    href: "/privacy",
  },
  {
    id: "logout",
    label: "Log out",
    icon: LogOut,
    type: "link",
    tone: "danger",
    onClick: () => localStorage.removeItem("token"),
  },
];

const Divider = () => <div className="h-px bg-zinc-100 my-1" />;

import ProfileHeader from "../../components/profile/ProfileHeader";
import SettingsRow from "../../components/profile/SettingsRow";
import { Card } from "../../components/ui/Card";
import type { ProfileItem } from "../../types/profile";
import { useNavigate } from "react-router-dom";

export default function ProfileScreen() {
  const [data, setData] = React.useState<ProfileItem[]>(items);

  const handleToggle = (id: string, next: boolean) => {
    setData((prev) =>
      prev.map((it) => (it.id === id ? { ...it, enabled: next } : it))
    );
  };
  return (
    <div className="min-h-screen bg-zinc-50 py-4 sm:py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-3 sm:px-6 lg:grid-cols-3 lg:gap-6">

        <div className="lg:col-span-1 "  >
          <ProfileHeader
            name="Seif Mohamed"
            address="129, El-Nasr Street, Cairo"
          />
        </div>


        <div className="lg:col-span-2">
          <ul className="mx-auto max-w-md px-3 space-y-3">
            {data.map((item) => (
              <li key={item.id} className="rounded-2xl bg-zinc-100 px-4 py-3">
                <SettingsRow item={item} onToggle={handleToggle} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
