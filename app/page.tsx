import MyEventCard from "./components/MyEventCard";
import QuickAttendButton, {
  HandleEventButton,
} from "./components/QuickAttendButton";
import { CompassIcon, RedirectIcon } from "./components/QuickAttendIcon";

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

  return (
    <div className="w-full h-screen overflow-auto flex flex-col px-8 py-12">
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
    </div>
  );
}
