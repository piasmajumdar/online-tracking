"use client";

import React from "react";

export default function SupportSection({ order, onAction }) {
  if (!order || !order.support) return null;

  const isTrackingUnavailable = order.status === "tracking_unavailable";
  const isDeliveredNotReceived = order.status === "delivered_not_received";

  return (
    <div className="bg-white border border-slate-200/80 rounded-lg p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
      <div>
        <h4 className="text-base font-bold text-slate-900 tracking-tight">
          Need help with your delivery?
        </h4>
        <p className="text-xs text-slate-500 mt-0.5">
          Our support team is here to help you.
        </p>
      </div>

      {/* Action Buttons - Black and White Theme */}
      <div className="flex flex-wrap items-center gap-3 shrink-0">
        {isTrackingUnavailable ? (
          <button
            type="button"
            onClick={() => onAction && onAction("contact_support")}
            className="px-5 py-2.5 rounded-md bg-white hover:bg-neutral-100 text-black border border-black font-semibold text-sm transition-colors shadow-2xs active:scale-[0.99]"
          >
            Contact Support
          </button>
        ) : isDeliveredNotReceived ? (
          <>
            <button
              type="button"
              onClick={() => onAction && onAction("report_missing_delivery")}
              className="px-5 py-2.5 rounded-md bg-black hover:bg-neutral-800 text-white border border-black font-semibold text-sm transition-colors shadow-xs active:scale-[0.99]"
            >
              Report Missing Delivery
            </button>
            <button
              type="button"
              onClick={() => onAction && onAction("contact_support")}
              className="px-5 py-2.5 rounded-md bg-white hover:bg-neutral-100 text-black border border-black font-semibold text-sm transition-colors shadow-2xs active:scale-[0.99]"
            >
              Contact Support
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              onClick={() => onAction && onAction("contact_support")}
              className="px-5 py-2.5 rounded-md bg-white hover:bg-neutral-100 text-black border border-black font-semibold text-sm transition-colors shadow-2xs active:scale-[0.99]"
            >
              Contact Support
            </button>
            <button
              type="button"
              onClick={() => onAction && onAction("report_issue")}
              className="px-5 py-2.5 rounded-md bg-white hover:bg-neutral-100 text-black border border-black font-semibold text-sm transition-colors shadow-2xs active:scale-[0.99]"
            >
              Report Delivery Issue
            </button>
          </>
        )}
      </div>
    </div>
  );
}
