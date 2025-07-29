import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import ProgressBar from "../../(Dashboard)/Components/ProgressBar";
import ProgressSlider from "../../(Dashboard)/Components/ProgressSlider";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";
import TwoColumnLayout from "../../Components/TwoColumnLayout";

export default function ParentDashboard() {
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="xl:px-4 p-2.5 scroll h-full">
            <Title title={"DASHBOARD"} />
            {/* PROGRESS LEVEL */}
            <div className="my-3">
              <ProgressBar title={"Progress Level"} course={"Courses  4"} />
            </div>
            <ProgressSlider />
          </div>
        }
        rightContent={<StudentProfileList />}
      />
    </DashboardLayout>
  );
}
