import type { LucideIcon } from "lucide-react";

type StatItemProps = {
    Icon: LucideIcon;
    value: string;
    label: string;
};

function StatItem({ Icon, value, label }: StatItemProps) {
    return (
        <div className="flex flex-col items-center gap-1">
            <Icon
                className="fill-primary-200 text-white mb-2"
                size={30}
                strokeWidth={1.6}
            />
            <p className="text-secondary-600 font-semibold">{value}</p>
            <p className="text-secondary-400">{label}</p>
        </div>
    );
}

export default StatItem;
