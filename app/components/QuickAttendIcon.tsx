"use client";

import React from "react";

type QuickAttendIconProps = {
  iconName: string;
  type: "outline" | "filled";
  size?: number;
  className?: string;
  onClick?: React.MouseEventHandler;
};

export default function QuickAttendIcon({
  iconName,
  type,
  size = 24,
  className,
  onClick,
}: QuickAttendIconProps) {
  return (
    <img
      src={`/icon/${iconName}-${type}.svg`}
      width={size}
      height={size}
      alt={iconName}
      className={className}
      onClick={onClick}
    />
  );
}

export function ShareIcon() {
  return <QuickAttendIcon iconName="share" type="filled" size={20} />;
}

export function StatisticIcon() {
  return <QuickAttendIcon iconName="statistic" type="filled" size={20} />;
}

export function ScanIcon() {
  return <QuickAttendIcon iconName="scan" type="filled" size={20} />;
}

export function OwnerIcon() {
  return <QuickAttendIcon iconName="person" type="filled" size={16} />;
}

export function LocationIcon() {
  return <QuickAttendIcon iconName="location" type="filled" size={14} />;
}

export function TimeIcon() {
  return <QuickAttendIcon iconName="time" type="filled" size={14} />;
}

export function CalendarIcon() {
  return <QuickAttendIcon iconName="calendar" type="filled" size={14} />;
}

export function RedirectIcon() {
  return (
    <QuickAttendIcon
      iconName="redirect"
      type="outline"
      size={24}
      className="-translate-y-1 cursor-pointer"
      onClick={() => {
        alert("Go to LLE");
      }}
    />
  );
}

export function CompassIcon() {
  return (
    <QuickAttendIcon
      iconName="compass"
      type="outline"
      size={32}
      className="-translate-y-1 cursor-pointer"
      onClick={() => {
        alert("Go to Discovery Page");
      }}
    />
  );
}
