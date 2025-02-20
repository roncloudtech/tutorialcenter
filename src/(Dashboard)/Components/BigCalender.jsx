import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
export default function BigCalender() {
  const calendarEvents = [
    {
      title: "Physics Master Class",
      start: "2025-02-07",
      end: "2025-02-07",
    },
    {
      title: "English Master Class",
      start: "2025-02-08",
      end: "2025-02-08",
    },
    {
      title: "Physics Master Class",
      start: "2025-02-09",
      end: "2025-02-09",
    },
    {
      title: "Physics Master Class",
      start: "2025-02-10",
      end: "2025-02-10",
    },
  ];

  const [view, setView] = useState("timeGridWorkWeek"); // Default view
  const handleViewChange = (view) => {
    setView(view); // Update view when changed
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
      />
    </>
  );
}
