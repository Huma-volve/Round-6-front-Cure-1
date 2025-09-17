import { Award, MessageSquareMore, Star, User } from "lucide-react";
import StatItem from "./StatItem";

function DoctorStats() {
    return (
        <section className="flex items-center gap-4">
            <StatItem Icon={User} value="2,000+" label="patients" />
            <StatItem Icon={Award} value="10+" label="experience" />
            <StatItem Icon={Star} value="4.5" label="rating" />
            <StatItem Icon={MessageSquareMore} value="1,872" label="reviews" />
        </section>
    );
}

export default DoctorStats;
