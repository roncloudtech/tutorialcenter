import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function TwoColumnLayout({ leftContent, rightContent }) {
  return (
    <div className="xl:grid grid-cols-[1fr_0.40fr] h-full sm:overflow-hidden overflow-y-auto">
      {/* LEFT-CONTENT */}
      <PerfectScrollbar
        options={{ suppressScrollX: true, maxScrollbarLength: 100 }}
      >
        {leftContent}
      </PerfectScrollbar>
      {/* RIGHT-CONTENT */}
      <PerfectScrollbar
        className="hidden xl:block h-full dark:bg-darkMode scroll bg-mainWhite shadow-custom-1 rounded-lg p-2 m-0.5"
        options={{
          suppressScrollX: true,
          maxScrollbarLength: 100,
        }}
      >
        {rightContent}
      </PerfectScrollbar>
    </div>
  );
}
