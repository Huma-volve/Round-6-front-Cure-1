import { BadgeCheck, Pin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function DoctorHeader() {
    return (
        <section className="flex items-center gap-4">
            <section className="relative">
                <Avatar className="w-24 h-24 shadow-[3px_3px_0px_0px] shadow-primary-100">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>DC</AvatarFallback>
                </Avatar>
                <BadgeCheck className="fill-primary-100 text-[#ffffffc5] absolute bottom-0 right-0" />
            </section>

            <div className="flex flex-col gap-2">
                <h2 className="font-medium text-lg">Dr. Jessica Turner</h2>
                <p className="text-secondary-400">Pulmonologist</p>
                <div className="flex items-start gap-2">
                    <Pin
                        strokeWidth={1.4}
                        size={20}
                        className="text-primary-100"
                    />
                    <p className="text-secondary-400">
                        129,El-Nasr Street, Cairo
                    </p>
                </div>
            </div>
        </section>
    );
}

export default DoctorHeader;
