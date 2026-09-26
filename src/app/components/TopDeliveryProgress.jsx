"use client";

import React from "react";

export default function TopDeliveryProgress({ order }) {
  if (!order || !order.progress) return null;

  const isDeliveredNotReceived = order.status === "delivered_not_received";
  const isDelayed = order.status === "delayed";

  return (
    <div className="w-full bg-white border border-slate-200/80 rounded-lg p-6 mb-6 shadow-xs">
      <div className="relative flex items-center justify-between">
        
        {/* Progress Connecting Line */}
        <div className="absolute top-4 left-6 right-6 -translate-y-1/2 h-1 bg-slate-200 z-0">
          <div
            className={`h-full transition-all duration-500 ease-in-out ${
              isDeliveredNotReceived ? "bg-emerald-600" : "bg-blue-600"
            }`}
            style={{
              width: getLineWidthPercentage(order.progress, isDeliveredNotReceived),
            }}
          />
        </div>

        {/* Progress Steps */}
        {order.progress.map((step, index) => {
          const isCompleted = isDeliveredNotReceived || step.status === "completed";
          const isCurrent = !isDeliveredNotReceived && step.status === "current";

          // Base badge styling - STRICTLY RECTANGULAR (rounded-sm or rounded-md)
          let nodeClasses = "z-10 flex items-center justify-center w-8 h-8 rounded-md transition-all duration-300 font-semibold text-xs border ";

          if (isDeliveredNotReceived || isCompleted) {
            nodeClasses += isDeliveredNotReceived
              ? "bg-emerald-600 border-emerald-600 text-white shadow-xs"
              : "bg-blue-600 border-blue-600 text-white shadow-xs";
          } else if (isCurrent) {
            if (isDelayed) {
              nodeClasses += "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100 shadow-xs";
            } else {
              nodeClasses += "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100 shadow-xs";
            }
          } else {
            nodeClasses += "bg-slate-100 border-slate-300 text-slate-400";
          }

          return (
            <div key={step.id || index} className="relative z-10 flex flex-col items-center group">
              {/* Rectangular Step Badge */}
              <div className={nodeClasses}>
                {isCompleted || isDeliveredNotReceived ? (
                  <svg
                    className="w-4 h-4 stroke-[3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : isCurrent ? (
                  <svg
                    className="w-4 h-4 stroke-[3]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-3.5 h-3.5 opacity-60"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </div>

              {/* Step Label */}
              <span
                className={`mt-2.5 text-xs font-semibold tracking-tight transition-colors ${
                  isCompleted || isDeliveredNotReceived
                    ? isDeliveredNotReceived
                      ? "text-emerald-700"
                      : "text-slate-800"
                    : isCurrent
                    ? "text-blue-600 font-bold"
                    : "text-slate-400"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function getLineWidthPercentage(progress, isDeliveredNotReceived) {
  if (!progress || progress.length === 0) return "0%";
  if (isDeliveredNotReceived) return "100%";

  let lastCompletedIndex = -1;
  progress.forEach((step, index) => {
    if (step.status === "completed" || step.status === "current") {
      lastCompletedIndex = index;
    }
  });

  if (lastCompletedIndex <= 0) return "0%";
  const percentage = (lastCompletedIndex / (progress.length - 1)) * 100;
  return `${percentage}%`;
}
