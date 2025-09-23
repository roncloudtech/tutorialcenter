import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function TwoColumnLayout({ leftContent, rightContent }) {
  return (
    <div className="xl:grid grid-cols-[1fr_0.40fr] h-full overflow-hidden">
      {/* LEFT-CONTENT */}
      <PerfectScrollbar options={{ suppressScrollX: true }}>
        {leftContent}
      </PerfectScrollbar>
      {/* RIGHT-CONTENT */}
      <PerfectScrollbar
        className="hidden xl:block"
        options={{ suppressScrollX: true }}
      >
        {rightContent}
      </PerfectScrollbar>
    </div>
  );
}
