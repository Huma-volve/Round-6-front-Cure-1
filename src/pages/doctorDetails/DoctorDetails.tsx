import GoBackButton from "@/components/common/GoBackButton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";

function DoctorDetails() {
    return (
        <>
            <header className="flex items-center justify-between">
                <GoBackButton />
                <h1 className="font-bold text-lg">Doctor Details</h1>
                <button className="hover:scale-110 transition-transform cursor-pointer">
                    <Heart strokeWidth={1.3} />
                </button>
            </header>

            <section className="flex items-center gap-4">
                <Avatar className="w-24 h-24">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>DC</AvatarFallback>
                </Avatar>

                <div>
                    <h2>Dr. Jessica Turner</h2>
                    <p>Pulmonologist</p>
                    <div>
                        <p>129,El-Nasr Street, Cairo</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default DoctorDetails;
