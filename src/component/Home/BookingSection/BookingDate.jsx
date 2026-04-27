import { useState, useMemo } from "react";
import { Calendar, User } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function BookingDate() {
  const formatToDisplay = (date) => {
    if (!date) return "";
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = String(date.getFullYear()).slice(2);
    return `${month}/${day}/${year}`;
  };

  const today = new Date();

  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [travelers, setTravelers] = useState(1);

  const totalNights = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    const diff = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : 0;
  }, [checkIn, checkOut]);

  const handleCheckIn = (date) => {
    setCheckIn(date);
    if (!checkOut || date >= checkOut) {
      const nextDay = new Date(date);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-1">
      <div className="grid grid-cols-2 gap-3 mb-4">
        {/* Check-in */}
        <div className="group border rounded-2xl p-3 flex items-center gap-3 hover:border-orange-800 focus-within:ring-2 focus-within:ring-orange-100 focus-within:border-orange-800 transition-all duration-200 shadow-sm">
          <Calendar className="w-5 h-5 text-gray-400 group-hover:text-orange-800" />
          <div className="flex flex-col w-full">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Check-in
            </span>
            <DatePicker
              selected={checkIn}
              onChange={handleCheckIn}
              minDate={today}
              dateFormat="MM/dd/yy"
              className="text-sm font-semibold outline-none bg-transparent cursor-pointer w-full"
              placeholderText="Select date"
            />
          </div>
        </div>

        {/* Check-out */}
        <div className="group border rounded-2xl p-3 flex items-center gap-3 hover:border-orange-800 focus-within:ring-2 focus-within:ring-orange-100 focus-within:border-orange-800 transition-all duration-200 shadow-sm">
          <Calendar className="w-5 h-5 text-gray-400 group-hover:text-orange-800" />
          <div className="flex flex-col w-full">
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Check-out 
            </span>
            <DatePicker
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
              minDate={checkIn || today}
              dateFormat="MM/dd/yy"
              className="text-sm font-semibold outline-none bg-transparent cursor-pointer w-full"
              placeholderText="Select date"
            />
          </div>
        </div>
      </div>

      {/* Stay Duration Badge */}
      {totalNights > 0 && (
        <div className="flex items-center gap-2 mb-4 px-1">
          <div className="bg-gray-500 text-gray-100 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1.5 border border-orange-100">
            {formatToDisplay(checkIn)} - {formatToDisplay(checkOut)} ({totalNights} {totalNights === 1 ? "night" : "nights"})
          </div>
        </div>
      )}

      {/* Travelers Counter */}
      <div className="border rounded-2xl p-4 flex items-center justify-between mb-6 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gray-50 rounded-full">
            <User className="w-5 h-5 text-gray-600" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              Travelers
            </span>
            <div className="text-sm font-bold text-gray-800">
              {travelers} {travelers === 1 ? "Guest" : "Guests"}
            </div>
          </div>
        </div>

        <div className="flex items-center bg-gray-50 p-1 rounded-full border border-gray-100">
          <button
            onClick={() => setTravelers((prev) => Math.max(1, prev - 1))}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all text-lg font-medium"
          >
            −
          </button>
          <span className="text-sm font-bold w-10 text-center text-gray-700">
            {travelers}
          </span>
          <button
            onClick={() => setTravelers((prev) => prev + 1)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm border border-gray-200 hover:bg-gray-50 active:scale-95 transition-all text-lg font-medium"
          >
            +
          </button>
        </div>
      </div>

      <button
        disabled={!checkIn || !checkOut || totalNights === 0}
        className={`w-full py-4 rounded-2xl font-bold text-white text-sm uppercase tracking-widest shadow-lg transition-all duration-300 
        ${
          checkIn && checkOut && totalNights > 0
            ? "bg-[#8a4e15] hover:bg-[#6b3c10] hover:shadow-orange-200 active:scale-[0.98]"
            : "bg-gray-200 text-gray-400 cursor-not-allowed shadow-none"
        }`}
      >
        {totalNights > 0 ? `Reserve for ${totalNights} Nights` : "Check Availability"}
      </button>
    </div>
  );
}