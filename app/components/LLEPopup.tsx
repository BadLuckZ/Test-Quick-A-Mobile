import QuickAttendButton from "./QuickAttendButton";

interface LLEPopupProps {
  setOpenLLEPopup: (b: boolean) => void;
}

export default function LLEPopup({ setOpenLLEPopup }: LLEPopupProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-neutral-black/70">
      <div className="relative bg-neutral-white w-[349px] rounded-4xl p-4">
        <h3 className="headline-small-emphasized mb-4 text-center">
          แจ้งเตือน
        </h3>
        <p className="label-large-primary mb-6 text-center">
          บริการที่เลือกจะนำท่านไปสู่เว็บไซต์ของผู้ให้บริการที่อยู่ภาย
          นอกแอปพลิเคชัน ท่านยืนยันจะใช้บริการต่อหรือไม่
        </p>
        <div className="flex justify-center items-center gap-2 flex-wrap">
          <QuickAttendButton
            variant="outline"
            width={150}
            onClick={() => {
              setOpenLLEPopup(false);
            }}
          >
            <p className="translate-y-1">ยกเลิก</p>
          </QuickAttendButton>
          <QuickAttendButton
            variant="filled"
            width={150}
            onClick={() => {
              alert("Go to LLE!");
              setOpenLLEPopup(false);
            }}
          >
            <p className="translate-y-1">ตกลง</p>
          </QuickAttendButton>
        </div>
      </div>
    </div>
  );
}
