import { Button } from "@/components/ui/button";

function DoctorPricing() {
    return (
        <section className="shadow-[1px_-2px_8px_0px_#0000002b]">
            <div className="flex items-center justify-between">
                <p className="text-2xl font-medium text-primary-200">
                    Price
                    <span className="text-sm font-light text-secondary-400">
                        \hour
                    </span>
                </p>
                <p className="text-error-500 font-medium text-lg">350$</p>
            </div>

            <Button className="w-full cursor-pointer">Book Appointment</Button>
        </section>
    );
}

export default DoctorPricing;
