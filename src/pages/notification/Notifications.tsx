import nothingImg from "@/assets/images/nothing.png";
import type { INotification } from "@/types";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, MessageCircle, FileText, CalendarClock } from "lucide-react";

const getIcon = (name: string) => {
    switch (name) {
        case "check-circle": return CheckCircle;
        case "x-circle": return XCircle;
        case "message-circle": return MessageCircle;
        case "file-text": return FileText;
        default: return CalendarClock;
    }
};

const getRingCls = (color: string) => {
    switch (color) {
        case "blue": return "bg-blue-50 ring-blue-100 text-blue-600";
        case "green": return "bg-green-50 ring-green-100 text-green-600";
        case "red": return "bg-red-50 ring-red-100 text-red-600";
        case "purple": return "bg-purple-50 ring-purple-100 text-purple-600";
        default: return "bg-zinc-50 ring-zinc-100 text-zinc-600";
    }
};

const data: INotification[] = [
    {
        "id": "4c522d9d-2c45-40c1-aa8e-6a833ee1c875",
        "title": "Appointment Confirmed",
        "message": "Your medical appointment with Dr. Sara Ahmed has been confirmed for next Thursday",
        "icon": "check-circle",
        "color": "green",
        "type": "appointment_confirmed",
        "is_read": true,
        "read_at": "2025-07-31T20:01:35.000000Z",
        "created_at": "2025-08-06T20:01:35.000000Z",
        "created_at_formatted": "1 minute ago"
    },
    {
        "id": "2f8f5283-d389-4f5d-a5fa-114b7038694a",
        "title": "Appointment Cancelled",
        "message": "Your medical appointment with Dr. Mohamed Ali has been cancelled. You can book a new appointment",
        "icon": "x-circle",
        "color": "red",
        "type": "appointment_cancelled",
        "is_read": false,
        "read_at": null,
        "created_at": "2025-07-22T20:01:35.000000Z",
        "created_at_formatted": "2 weeks ago"
    },
    {
        "id": "2be74f05-f209-4ff2-85e2-b950ba57060d",
        "title": "New Message",
        "message": "You have a new message from Dr. Ahmed Mohamed regarding your health condition",
        "icon": "message-circle",
        "color": "blue",
        "type": "new_message",
        "is_read": false,
        "read_at": null,
        "created_at": "2025-07-12T20:01:35.000000Z",
        "created_at_formatted": "3 weeks ago"
    },
    {
        "id": "4b0ce581-d39d-46e6-bd41-2ec743453664",
        "title": "Prescription Ready",
        "message": "Your prescription from Dr. Sara Ahmed is ready for download",
        "icon": "file-text",
        "color": "purple",
        "type": "prescription_ready",
        "is_read": true,
        "read_at": "2025-08-05T20:01:35.000000Z",
        "created_at": "2025-07-07T20:01:35.000000Z",
        "created_at_formatted": "4 weeks ago"
    }
]
const Notifications = () => {
    const nav = useNavigate();



    return (
        <div className="min-h-screen bg-white">
            <div className="mx-auto max-w-md sm:max-w-lg md:max-w-xl px-4 py-4">
                {/*   */}
                <div className="flex items-center gap-2 pb-4">
                    <button
                        type="button"
                        className="-ml-2 rounded-full p-2 hover:bg-zinc-100"
                        aria-label="Back"
                    >
                        <ChevronLeft className="h-5 w-5 text-zinc-700" onClick={() => nav(-1)} />
                    </button>
                    <h1 className="mx-auto text-lg font-semibold text-zinc-900">
                        Notifications
                    </h1>
                    <div className="w-9" />
                </div>
                {
                    !data.length ? (
                        <div className="flex min-h-[60vh] items-center justify-center">
                            <img src={nothingImg} alt="nothing" className="h-40 w-40 object-contain opacity-80" />
                        </div>
                    ) : (
                        <div className="space-y-2">

                            <div className="overflow-hidden ">
                                {data.map((n, i) => {
                                    const Icon = getIcon(n.icon);
                                    const ring = getRingCls(n.color);
                                    return (
                                        <div
                                            key={n.id}
                                            className={`flex items-start gap-3 bg-white px-4 py-3 ${i !== data.length - 1 ? "border-b border-zinc-200" : ""} hover:bg-gray-100`}
                                        >
                                            <div className={`mt-1 flex h-10 w-10 items-center justify-center rounded-full ring-8 ${ring}`}>
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-center justify-between gap-2">
                                                    <h3 className="truncate text-sm font-semibold text-zinc-900">{n.title}</h3>
                                                    <span className="shrink-0 text-xs text-zinc-400">
                                                        {n.created_at_formatted || "1h"}
                                                    </span>
                                                </div>
                                                <p className="mt-0.5 line-clamp-2 text-sm text-zinc-600">{n.message}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
}

export default Notifications