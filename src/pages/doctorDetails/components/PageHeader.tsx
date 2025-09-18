import { Heart } from "lucide-react";
import GoBackButton from "@/components/common/GoBackButton";

type PageHeaderProps = {
    title: string;
    className?: string;
};

function PageHeader({ title, className }: PageHeaderProps) {
    return (
        <header
            className={`flex items-center justify-between h-fit ${className}`}
        >
            <GoBackButton />
            <h1 className="font-semibold text-lg flex-1">{title}</h1>
            <button className="hover:scale-110 transition-transform cursor-pointer">
                <Heart strokeWidth={1.3} />
            </button>
        </header>
    );
}

export default PageHeader;
