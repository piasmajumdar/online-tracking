"use client";

import { useEffect } from "react";
import Link from "next/link";
import {
    ArrowLeft,
    CircleXmark,
    ArrowRotateRight,
    Car,
} from "@gravity-ui/icons";

export default function Error({ error, reset }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-white text-slate-900">
            <div className="mx-auto flex min-h-screen w-11/12 max-w-6xl items-center justify-center py-16">
                <div className="w-full max-w-2xl border border-slate-200 bg-white">
                    {/* Error indicator */}
                    <div className="h-1 w-full bg-red-600" />

                    <div className="px-6 py-10 sm:px-10 sm:py-14">
                        {/* Brand */}
                        <div className="mb-12 flex items-center gap-2">
                            <Car className="h-5 w-5" />
                            <span className="text-lg font-semibold tracking-tight">
                                QDelivery
                            </span>
                        </div>

                        {/* Icon */}
                        <div className="mb-7 flex h-16 w-16 items-center justify-center border border-red-200 bg-red-50">
                            <CircleXmark className="h-7 w-7 text-red-600" />
                        </div>

                        {/* Content */}
                        <p className="mb-2 text-sm font-medium uppercase tracking-[0.16em] text-red-600">
                            Something went wrong
                        </p>

                        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                            We couldn't load this page
                        </h1>

                        <p className="mt-4 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
                            There was an unexpected problem while loading this
                            page. Please try again or return to the QDelivery
                            homepage.
                        </p>

                        {/* Error reference */}
                        <div className="mt-6 border border-slate-200 bg-slate-50 px-4 py-3">
                            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                                Status
                            </p>

                            <p className="mt-1 text-sm text-slate-700">
                                Temporary application error
                            </p>
                        </div>

                        {/* Divider */}
                        <div className="my-8 border-t border-slate-200" />

                        {/* Actions */}
                        <div className="flex flex-col gap-3 sm:flex-row">
                            <button
                                onClick={() => reset()}
                                className="inline-flex h-11 items-center justify-center gap-2 border border-slate-900 bg-slate-900 px-5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                            >
                                <ArrowRotateRight className="h-4 w-4" />
                                Try Again
                            </button>

                            <Link
                                href="/"
                                className="inline-flex h-11 items-center justify-center gap-2 border border-slate-300 bg-white px-5 text-sm font-medium text-slate-900 transition-colors hover:bg-slate-50"
                            >
                                <ArrowLeft className="h-4 w-4" />
                                Back to Home
                            </Link>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 sm:px-10">
                        <p className="text-xs text-slate-500">
                            If the problem continues, please contact QDelivery
                            support.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}