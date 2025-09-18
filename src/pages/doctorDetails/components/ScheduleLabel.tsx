import { Calendar1Icon } from "lucide-react";
import type { ReactNode } from "react";

type ScheduleLabelProps = {
    children: ReactNode;
};

function ScheduleLabel({ children }: ScheduleLabelProps) {
    return (
        <div className="flex items-center gap-1">
            <Calendar1Icon className="text-primary-100" size={20} />
            <p className="flex-1 text-sm">{children}</p>
        </div>
    );
}

export default ScheduleLabel;
