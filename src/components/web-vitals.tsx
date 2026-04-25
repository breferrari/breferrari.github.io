"use client";

import { useEffect } from "react";
import { onCLS, onINP, onLCP, onFCP, onTTFB, type Metric } from "web-vitals";
import { sendGAEvent } from "@next/third-parties/google";

function report(metric: Metric) {
  sendGAEvent("event", metric.name, {
    value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
    metric_id: metric.id,
    metric_value: metric.value,
    metric_rating: metric.rating,
    metric_delta: metric.delta,
    non_interaction: true,
  });
}

export function WebVitals() {
  useEffect(() => {
    onCLS(report);
    onINP(report);
    onLCP(report);
    onFCP(report);
    onTTFB(report);
  }, []);

  return null;
}
