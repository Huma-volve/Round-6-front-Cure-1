import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import RatingStars from "./RatingStars";
import ReviewCard from "./ReviewCard";

function DoctorReviews() {
    return (
        <section>
            <header className="flex items-center justify-between">
                <h2 className="font-medium text-lg">Reviews and Rating</h2>
                <Button
                    variant="ghost"
                    className="cursor-pointer text-primary-100 hover:bg-transparent focus:bg-transparent p-0"
                >
                    <Pencil />
                    <span>add review</span>
                </Button>
            </header>

            <div className="flex items-center justify-between gap-2">
                <p className="text-2xl font-medium">4.5/5</p>
                <div className="flex flex-col items-center gap-1">
                    <RatingStars rating={4.5} />
                    <p className="text-secondary-400 font-medium text-lg">
                        1250+ Reviews
                    </p>
                </div>
            </div>

            <ReviewCard />
        </section>
    );
}

export default DoctorReviews;
