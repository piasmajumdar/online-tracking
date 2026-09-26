"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiHeadphones } from "react-icons/fi";

export default function OrderSummaryCard({ order }) {
  if (!order || !order.product) return null;

  const { product, pricing } = order;
  const [imageError, setImageError] = useState(false);

  const currencySymbol = product.currency === "BDT" || pricing?.currency === "BDT" ? "৳" : "$";
  const unitPrice = product.unitPrice || 2499;
  const totalPrice = pricing?.total || unitPrice;

  return (
    <div className="bg-white border border-slate-200/80 rounded-lg p-6 mb-6 shadow-xs">
      <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-4">
        Order Summary
      </h3>

      <div className="flex items-center gap-4">
        {/* Product Image Box - Rectangular */}
        <div className="w-16 h-16 rounded-md bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0 overflow-hidden relative shadow-2xs">
          {!imageError && product.image ? (
            <Image
              src={product.image}
              alt={product.name || "Product"}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-slate-100 flex items-center justify-center text-slate-600">
              <FiHeadphones className="w-8 h-8" />
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-slate-800 tracking-tight truncate">
            {product.name || "Wireless Headphones"}
          </h4>
          <p className="text-xs text-slate-500 mt-1 font-medium">
            Qty: {product.quantity || 1}
          </p>
        </div>

        {/* Price */}
        <div className="text-right">
          <span className="text-base font-bold text-slate-900">
            {currencySymbol}{unitPrice.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-slate-100 my-4" />

      {/* Total Row */}
      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-slate-900">
          Total
        </span>
        <span className="text-lg font-extrabold text-slate-900">
          {currencySymbol}{totalPrice.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
