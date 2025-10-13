import React from "react";

type QuickAttendIconProps = {
  iconName: string;
  type: "outline" | "filled";
  size?: number;
};

export default function QuickAttendIcon({
  iconName,
  type,
  size = 24,
}: QuickAttendIconProps) {
  return (
    <img
      src={`/icon/${iconName}-${type}.svg`}
      width={size}
      height={size}
      alt={iconName}
    />
  );
}
