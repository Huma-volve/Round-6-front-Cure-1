import { MapPin, ChevronRight } from "lucide-react";
import { Card } from "../ui/Card";
import { useNavigate } from "react-router-dom";

type Props = {
  name: string;
  address: string;
  avatarUrl?: string;
};

export default function ProfileHeader({
  name,
  address,
  avatarUrl = "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
}: Props) {
  const navigate = useNavigate();

  return (
    <Card className="p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4">

        <div className="flex items-center gap-4 min-w-0">
          <div className="relative">
            <img
              src={avatarUrl}
              alt="Avatar"
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-zinc-900 truncate">
              {name}
            </h2>
            <p className="mt-0.5 text-sm text-zinc-500 flex items-center gap-1 truncate">
              <MapPin className="h-4 w-4" /> {address}
            </p>
          </div>
        </div>


        <button
          onClick={() => navigate("/edit-profile")}
          className="shrink-0 rounded-full p-2 hover:bg-zinc-100"
          aria-label="Go to edit profile"
        >
          <ChevronRight className="h-5 w-5 text-zinc-600" />
        </button>
      </div>
    </Card>
  );
}
