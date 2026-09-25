import Link from "next/link";
import { ArrowLeft, Magnifier, Car } from "@gravity-ui/icons";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-white text-slate-900">
            <div className="mx-auto flex min-h-screen w-11/12 max-w-6xl items-center justify-center py-16">
                <div className="w-full max-w-2xl border border-slate-200 bg-white">
                    {/* Top accent */}
                    <div className="h-1 w-full bg-slate-900" />

                    <div className="px-6 py-10 sm:px-10 sm:py-14">
                        {/* Brand */}
                        <div className="mb-12 flex items-center gap-2">
                            <Car className="h-5 w-5" />
                            <span className="text-lg font-semibold tracking-tight">
                                QDelivery
                            </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-7 flex h-16 w-16 items-center justify-center border border-slate-200 bg-slate-50">
                            <Magnifier className="h-7 w-7 text-slate-500" />
                        </div>

                        {/* Content */}
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-500">
                            Error 404
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            Page not found
                        </h1>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
                            The page you are looking for doesn't exist or may
                            have been moved to another location.
                        </p>

                        {/* Divider */}
                        <div className="my-8 border-t border-slate-200" />

                        {/* Actions */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/"
                                className="inline-flex h-11 items-center justify-center gap-2 border border-slate-900 bg-slate-900 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>

                            <Link
                                href="/track"
                                className="inline-flex h-11 items-center justify-center border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
                            >
                                Track an Order
                            </Link>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 sm:px-10">
                        <p className="text-xs text-slate-500">
                            Need help with a delivery? Contact QDelivery
                            support.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}