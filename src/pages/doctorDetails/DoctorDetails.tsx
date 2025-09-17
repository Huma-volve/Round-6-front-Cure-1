import { Heart } from "lucide-react";
import GoBackButton from "@/components/common/GoBackButton";
import DoctorHeader from "./components/DoctorHeader";
import DoctorStats from "./components/DoctorStats";
import AboutDoctor from "./components/AboutDoctor";
import DoctorReviews from "./components/DoctorReviews";
import DoctorPricing from "./components/DoctorPricing";

function DoctorDetails() {
  return (
    <>
      <header className="flex items-center justify-between">
        <GoBackButton />
        <h1 className="font-bold text-lg">Doctor Details</h1>
        <button
          type="button"
          title="Add to favorites"
          className="hover:scale-110 transition-transform cursor-pointer"
        >
          <Heart strokeWidth={1.3} />
        </button>
      </header>

      <DoctorHeader />
      <DoctorStats />
      <AboutDoctor />
      <DoctorReviews />
      <DoctorPricing />
    </>
  );
}

export default DoctorDetails;
