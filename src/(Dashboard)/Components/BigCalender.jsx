import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Icon } from "@iconify/react/dist/iconify.js";

// Function to get YYYY-MM-DD for specific weekday in current or next week
function getDateForWeekday(weekday, weekOffset = 0) {
  const today = new Date();
  const currentDay = today.getDay();
  const target = new Date(today);

  // Move to target weekday (e.g., Monday = 1)
  target.setDate(today.getDate() - currentDay + weekday + weekOffset * 7);

  // Return formatted date (YYYY-MM-DD)
  const y = target.getFullYear();
  const m = String(target.getMonth() + 1).padStart(2, "0");
  const d = String(target.getDate()).padStart(2, "0");

  return `${y}-${m}-${d}`;
}
const calendarEvents = [
  // Monday (e.g., 2025-10-20)
  {
    title: "Physics Master Class",
    start: `${getDateForWeekday(1)}T9:00:00`, // Start time
    end: `${getDateForWeekday(1)}T10:30:00`, // End time
    color: "#a9c1d3", // Custom color for
  },
  {
    title: "Math Master Class",
    start: `${getDateForWeekday(1)}T11:00:00`,
    end: `${getDateForWeekday(1)}T12:30:00`,
    color: "#e83831", // Custom color for Math
  },
  // Tuesday (e.g., 2025-10-21)
  {
    title: "English Master Class",
    start: `${getDateForWeekday(2)}T10:00:00`,
    end: `${getDateForWeekday(2)}T11:30:00`,
    color: "#bb9e7f", // Custom color for English
  },
  {
    title: "Chemistry Master Class",
    start: `${getDateForWeekday(2)}T13:00:00`,
    end: `${getDateForWeekday(2)}T14:30:00`,
    color: "#f8bd00", // Custom color for Chemistry
  },
  // Wednesday (e.g., 2025-10-22)
  {
    title: "Physics Master Class",
    start: `${getDateForWeekday(3)}T9:00:00`,
    end: `${getDateForWeekday(3)}T10:30:00`,
    color: "#a9c1d3",
  },
  {
    title: "History Lecture",
    start: `${getDateForWeekday(3)}T14:00:00`,
    end: `${getDateForWeekday(3)}T15:30:00`,
    color: "#9c27b0", // Custom color for History
  },
  // Thursday (e.g., 2025-10-23)
  {
    title: "Math Master Class",
    start: `${getDateForWeekday(4)}T11:00:00`,
    end: `${getDateForWeekday(4)}T12:30:00`,
    color: "#e83831",
  },
  {
    title: "English Master Class",
    start: `${getDateForWeekday(4)}T15:00:00`,
    end: `${getDateForWeekday(4)}T16:30:00`,
    color: "#bb9e7f",
  },
  // Friday (e.g., 2025-10-24)
  {
    title: "Chemistry Master Class",
    start: `${getDateForWeekday(5)}T9:30:00`,
    end: `${getDateForWeekday(5)}T11:00:00`,
    color: "#f8bd00",
  },
  {
    title: "Physics Master Class (Lab)",
    start: `${getDateForWeekday(5)}T12:00:00`,
    end: `${getDateForWeekday(5)}T14:00:00`,
    color: "#a9c1d3",
  },
];
export default function BigCalender() {
  const [view, setView] = useState("timeGridWeek"); // Default view
  const [eventModalOpen, setEventModalOpen] = useState(false);
  const [eventInfo, setEventInfo] = useState({});
  const handleEventClick = (eventInfo) => {
    console.log(eventInfo.event);
    setEventModalOpen(true);
    setEventInfo(eventInfo.event);
  };

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={view} // Initial view (work week or day)
        events={calendarEvents} // Events for the calendar
        views={{
          timeGridWorkWeek: {
            type: "timeGrid",
            duration: { days: 5 }, // 5-day work week view
          },
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        height={600}
        slotMinTime="08:00:00" // Start time for the day
        slotMaxTime="18:00:00" // End time for the day
        allDaySlot={true} // Hide all-day slot
        eventClick={handleEventClick}
      />
      <EventModal
        eventInfo={eventInfo}
        setEventModalOpen={setEventModalOpen}
        eventModalOpen={eventModalOpen}
      />
    </>
  );
}

const EventModal = ({ eventInfo, setEventModalOpen, eventModalOpen }) => {
  return (
    <div
      className={`${
        eventModalOpen
          ? "opacity-100 visible z-[70] hide-scroll"
          : "opacity-0 invisible"
      } fixed inset-0 flex items-center justify-center cursor-[url(https://yomicasual.africa/wp-content/themes/minimog/assets/images/cursor/light-close.png),_pointer]`}
    >
      <div
        onClick={() => setEventModalOpen(false)}
        className="modal-overlay"
      ></div>
      <div
        className={`opacity-100 z-50 max-w-[400px] w-full cursor-auto relative mx-4 `}
      >
        <button
          onClick={() => setEventModalOpen(false)}
          className="absolute transition-all top-0 right-0 -translate-y-1/2 translate-x-1/2 close-modal-button flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-[0_4px_10px_#0000002b] bg-white text-[#563725] hover:bg-[#563725] hover:text-white z-50"
        >
          <Icon icon="hugeicons:cancel-01" width="18" height="18" />
        </button>
        <div className="modal-content-wrap opacity-100 visible z-50 max-h-[calc(100vh - 60px)] w-full h-full rounded-md bg-white text-black overflow-auto">
          <div className="md:p-6 p-4 text-center">
            <h2 className="lg:text-2xl text-xl mb-4">{eventInfo.title}</h2>
            <div className="text-left space-y-2 text-base">
              <p>
                <strong>Start:</strong>{" "}
                {eventInfo.start ? eventInfo.start.toLocaleString() : "N/A"}
              </p>
              <p>
                <strong>End:</strong>
                {eventInfo.end ? eventInfo.end.toLocaleString() : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
