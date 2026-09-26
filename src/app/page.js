"use client";

import React, { useState } from "react";
import { data } from "@/data";
import { FiSearch, FiAlertCircle } from "react-icons/fi";
import TopDeliveryProgress from "./components/TopDeliveryProgress";
import CurrentStatusCard from "./components/CurrentStatusCard";
import DetailedCourierTimeline from "./components/DetailedCourierTimeline";
import OrderSummaryCard from "./components/OrderSummaryCard";
import SupportSection from "./components/SupportSection";
import OrderSearchAndTabs from "./components/OrderSearchAndTabs";

export default function Home() {
  const ordersList = data?.orders || [];
  // Default to the first order (in_transit / ORD-10245 / QD-100001)
  const [selectedOrder, setSelectedOrder] = useState(ordersList[0] || null);
  const [notFoundTerm, setNotFoundTerm] = useState(null);
  const [actionNotification, setActionNotification] = useState(null);

  const handleSelectOrder = (order) => {
    setSelectedOrder(order);
    setNotFoundTerm(null);
    setActionNotification(null);
  };

  const handleNotFound = (term) => {
    setSelectedOrder(null);
    setNotFoundTerm(term);
    setActionNotification(null);
  };

  const handleAction = (actionType) => {
    let message = "";
    if (actionType === "contact_support") {
      message = "Redirecting to Live Customer Support...";
    } else if (actionType === "report_issue") {
      message = "Opening Delivery Issue Reporting form...";
    } else if (actionType === "report_missing_delivery") {
      message = "Report submitted! Our team is investigating your missing delivery.";
    }

    setActionNotification(message);
    setTimeout(() => {
      setActionNotification(null);
    }, 4000);
  };

  const displayOrderNumber = selectedOrder?.displayId || selectedOrder?.orderId || "ORD-10245";
  const placedDateFormatted = formatPlacedDate(selectedOrder?.order?.placedAt);

  return (
    <main className="min-h-screen bg-slate-50/60 pb-16 pt-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Search Bar Component */}
        <OrderSearchAndTabs
          allOrders={ordersList}
          onSelectOrder={handleSelectOrder}
          onNotFound={handleNotFound}
        />

        {/* Action Toast Notification */}
        {actionNotification && (
          <div className="mb-6 p-4 bg-slate-900 text-white rounded-lg shadow-md flex items-center justify-between animate-fade-in">
            <span className="text-sm font-medium">{actionNotification}</span>
            <button
              type="button"
              onClick={() => setActionNotification(null)}
              className="text-xs text-slate-400 hover:text-white underline ml-4"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* ORDER NOT FOUND STATE */}
        {notFoundTerm ? (
          <div className="bg-white border border-slate-200/90 rounded-lg p-8 text-center space-y-4 shadow-xs mb-8">
            <div className="w-14 h-14 bg-red-50 text-red-500 rounded-md flex items-center justify-center mx-auto border border-red-100">
              <FiAlertCircle className="w-7 h-7" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Order Not Found
              </h2>
              <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                We couldn't find any tracking information matching{" "}
                <span className="font-semibold text-slate-900">"{notFoundTerm}"</span>.
                Please check the Order ID and try again.
              </p>
            </div>

            {/* Suggestions to easily find valid orders */}
            <div className="pt-4 border-t border-slate-100">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                Try searching for these available orders:
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                {ordersList.map((ord) => (
                  <button
                    key={ord.orderId}
                    type="button"
                    onClick={() => handleSelectOrder(ord)}
                    className="px-3.5 py-2 rounded-md bg-white hover:bg-neutral-100 text-black border border-black text-xs font-semibold transition-colors shadow-2xs"
                  >
                    #{ord.displayId || ord.orderId}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : selectedOrder ? (
          <>
            {/* ORDER HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-6 pb-2 gap-2 border-b border-slate-200/80">
              <div>
                <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                  Order Tracking
                </h1>
              </div>
              <div className="sm:text-right">
                <div className="text-sm font-bold text-slate-900">
                  Order #{displayOrderNumber}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  Placed on {placedDateFormatted}
                </div>
              </div>
            </div>

            {/* 1. TOP DELIVERY PROGRESS BAR */}
            <TopDeliveryProgress order={selectedOrder} />

            {/* 2. CURRENT STATUS CARD / BANNERS */}
            <CurrentStatusCard order={selectedOrder} onAction={handleAction} />

            {/* 3. DETAILED COURIER TIMELINE */}
            <DetailedCourierTimeline order={selectedOrder} />

            {/* 4. ORDER SUMMARY CARD */}
            <OrderSummaryCard order={selectedOrder} />

            {/* 5. SUPPORT SECTION */}
            <SupportSection order={selectedOrder} onAction={handleAction} />
          </>
        ) : null}

      </div>
    </main>
  );
}

function formatPlacedDate(isoString) {
  if (!isoString) return "25 Sep 2026";
  try {
    const d = new Date(isoString);
    const day = d.getDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[d.getMonth()];
    const year = d.getFullYear();
    return `${day} ${month} ${year}`;
  } catch (e) {
    return "25 Sep 2026";
  }
}
