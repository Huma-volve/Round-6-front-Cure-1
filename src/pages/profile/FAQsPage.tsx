import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQsPage() {
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-white">
      <div
        className="
          mx-auto w-full
          max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl
          px-3 sm:px-4 md:px-6
        "
      >
        {/*   */}
        <div className="flex items-center gap-2 py-3 md:py-4">
          <button
            type="button"
            className="-ml-2 rounded-full p-2 hover:bg-zinc-100"
            aria-label="Back"
          >
            <ChevronLeft
              className="h-5 w-5 text-zinc-700 sm:h-6 sm:w-6"
              onClick={() => nav(-1)}
            />
          </button>

          <h1
            className="
              mx-auto font-semibold text-zinc-900
              text-lg sm:text-xl md:text-2xl
            "
          >
            FAQs
          </h1>

          <div className="w-9 sm:w-10" />
        </div>

        <Accordion
          type="single"
          collapsible
          className="space-y-3 sm:space-y-4 md:space-y-5"
        >
          <AccordionItem value="item-1" className="border-0">
            <div
              className="
                rounded-2xl bg-zinc-100
                p-3 sm:p-4 md:p-5
                shadow-sm
              "
            >
              <AccordionTrigger
                className="
                  flex w-full items-center justify-between
                  p-0 hover:no-underline
                  text-base sm:text-lg
                  font-semibold text-zinc-900
                  [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6
                  min-h-[44px]
                "
              >
                <span className="truncate">What is this app used for?</span>
              </AccordionTrigger>

              <AccordionContent className="p-0">
                <div
                  className="
                    mt-3 sm:mt-4
                    border-t border-zinc-200
                    pt-3 sm:pt-4
                    text-sm sm:text-[15px] md:text-base
                    leading-6 sm:leading-7 text-zinc-600
                  "
                >
                  This app allows you to search for doctors, book appointments,
                  and consult in person easily from your phone.
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-0">
            <div className="rounded-2xl bg-zinc-100 p-3 sm:p-4 md:p-5 shadow-sm">
              <AccordionTrigger
                className="
                  flex w-full items-center justify-between
                  p-0 hover:no-underline
                  text-base sm:text-lg font-semibold text-zinc-900
                  [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6
                  min-h-[44px]
                "
              >
                <span className="truncate">Is the app free to use?</span>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="mt-3 sm:mt-4 border-t border-zinc-200 pt-3 sm:pt-4 text-sm sm:text-[15px] md:text-base leading-6 sm:leading-7 text-zinc-600">
                  Yes, basic features are free. Some services may incur fees.
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-0">
            <div className="rounded-2xl bg-zinc-100 p-3 sm:p-4 md:p-5 shadow-sm">
              <AccordionTrigger
                className="
                  flex w-full items-center justify-between
                  p-0 hover:no-underline
                  text-base sm:text-lg font-semibold text-zinc-900
                  [&>svg]:h-5 [&>svg]:w-5 sm:[&>svg]:h-6 sm:[&>svg]:w-6
                  min-h-[44px]
                "
              >
                <span className="truncate">How can I find a doctor?</span>
              </AccordionTrigger>
              <AccordionContent className="p-0">
                <div className="mt-3 sm:mt-4 border-t border-zinc-200 pt-3 sm:pt-4 text-sm sm:text-[15px] md:text-base leading-6 sm:leading-7 text-zinc-600">
                  Use search & filters (specialty, location, rating) and book
                  directly from the app.
                </div>
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
