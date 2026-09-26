"use client";

import React, { useState } from "react";
import { FiSearch, FiX } from "react-icons/fi";

export default function OrderSearchAndTabs({
  allOrders,
  onSelectOrder,
  onNotFound,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const term = searchTerm.trim().toLowerCase();

    if (!term) return;

    // Find matching order
    const match = (allOrders || []).find((item) => {
      const displayId = (item.displayId || "").toLowerCase();
      const orderId = (item.orderId || "").toLowerCase();
      const productName = (item.product?.name || "").toLowerCase();
      const statusStr = (item.status || "").toLowerCase().replace(/_/g, " ");

      return (
        displayId === term ||
        orderId === term ||
        displayId.includes(term) ||
        orderId.includes(term) ||
        productName.includes(term) ||
        statusStr.includes(term)
      );
    });

    if (match) {
      onSelectOrder(match);
    } else {
      onNotFound(searchTerm.trim());
    }
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="w-full mb-8">
      <form onSubmit={handleSearchSubmit} className="flex items-center w-full">
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <FiSearch className="w-5 h-5" />
          </div>

          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Enter Order ID (e.g. ORD-10245, QD-100001)..."
            className="w-full pl-12 pr-10 py-3.5 bg-white border border-slate-300 rounded-l-lg text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all shadow-xs"
          />

          {searchTerm && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="Clear search"
            >
              <FiX className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Rectangular Search Button - Black and White Theme */}
        <button
          type="submit"
          className="px-6 py-3.5 bg-black hover:bg-neutral-800 text-white font-semibold text-sm rounded-r-lg transition-colors flex items-center gap-2 shrink-0 shadow-xs active:scale-[0.99] border border-black"
        >
          <FiSearch className="w-4 h-4 stroke-[2.5]" />
          <span>Search</span>
        </button>
      </form>
    </div>
  );
}
