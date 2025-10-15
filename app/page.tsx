"use client";

import { useEffect, useRef, useState } from "react";
import MyEventCard from "./components/MyEventCard";
import { HandleEventButton } from "./components/QuickAttendButton";
import {
  CompassIcon,
  RedirectIcon,
  SortIcon,
  UpIcon,
} from "./components/QuickAttendIcon";
import PastEventCard from "./components/PastEventCard";

export default function Home() {
  // === Mock Data ===
  const eventName = "Freshmen night";
  const eventDate = "3 สิงหาคม 2568";
  const eventTimeRange = "16:00 - 20:00 น.";
  const eventLocation = "สนามกีฬาจุฬาลงกรณ์มหาวิทยาลัย";
  const eventDescription =
    "กิจกรรมต้อนรับนิสิตใหม่ CU รุ่น 109 สู่รั้วมหาวิทยาลัย และ กระชับสัมพันธ์ อันดีระหว่างน้องใหม่คณะต่างๆภาย ในงานมีการจัด แสดงดนตรีโดยวงดนตรี อาทิเช่น Landokmai, Dept, Polycat, Tilly Birds, การแสดง พิเศษจาก CUDC และละครนิเทศ จุฬาฯ";
  const eventOwner = "ผู้จัดการกิจกรรม";
  // =================

  const [sortOption, setSortOption] = useState<0 | 1 | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  // When there's a change in sort option
  useEffect(() => {
    if (sortOption == 0) {
      // Newest - Oldest
      alert("Sorting from new to old");
    } else if (sortOption == 1) {
      // Oldest - Newest
      alert("Sorting from old to new");
    }
  }, [sortOption]);

  return (
    <div
      ref={scrollRef}
      className="w-full h-screen overflow-auto relative flex flex-col gap-12 px-8 py-12"
    >
      {/* My Events */}
      <div>
        {/* Header */}
        <div className="flex justify-between gap-4 mb-6">
          <h1 className="headline-small-emphasized text-neutral-600">
            กิจกรรมของฉัน
          </h1>
          <CompassIcon />
        </div>

        {/* Number of Results */}
        <div className="flex justify-between items-center gap-4 mb-4">
          <p className="label-small-primary text-neutral-600">
            แสดงกิจกรรม 3 จาก 6
          </p>
          <div className="flex items-center gap-2">
            <p className="label-large-primary text-neutral-600">ดูทั้งหมด</p>
            <RedirectIcon />
          </div>
        </div>

        {/* Events */}
        <div className="flex flex-col gap-4 mb-6">
          {["1", "2", "3"].map((id) => {
            return (
              <MyEventCard
                key={id}
                id={id}
                name={eventName}
                date={eventDate}
                timeRange={eventTimeRange}
                location={eventLocation}
                description={eventDescription}
                owner={eventOwner}
              />
            );
          })}
        </div>

        {/* Button */}
        <div className="flex flex-col items-center gap-2">
          <HandleEventButton />
          <p className="label-small-primary text-neutral-400">
            เข้าสู่ Backoffice เพื่อจัดการและแก้ไขกิจกรรม
          </p>
        </div>
      </div>

      {/* Past Events */}
      <div>
        {/* Header */}
        <div className="flex justify-between gap-4 mb-6">
          <h1 className="headline-small-emphasized text-neutral-600">
            กิจกรรมที่ผ่านมา
          </h1>
          <SortIcon setSortOption={setSortOption} />
        </div>

        {/* Events */}
        <div className="flex flex-col gap-4 mb-6">
          {["1", "2", "3"].map((id) => {
            return (
              <PastEventCard
                key={id}
                id={id}
                name={eventName}
                date={eventDate}
                timeRange={eventTimeRange}
                location={eventLocation}
                description={eventDescription}
                owner={eventOwner}
                displayFirstRow={true}
              />
            );
          })}
        </div>
      </div>

      {/* Go to Top Button */}
      <button
        className="fixed right-8 bottom-12 p-4 w-14 h-14 rounded-full bg-primary z-50 cursor-pointer"
        onClick={() =>
          scrollRef.current?.scrollTo({ top: 0, behavior: "smooth" })
        }
      >
        <UpIcon />
      </button>
    </div>
  );
}
