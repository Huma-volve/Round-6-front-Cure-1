import React from "react";

const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
    className = "",
    children,
}) => (
    <div
        className={`rounded-2xl border border-zinc-200 bg-white shadow-sm ${className}`}
    >
        {children}
    </div>
);

export default Card;
