import { useState } from "react";

import { Button } from "@/components/ui/button";

function AboutDoctor() {
    const [isShowMore, setIsShowMore] = useState(false);

    return (
        <section>
            <h2 className="font-medium text-lg">About me</h2>
            <p className="text-secondary-400">
                Dr. Jessica Turner, a board-certified Pulmonologist with over 8
                years of experience in diagnosing and treating a wide range of
                respiratory and{" "}
                <Button
                    variant="ghost"
                    className="cursor-pointer text-primary-100 hover:bg-transparent focus:bg-transparent p-0"
                    onClick={() => setIsShowMore((curStatus) => !curStatus)}
                >
                    {isShowMore ? "Read less" : "Read more"}
                </Button>
            </p>
        </section>
    );
}

export default AboutDoctor;
