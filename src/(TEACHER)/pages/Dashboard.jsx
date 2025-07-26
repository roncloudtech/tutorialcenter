import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import ProgressBar from "../../(Dashboard)/Components/ProgressBar";
import ProgressSlider from "../../(Dashboard)/Components/ProgressSlider";
import StudentProfileList from "../../(Dashboard)/Components/StudentProfileList";
import TwoColumnLayout from "../../Components/TwoColumnLayout";

export default function TeacherDashboard() {
  return (
    <DashboardLayout>
      <TwoColumnLayout
        leftContent={
          <div className="item1 xl:px-4 p-2.5">
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
