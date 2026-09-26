"use client";

import React from "react";
import { FiTruck, FiAlertTriangle, FiCheck, FiClock, FiPackage } from "react-icons/fi";

export default function CurrentStatusCard({ order, onAction }) {
  if (!order) return null;

  const { status, currentStatus, order: orderInfo } = order;
  const estimatedDelivery = orderInfo?.estimatedDelivery;

  // Render DELIVERED BUT NOT RECEIVED condition
  if (status === "delivered_not_received") {
    return (
      <div className="space-y-4 mb-6 transition-all duration-300 ease-in-out">
        {/* Main Delivered Status Banner */}
        <div className="bg-emerald-50/90 border border-emerald-200/80 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="flex items-start sm:items-center gap-4">
            {/* Rectangular Badge */}
            <div className="w-12 h-12 rounded-md bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-xs">
              <FiCheck className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-emerald-800 tracking-tight">
                {currentStatus?.title || "Marked as Delivered"}
              </h3>
              <p className="text-sm text-emerald-700/90 mt-0.5">
                {currentStatus?.description || "Your package was delivered."}
              </p>
            </div>
          </div>

          <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-emerald-200/60">
            <span className="text-xs font-semibold text-emerald-600 block uppercase tracking-wider">
              Delivered on
            </span>
            <span className="text-base font-bold text-slate-800">
              {estimatedDelivery?.date ? `${formatDate(estimatedDelivery.date)}, ${estimatedDelivery.time}` : "25 Sep 2026, 3:42 PM"}
            </span>
          </div>
        </div>

        {/* Didn't receive package Alert Banner */}
        <div className="bg-amber-50/90 border border-amber-200/90 rounded-lg p-5 shadow-xs">
          <div className="flex items-start gap-4">
            {/* Rectangular Badge */}
            <div className="w-12 h-12 rounded-md bg-amber-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <FiPackage className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-base font-bold text-amber-900">
                Didn't receive your package?
              </h4>
              <p className="text-sm text-amber-800/90 mt-1 leading-relaxed">
                The courier has marked this order as delivered, but you reported that you haven't received it.
              </p>

              {/* Action Buttons - Rectangular styling */}
              <div className="flex flex-wrap items-center gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => onAction && onAction("report_missing_delivery")}
                  className="px-5 py-2.5 rounded-md bg-black hover:bg-neutral-800 text-white font-semibold text-sm transition-colors shadow-xs active:scale-[0.99] border border-black"
                >
                  Report Missing Delivery
                </button>
                <button
                  type="button"
                  onClick={() => onAction && onAction("contact_support")}
                  className="px-5 py-2.5 rounded-md bg-white hover:bg-neutral-100 text-black border border-black font-semibold text-sm transition-colors shadow-xs active:scale-[0.99]"
                >
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render DELAYED ORDER condition
  if (status === "delayed") {
    return (
      <div className="bg-orange-50/90 border border-orange-200/90 rounded-lg p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs transition-all duration-300 ease-in-out">
        <div className="flex items-start sm:items-center gap-4">
          {/* Rectangular Badge */}
          <div className="w-12 h-12 rounded-md bg-orange-600 text-white flex items-center justify-center shrink-0 shadow-xs">
            <FiAlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-orange-800 tracking-tight">
              {currentStatus?.title || "Delivery Delayed"}
            </h3>
            <p className="text-sm text-orange-700/90 mt-0.5">
              {currentStatus?.description || "Your order is taking longer than expected."}
            </p>
          </div>
        </div>

        <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-orange-200/60">
          <span className="text-xs font-semibold text-orange-700 block uppercase tracking-wider">
            Updated Estimated Delivery
          </span>
          <span className="text-base font-bold text-orange-700 block mt-0.5">
            {estimatedDelivery?.label ? `${estimatedDelivery.label}, ${estimatedDelivery.time}` : "Tomorrow, 2:00 – 5:00 PM"}
          </span>
          {estimatedDelivery?.originalTime && (
            <span className="text-xs font-medium text-slate-500 block mt-0.5">
              Originally: {estimatedDelivery.originalDate ? `${formatDate(estimatedDelivery.originalDate)}, ` : "Today, "}{estimatedDelivery.originalTime}
            </span>
          )}
        </div>
      </div>
    );
  }

  // Render TRACKING NOT AVAILABLE YET condition
  if (status === "tracking_unavailable") {
    return (
      <div className="bg-slate-50/90 border border-slate-200/90 rounded-lg p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs transition-all duration-300 ease-in-out">
        <div className="flex items-start sm:items-center gap-4">
          {/* Rectangular Badge */}
          <div className="w-12 h-12 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center shrink-0 border border-slate-300">
            <FiClock className="w-6 h-6" />
          </div>
          <div className="max-w-xl">
            <h3 className="text-lg font-bold text-slate-800 tracking-tight">
              {currentStatus?.title || "Tracking not available yet"}
            </h3>
            <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
              {currentStatus?.description ||
                "Your order has been confirmed, but tracking information isn't available yet. We'll update this page once your package is handed over to the courier."}
            </p>
          </div>
        </div>

        <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-200/80 shrink-0">
          <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
            Estimated Delivery
          </span>
          <span className="text-base font-bold text-slate-800 block mt-0.5">
            {estimatedDelivery?.label || "28 – 30 Sep 2026"}
          </span>
        </div>
      </div>
    );
  }

  // Render NORMAL ORDER (in_transit) condition default
  return (
    <div className="bg-blue-50/90 border border-blue-100 rounded-lg p-5 mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs transition-all duration-300 ease-in-out">
      <div className="flex items-start sm:items-center gap-4">
        {/* Rectangular Badge */}
        <div className="w-12 h-12 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 border border-blue-200">
          <FiTruck className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-blue-700 tracking-tight">
            {currentStatus?.title || "On the way"}
          </h3>
          <p className="text-sm text-slate-600 mt-0.5">
            {currentStatus?.description || "Your package is on its way to the destination city."}
          </p>
        </div>
      </div>

      <div className="sm:text-right border-t sm:border-t-0 pt-3 sm:pt-0 border-blue-200/60 shrink-0">
        <span className="text-xs font-semibold text-slate-500 block uppercase tracking-wider">
          Estimated Delivery
        </span>
        <span className="text-base font-bold text-slate-900 block mt-0.5">
          {estimatedDelivery?.label ? `${estimatedDelivery.label}, ${estimatedDelivery.time}` : "Today, 6:00 – 8:00 PM"}
        </span>
      </div>
    </div>
  );
}

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch (e) {
    return dateStr;
  }
}
