import DashboardLayout from "../../DashboardLayout";
import Title from "../../Components/Title";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";
import avatar from "../../assets/Avatar1.jpg";

export default function Settings() {
  // fetch userInfo from localstorage
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const fullname = userInfo.firstname + ", " + userInfo.lastname;
  return (
    <>
      <DashboardLayout>
        <TwoColumnLayout
          leftContent={
            <div className="item1 xl:px-4 p-2.5">
              {/* header */}
              <Title title={"settings"} />
              {/* EDIT PERSONAL INFORMATION*/}
              <div className="EDIT PERSONAL INFORMATION">
                <h4 className="text-sm font-semibold my-4 text-mainBlack dark:text-lightGrey">
                  EDIT PERSONAL INFORMATION
                </h4>
                <div className="flex flex-col gap-2.5 mb-2.5 dark:text-lightGrey">
                  <label htmlFor="firstname" className="text-xs font-medium ">
                    First name
                  </label>
                  <input
                    type="text"
                    placeholder="input first name"
                    className=" w-full px-3 py-2.5 rounded-md  ring-[1px] ring-whiteFade shadow-custom-1"
                  />

                  <label htmlFor="lastname" className="text-xs font-medium ">
                    Last name
                  </label>
                  <input
                    type="text"
                    placeholder="input last name"
                    className="w-full px-3 py-2.5 rounded-md  ring-[1px] ring-whiteFade shadow-custom-1"
                  />

                  <label
                    htmlFor="phone number"
                    className="text-xs font-medium "
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    placeholder="input phone number"
                    className="w-full px-3 py-2.5 rounded-md  ring-[1px] ring-whiteFade shadow-custom-1"
                  />
                </div>

                <button className="mt-6 w-full py-2.5 rounded-md text-xs font-semibold shadow-custom-1 bg-mainBlue text-mainWhite dark:bg-darkMode dark:text-lightGrey ">
                  DONE
                </button>
              </div>
            </div>
          }
          rightContent={
            <div className="bg-mainWhite dark:bg-darkMode shadow-custom-1 scroll rounded-md p-3  dark:text-lightGrey h-full">
              {/* USER PROFILE */}
              <div className="mb-6">
                <img
                  src={userInfo.profile_picture || avatar}
                  alt={fullname}
                  className="h-[200px] rounded-md mb-2"
                  style={{ objectFit: "contain" }}
                />
                <h4 className="text-[18px] font-semibold">{fullname}</h4>
                <p className="text-[14px] text-mainGrey font-medium">
                  {userInfo.email}
                </p>
              </div>
              <div className="INFORMATION">
                <h4 className="text-xl font-extrabold">Student Information</h4>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Name:</p>
                  <span className={fullname ? "font-semibold" : "text-red-500"}>
                    {fullname || "Not yet added..."}
                  </span>
                </div>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Email:</p>
                  <span
                    className={
                      userInfo.email ? "font-semibold" : "text-red-500"
                    }
                  >
                    {userInfo.email || "Not yet added..."}
                  </span>
                </div>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Phone:</p>
                  <span
                    className={
                      userInfo.phone ? "font-semibold" : "text-red-500"
                    }
                  >
                    {userInfo.phone || "Not yet added..."}
                  </span>
                </div>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Date Of Birth:</p>
                  <span
                    className={
                      userInfo.date_of_birth ? "font-semibold" : "text-red-500"
                    }
                  >
                    {userInfo.date_of_birth || "Not yet added..."}
                  </span>
                </div>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Gender:</p>
                  <span
                    className={
                      userInfo.gender ? "font-semibold" : "text-red-500"
                    }
                  >
                    {userInfo.gender || "Not yet added..."}
                  </span>
                </div>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Location:</p>
                  <span
                    className={
                      userInfo.location ? "font-semibold" : "text-red-500"
                    }
                  >
                    {userInfo.location || "Not yet added..."}
                  </span>
                </div>
                <div className="text-[12px] flex justify-between items-center my-2.5">
                  <p className="font-semibold">Department:</p>
                  <span
                    className={
                      userInfo.department ? "font-semibold" : "text-red-500"
                    }
                  >
                    {userInfo.department || "Not yet added..."}
                  </span>
                </div>
              </div>
            </div>
          }
        />
      </DashboardLayout>
    </>
  );
}
