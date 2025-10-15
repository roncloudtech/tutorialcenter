import { useEffect, useState } from "react";
import DashboardLayout from "../../DashboardLayout";
import { Icon } from "@iconify/react/dist/iconify.js";
import Chat from "../../Components/Chat";
import Title from "../../Components/Title";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";
import { useSelectedCourses } from "../../../Hooks/useSelectedCourses";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";

export default function Coursepage() {
  // Fetch all courses and subjects the student enrolled in using custom hook
  const { data, isLoading } = useSelectedCourses();
  if (isLoading) {
    return (
      <div className="w-full  flex items-center justify-center text-center gap-2 dark:text-lightGrey">
        <Icon icon="line-md:loading-loop" width="35" height="35" />
        <span className="text-xs">Loading...</span>
      </div>
    );
  }
  return <CoursepageContainer data={data} />;
}

const CoursepageContainer = ({ data }) => {
  const [viewCourseChat, setViewCourseChat] = useState(false);
  // First course is selected by default
  const [selectedCourse, setSelectedCourse] = useState(data.courses[0]);
  // First subject is selected by default
  const [selectedSubject, setSelectedSubject] = useState(
    selectedCourse.subjects[0]
  );
  // UseEffect to synchronize with the selected course when it changes
  useEffect(() => {
    setSelectedSubject(selectedCourse.subjects[0]);
  }, [selectedCourse]);
  // console.log(selectedSubject);
  return (
    <>
      <DashboardLayout>
        <TwoColumnLayout
          leftContent={
            <div className="item1 xl:px-4 p-2.5 w-full">
              {/* header */}
              <Title title={"COURSE"} />
              {/* PROGRESS SECTION */}
              <div className="w-full mt-3">
                <MediumScreenCourseProgressBar
                  data={data}
                  setSelectedCourse={setSelectedCourse}
                  selectedCourse={selectedCourse}
                />
                <div className="progress bar">
                  <SubjectProgressBar subject={selectedSubject} />
                </div>
              </div>
              <div className="mt-3 sm:grid grid-cols-[35fr_65fr] gap-4">
                <MediumScreenTopicLists
                  allSubjects={selectedCourse?.subjects}
                  selectedSubject={selectedSubject}
                  setSelectedSubject={setSelectedSubject}
                />
                <div className="hidden sm:block content1  ring-[0.5px] ring-mainBlue bg-mainBlue dark:bg-darkMode rounded-lg overflow-hidden">
                  <div className="title w-full flex justify-center text-mainWhite  py-1.5 ">
                    <h3 className="uppercase text-[16px] font-bold">
                      {selectedCourse?.name}
                    </h3>
                  </div>
                  <div className="bg-lightGrey dark:bg-whiteFade  overflow-hidden h-[310px]">
                    <PerfectScrollbar
                      options={{ suppressScrollX: true }}
                      className="flex w-full pr-1"
                    >
                      <div className="flex-1">
                        <p className="text-[12px] uppercase bg-mainLightBlue dark:bg-whiteFade text-mainWhite dark:text-lightGrey px-5 py-2">
                          Subject
                        </p>
                        <ul className="subject-Lists h-full py-1 px-1.5">
                          {selectedCourse?.subjects.map((subject) => (
                            <li
                              className={`${
                                subject.id === selectedSubject.id
                                  ? "dark:bg-darkMode dark:text-lightGrey bg-mainBlue text-mainWhite "
                                  : "text-mainBlack dark:text-lightGrey"
                              } text-[9px]  p-1.5 rounded-lg cursor-pointer ellipsis inline-block w-[100px]`}
                              key={subject.id}
                              onClick={() => setSelectedSubject(subject)}
                            >
                              {subject.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="item">
                        <div className="w-[1px] h-full bg-mainBlack " />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] bg-mainLightBlue dark:bg-whiteFade text-mainWhite dark:text-lightGrey px-5 py-2">
                          Topics
                        </p>
                        <ul>
                          <li className="text-[9px] text-mainBlack dark:text-lightGrey  p-1.5 rounded-lg cursor-pointer ellipsis inline-block">
                            Number
                          </li>
                        </ul>
                      </div>
                    </PerfectScrollbar>
                  </div>
                </div>
                {/* Video Section  */}
                <div className="w-full">
                  <div className="hidden sm:flex justify-between py-1 text-[16px] text-mainBlack dark:text-lightGrey font-semibold">
                    <p>SUBJECT</p>
                    <p>{selectedSubject.name}</p>
                  </div>
                  <video className="relative w-full h-[315px] bg-[#EDF7ED] rounded-md">
                    <div className="w-16 h-16 rounded-full bg-white absolute top-1/4 right-1/2 flex justify-center items-center">
                      <Icon
                        icon="solar:play-bold-duotone"
                        width="24"
                        height="24"
                        style={{ color: "#47C05D" }}
                      />
                    </div>
                  </video>
                </div>
              </div>
              <div className="Right Side">
                {/* Download Course Material */}
                <div className="w-full">
                  <div className="flex justify-between items-center w-full px-1 py-3">
                    <div className="text-mainBlack dark:text-lightGrey">
                      <span className="text-[8px]">Topic </span>
                      <p className="text-[16px] font-semibold">Logarithms</p>
                    </div>
                    <div className="flex justify-center items-center gap-2 bg-mainBlue pl-2 rounded-md">
                      <span className="text-[12px] text-mainWhite capitalize font-semibold">
                        open course material
                      </span>
                      <div className="w-8 h-8 bg-mainWhite text-mainBlue rounded-sm flex justify-center items-center m-0.5">
                        <Icon
                          icon="material-symbols:download"
                          width="24"
                          height="24"
                        />
                      </div>
                    </div>
                  </div>
                  <div className=" bg-lightGrey rounded-md mb-5 capitalize text-[12px] text-mainBlack">
                    <div className="flex justify-between  py-1 px-2">
                      <p>sub-topic title</p>
                      <span>00:00</span>
                    </div>
                    <div className="flex justify-between py-1 px-2 bg-mainWhite text-mainBlue font-medium">
                      <p>sub-topic title</p>
                      <span>00:00</span>
                    </div>
                    <div className="flex justify-between  py-1 px-2">
                      <p>sub-topic title</p>
                      <span>00:00</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center bg-mainBlue dark:bg-darkMode shadow-custom-1 rounded-md px-3 py-2 mb-3 text-mainWhite dark:text-lightGrey">
                    <div className="flex items-center gap-6">
                      <span className="text-[16px] font-medium">Take Quiz</span>
                      <Icon
                        icon="fluent:quiz-new-20-regular"
                        width="24"
                        height="24"
                      />
                    </div>
                    <div className="flex items-center gap-6">
                      <span className="text-white text-[16px] font-medium">
                        15mins
                      </span>
                      <Icon
                        icon="material-symbols:alarm-rounded"
                        width="24"
                        height="24"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
          rightContent={
            <div className="space-y-2">
              <div className="border-[0.5px] border-mainBlue dark:bg-darkMode px-2 py-3 rounded-md">
                <div className="flex justify-between text-[10px] font-bold text-mainBlack dark:text-lightGrey mb-2">
                  <h3 className="ellipsis inline-block w-[160px]">
                    MASTER CLASS [{selectedCourse?.name}]
                  </h3>
                  <p>View More</p>
                </div>
                <div className="flex justify-between">
                  <div className="uppercase !text-[8px] font-medium space-y-1 text-mainBlack dark:text-lightGrey">
                    <p>monday</p>
                    <p>tuesday</p>
                    <p>wednesday</p>
                    <p>thursday</p>
                    <p>friday</p>
                    <p>saturday</p>
                  </div>
                  <div className="uppercase !text-[8px] font-medium space-y-1 text-mainBlack dark:text-lightGrey">
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                    <p>5-7 pm</p>
                  </div>
                </div>
              </div>
              {/* TOPIC CONVERSATION */}
              <div className="chat">
                <div className="py-2 text-center rounded-t-lg bg-mainBlue dark:bg-ascent text-xs text-mainWhite">
                  <p>Topic Conversation</p>
                </div>
                <div className="py-2 px-1.5  border-[0.5px] border-mainBlue rounded-b-lg">
                  <Chat />
                </div>
              </div>
            </div>
          }
        />
        <ChatButton setViewCourseChat={setViewCourseChat} />
      </DashboardLayout>
      <MediumScreenCourseChat
        setViewCourseChat={setViewCourseChat}
        viewCourseChat={viewCourseChat}
      />
    </>
  );
};

const SubjectProgressBar = ({ subject, bgColor }) => {
  return (
    <div
      className={`progress p-2 rounded-md dark:text-lightGrey text-mainBlack`}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3">
          <Icon
            icon="streamline:business-progress-bar-2-solid"
            width="18"
            height="18"
          />
          <h3 className="text-[14px] font-medium ">
            {" "}
            {subject.name} progress bar
          </h3>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2 text-[8px] font-medium">
        <p>START</p>
        <p>FINISH</p>
      </div>
      <div
        className={`w-full h-2.5 ${
          bgColor ? "bg-mainLightBlue" : "bg-lightGrey"
        } dark:bg-whiteFade rounded-sm relative`}
      >
        <div
          className="h-full bg-mainBlue dark:bg-lightGrey rounded-sm"
          style={{ width: `${subject.progress}px` }}
        />
        <label
          style={{ left: `${subject.progress}px` }}
          className="text-[8px] text-darkMode dark:text-mainWhite font-medium absolute -top-[2px]"
        >
          {subject.progress}%{" "}
        </label>
      </div>
    </div>
  );
};
const MediumScreenCourseProgressBar = ({
  data,
  setSelectedCourse,
  selectedCourse,
}) => {
  const [showProgress, setShowProgress] = useState(false);
  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    setShowProgress(false);
  };

  return (
    <div className="relative mt-2 mb-4">
      <button
        onClick={() => setShowProgress((prev) => !prev)}
        className={`${
          showProgress ? " rounded-t-lg" : " rounded-lg"
        } flex items-center justify-between w-full text-white p-2 bg-mainBlue dark:bg-darkMode shadow-custom-1`}
      >
        <div className="flex items-center gap-3 flex-1">
          <Icon
            icon="streamline:business-progress-bar-2-solid"
            width="18"
            height="18"
          />
          <h3 className="text-[14px] font-medium uppercase">
            {selectedCourse?.slug} Progress
          </h3>
        </div>
        <div className="flex items-center gap-3 flex-1">
          <div
            className={`w-full h-2.5 bg-mainWhite  dark:bg-whiteFade rounded-sm relative`}
          >
            <div className="h-full bg-[#A8C7DF] dark:bg-lightGrey rounded-sm w-1/4 " />
            <label className="text-[8px] text-mainWhite dark:text-darkMode font-medium absolute left-4 -top-[2px]">
              6%{" "}
            </label>
          </div>
          <Icon
            icon="hugeicons:arrow-up-01"
            width="30"
            height="30"
            className={`${
              showProgress ? "-rotate-[135]" : "rotate-180"
            } transition-drop-down`}
          />
        </div>
      </button>
      <div
        className={`${
          showProgress
            ? "max-h-96 overflow-y-auto"
            : "max-h-0 overflow-y-hidden invisible"
        } transition-drop-down absolute top-9 z-20 w-full text-white p-2 dark:bg-darkMode bg-mainBlue shadow-custom-1 rounded-b-lg`}
      >
        <div className="mb-2 space-y-1">
          {data?.courses?.map((course) => (
            <button
              key={course.id}
              className={`${
                selectedCourse?.id === course.id
                  ? "bg-white text-mainBlue"
                  : "hover:opacity-80"
              } w-full flex items-center gap-3 p-1 uppercase  rounded-custom hover:bg-white hover:text-mainBlue`}
              onClick={() => handleCourseChange(course)}
            >
              <Icon
                icon="streamline:business-progress-bar-2-solid"
                width="18"
                height="18"
              />
              <h3 className="text-[14px] font-medium">{course?.slug}</h3>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
const MediumScreenTopicLists = ({
  allSubjects,
  selectedSubject,
  setSelectedSubject,
}) => {
  return (
    <div className="sm:hidden w-full  overflow-x-hidden mb-5">
      {/* <div className="icon ">
        <Icon icon="quill:hamburger" width="24" height="24" />
      </div> */}
      <PerfectScrollbar
        options={{ suppressScrollY: true }}
        className="flex items-center  justify-between gap-3 pb-2.5"
      >
        {allSubjects?.map((subject) => (
          <button
            key={subject.id}
            onClick={() => setSelectedSubject(subject)}
            className={`${
              selectedSubject.id === subject.id
                ? "bg-mainBlue dark:bg-darkMode text-lightGrey font-medium"
                : "text-mainBlue dark:text-lightGrey"
            } flex-1 text-nowrap text-sm   px-1.5 py-2 rounded-md `}
          >
            {subject.name}
          </button>
        ))}
      </PerfectScrollbar>
    </div>
  );
};

const MediumScreenAllTopics = ({ setTopic }) => {
  return (
    <div className="py-4 px-2">
      <div className="flex items-center gap-3 mb-4">
        <button onClick={() => setTopic(false)}>
          <Icon icon="iconamoon:arrow-left-2-light" width="35" height="35" />
        </button>
        <h2 className="uppercase text-lg font-semibold">Topics</h2>
      </div>
      <div className="mx-4">
        <ul className="text-xs space-y-2">
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Number <span>74%</span>
          </li>
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Measurement <span>74%</span>
          </li>
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Geometry <span>74%</span>
          </li>
          <li className="flex justify-between items-center bg-[#EAEBEC] px-4 py-2 rounded-lg">
            Algebra <span>74%</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
const ChatButton = ({ setViewCourseChat }) => {
  return (
    <button
      onClick={() => setViewCourseChat(true)}
      className="sm:hidden bg-[#EAEBEC] rounded-lg shadow-custom-1 text-[10px] text-ascent fixed top-[calc(100vh-170px)] sm:right-8 right-3.5 z-[40] px-1 py-2 flex flex-col justify-center items-center "
    >
      {/* CHAT WITH US */}
      <div className="group relative mb-1 w-[35px] h-[35px] bg-mainGrey text-mainWhite rounded-lg flex justify-center items-center">
        <Icon icon="tabler:message-chatbot" width="20" height="20" />
      </div>
      <span>Conversation</span>
    </button>
  );
};
const MediumScreenCourseChat = ({ viewCourseChat, setViewCourseChat }) => {
  return (
    <div
      className={`${
        viewCourseChat ? "visible translate-x-0" : "invisible translate-x-full"
      } pt-5 transition-transform ease-in-out duration-500 w-full h-full bg-white dark:bg-darkMode fixed top-0 left-0 z-[80] overflow-hidden`}
    >
      <button
        onClick={() => setViewCourseChat(false)}
        className="flex gap-2 dark:text-lightGrey"
      >
        <Icon icon="iconamoon:arrow-left-2-light" width="35" height="35" />
        <span>Back</span>
      </button>
      <PerfectScrollbar
        className=" px-3 pb-2"
        options={{ suppressScrollX: true }}
      >
        <video
          src={null}
          className="relative w-full h-[260px] bg-[#EDF7ED] rounded-md my-3"
        >
          <div className="w-16 h-16 rounded-full bg-white absolute top-1/4 right-1/2 flex justify-center items-center">
            <Icon
              icon="solar:play-bold-duotone"
              width="24"
              height="24"
              style={{ color: "#47C05D" }}
            />
          </div>
        </video>
        <div className="chat-section my-3">
          <div className="py-2 pl-4 rounded-t-lg bg-mainBlue dark:bg-ascent text-xs text-mainWhite">
            <p>Topic Conversation</p>
          </div>
          <div className="py-2 px-1.5  ring-[0.5px] ring-mainBlue rounded-b-lg mb-7">
            <Chat />
          </div>
        </div>
      </PerfectScrollbar>
    </div>
  );
};
