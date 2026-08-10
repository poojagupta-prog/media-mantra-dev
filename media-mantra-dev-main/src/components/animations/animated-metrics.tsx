"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

interface AnimatedMetricProps {
  value: number;
  label: string;
  format?: "number" | "percentage" | "currency" | "multiplier";
  suffix?: string;
  prefix?: string;
  duration?: number;
  delay?: number;
  className?: string;
  valueClassName?: string;
  labelClassName?: string;
}

export function AnimatedMetric({
  value,
  label,
  format = "number",
  suffix = "",
  prefix = "",
  duration = 2000,
  delay = 0,
  className,
  valueClassName,
  labelClassName,
}: AnimatedMetricProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | undefined>(undefined);
  const hasAnimatedRef = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const formatValue = useCallback(
    (val: number): string => {
      let formattedValue: string;

      switch (format) {
        case "percentage":
          formattedValue = `${Math.round(val)}%`;
          break;
        case "currency":
          formattedValue = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(val);
          break;
        case "multiplier":
          formattedValue = val.toFixed(1).replace(/\.0$/, "");
          break;
        case "number":
        default:
          formattedValue =
            val >= 10000
              ? new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(Math.round(val))
              : Math.round(val).toString();
          break;
      }

      return `${prefix}${formattedValue}${suffix}`;
    },
    [format, prefix, suffix],
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    const animateValue = (endValue: number, animationDuration: number, startDelay: number) => {
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime - startDelay;

        if (elapsed < 0) {
          animationRef.current = requestAnimationFrame(animate);
          return;
        }

        const progress = Math.min(elapsed / animationDuration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = endValue * easeOut;

        setDisplayValue(currentValue);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setDisplayValue(endValue);
        }
      };

      animationRef.current = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateValue(value, duration, delay);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, delay]);

  return (
    <div ref={containerRef} className={cn("relative flex flex-col", className)}>
      <p
        className={cn(
          "font-display text-[clamp(2.25rem,4vw,3.25rem)] font-semibold tabular-nums tracking-tight text-mm-gold",
          valueClassName,
        )}
      >
        {formatValue(displayValue)}
      </p>
      <p
        className={cn(
          "mt-6 text-[11px] font-semibold uppercase leading-snug tracking-[0.18em] text-mm-cream/95",
          labelClassName,
        )}
      >
        {label}
      </p>
    </div>
  );
}

interface AnimatedMetricsGridProps {
  metrics: Array<{
    value: number;
    label: string;
    format?: "number" | "percentage" | "currency" | "multiplier";
    suffix?: string;
    prefix?: string;
    dek?: string;
  }>;
  className?: string;
  staggerDelay?: number;
  showDek?: boolean;
}

export function AnimatedMetricsGrid({
  metrics,
  className,
  staggerDelay = 200,
  showDek = true,
}: AnimatedMetricsGridProps) {
  return (
    <div className={cn("grid gap-14 sm:grid-cols-2 sm:gap-16 lg:grid-cols-5 lg:gap-0 lg:gap-y-0", className)}>
      {metrics.map((metric, index) => (
        <div
          key={`${metric.label}-${index}`}
          className={cn(
            "relative flex flex-col lg:border-l lg:px-6 xl:px-8 lg:first:border-l-0 lg:first:pl-0",
            index % 2 === 0 ? "lg:border-mm-cream/[0.1]" : "lg:border-mm-gold/[0.22]",
          )}
        >
          <AnimatedMetric
            value={metric.value}
            label={metric.label}
            format={metric.format}
            suffix={metric.suffix}
            prefix={metric.prefix}
            delay={index * staggerDelay}
            duration={2100}
          />
          {showDek && metric.dek ? (
            <p className="mt-3 font-editorial text-sm leading-relaxed text-mm-light md:text-[15px]">{metric.dek}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export function useAnimatedMetric(
  value: number,
  options: {
    duration?: number;
    delay?: number;
    format?: "number" | "percentage" | "currency" | "multiplier";
    autoStart?: boolean;
  } = {},
) {
  const [displayValue, setDisplayValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number | undefined>(undefined);

  const { duration = 2000, delay = 0, format = "number", autoStart = false } = options;

  const startAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime - delay;

      if (elapsed < 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = value * easeOut;

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setDisplayValue(0);
    setIsAnimating(false);
  };

  useEffect(() => {
    if (autoStart) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, autoStart]);

  return {
    displayValue,
    isAnimating,
    startAnimation,
    resetAnimation,
  };
}
