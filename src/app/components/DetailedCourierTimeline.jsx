"use client";

import React from "react";
import { FiCheck, FiAlertTriangle, FiTarget } from "react-icons/fi";

export default function DetailedCourierTimeline({ order }) {
  if (!order || !order.tracking || !order.tracking.events) return null;

  const events = order.tracking.events;
  const isDeliveredNotReceived = order.status === "delivered_not_received";
  const isDelayed = order.status === "delayed";

  return (
    <div className="bg-white border border-slate-200/80 rounded-lg p-6 mb-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-5">
        Tracking Details
      </h3>

      <div className="relative pl-2 space-y-3">
        {events.map((event, index) => {
          const isLast = index === events.length - 1;
          const isCompleted = isDeliveredNotReceived || event.status === "completed";
          const isCurrent = !isDeliveredNotReceived && event.status === "current";
          const isDelayedEvent = !isDeliveredNotReceived && (event.status === "delayed" || (isDelayed && isCurrent));

          // Determine node styling - RECTANGULAR DESIGN
          let nodeClasses = "z-10 flex items-center justify-center w-6 h-6 rounded-md font-semibold text-xs transition-all duration-300 border shrink-0 ";

          if (isDeliveredNotReceived || isCompleted) {
            nodeClasses += isDeliveredNotReceived
              ? "bg-emerald-600 border-emerald-600 text-white"
              : "bg-blue-600 border-blue-600 text-white";
          } else if (isDelayedEvent) {
            nodeClasses += "bg-orange-600 border-orange-600 text-white ring-4 ring-orange-100";
          } else if (isCurrent) {
            nodeClasses += "bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100";
          } else {
            nodeClasses += "bg-slate-100 border-slate-300 text-slate-400";
          }

          // Row highlighting for active / delayed step
          let rowContainerClasses = "flex items-start gap-4 p-2.5 rounded-lg transition-all duration-200 ";
          if (isDelayedEvent) {
            rowContainerClasses += "bg-orange-50/90 border border-orange-200/90 shadow-2xs";
          } else if (isCurrent) {
            rowContainerClasses += "bg-blue-50/80 border border-blue-100 shadow-2xs";
          } else {
            rowContainerClasses += "hover:bg-slate-50/60";
          }

          return (
            <div key={event.id || index} className="relative flex items-start gap-3 group">

              {/* Vertical line segment connecting nodes */}
              {!isLast && (
                <div
                  className={`absolute left-[11px] top-6 bottom-0 w-[2px] -mb-3 z-0 ${isCompleted || isDeliveredNotReceived
                    ? isDeliveredNotReceived
                      ? "bg-emerald-600"
                      : "bg-blue-600"
                    : isDelayedEvent
                      ? "bg-orange-300"
                      : "bg-slate-200"
                    }`}
                />
              )}

              {/* Node Icon Badge - Rectangular */}
              <div className="pt-0.5 z-10">
                <div className={nodeClasses}>
                  {isCompleted || isDeliveredNotReceived ? (
                    <FiCheck className="w-3.5 h-3.5 stroke-[3]" />
                  ) : isDelayedEvent ? (
                    <FiAlertTriangle className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : isCurrent ? (
                    <FiTarget className="w-3.5 h-3.5 stroke-[2.5]" />
                  ) : (
                    <FiCheck className="w-3 h-3 opacity-40" />
                  )}
                </div>
              </div>

              {/* Content Container */}
              <div className={`flex flex-col md:flex-row items-start ${rowContainerClasses}`}>
                <div className="flex-1 min-w-0">
                  <h4
                    className={`text-sm font-semibold tracking-tight ${isDelayedEvent
                      ? "text-orange-800 font-bold"
                      : isCurrent
                        ? "text-blue-700 font-bold"
                        : isCompleted || isDeliveredNotReceived
                          ? "text-slate-800 font-semibold"
                          : "text-slate-400 font-normal"
                      }`}
                  >
                    {event.title}
                  </h4>

                  {/* Subtitle / Status detail text */}
                  {isCurrent && !isDelayedEvent && (
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      Currently at this location
                    </p>
                  )}

                  {isDelayedEvent && (
                    <p className="text-xs font-semibold text-orange-600 mt-0.5">
                      {event.description || "Delayed – awaiting transportation"}
                    </p>
                  )}

                  {!isCurrent && !isDelayedEvent && event.description && (
                    <p
                      className={`text-xs mt-0.5 ${isCompleted || isDeliveredNotReceived
                        ? "text-slate-500"
                        : "text-slate-400"
                        }`}
                    >
                      {event.description}
                    </p>
                  )}
                </div>

                {/* Event Timestamp */}
                {event.timestamp && (
                  <div className="text-xs font-medium text-slate-500 whitespace-nowrap pt-0.5">
                    {formatEventTimestamp(event.timestamp)}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function formatEventTimestamp(isoString) {
  if (!isoString) return "";
  try {
    const d = new Date(isoString);
    const day = d.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();

    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 hour should be 12

    return `${day} ${month} ${year}, ${hours}:${minutes} ${ampm}`;
  } catch (e) {
    return isoString;
  }
}
