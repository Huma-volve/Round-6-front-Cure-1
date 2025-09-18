import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PrivacyPage = () => {
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
                        <ChevronLeft
                            className="h-5 w-5 text-zinc-700"
                            onClick={() => nav(-1)}
                        />
                    </button>
                    <h1 className="mx-auto text-lg font-semibold text-zinc-900">
                        Privacy Policy
                    </h1>
                    <div className="w-9" />
                </div>

                {/*   */}
                <div className="space-y-6 text-zinc-800">
                    <section>
                        <h2 className="text-sm font-semibold text-zinc-900">
                            Last Updated:{" "}
                            <span className="font-normal text-zinc-600">
                                19/11/2024
                            </span>
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                            Welcome to Cure. Your privacy is important to us.
                            This Privacy Policy explains how we collect, use,
                            and protect your personal information when you use
                            our doctor appointment booking app.
                        </p>
                    </section>

                    {/*  */}
                    <section>
                        <h2 className="mb-2 text-base font-semibold text-zinc-900">
                            terms & conditions
                        </h2>
                        <p className="text-sm leading-6 text-zinc-600">
                            By registering, accessing, or using this app, you
                            confirm that you are at least 18 years old (or have
                            parental/guardian consent if younger) and agree to
                            be bound by these Terms and our Privacy Policy.
                        </p>

                        <p className="mt-3 text-sm font-semibold text-zinc-900">
                            You agree to:
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-600">
                            <li>Use the app only for lawful purposes.</li>
                            <li>
                                Provide accurate and complete information during
                                registration and booking.
                            </li>
                            <li>
                                Not impersonate others or create fake accounts.
                            </li>
                        </ul>

                        <p className="mt-3 text-sm font-semibold text-zinc-900">
                            You may not:
                        </p>
                        <ul className="mt-1 list-disc space-y-1 pl-5 text-sm text-zinc-600">
                            <li>
                                Disrupt or interfere with the app’s
                                functionality.
                            </li>
                            <li>
                                Try to access data or systems not meant for you.
                            </li>
                            <li>
                                Use the app to harass or abuse doctors or staff.
                            </li>
                        </ul>

                        <p className="mt-4 text-sm leading-6 text-zinc-600">
                            Your data is handled in accordance with our [Privacy
                            Policy]. You are responsible for keeping your login
                            credentials secure.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPage;
