import DashboardLayout from "../../DashboardLayout";
import Title from "../../Components/Title";
import TwoColumnLayout from "../../../Components/TwoColumnLayout";
import avatar from "../../assets/Avatar1.jpg";
import { useState } from "react";
import axios from "axios";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useSchoolContext } from "../../../Context/SchoolContext";

const formatDate = (dateString) => {
  if (!dateString) return "";
  return dateString.split("T")[0];
};
export default function Settings() {
  const { authenticatedUser } = useSchoolContext();
  // fetch userInfo from localstorage
  const userInfo = authenticatedUser;
  const fullname = userInfo.firstname + ", " + userInfo.lastname;
  const dateOfBirth = formatDate(userInfo.date_of_birth);
  const profile_picture_url = userInfo.profile_picture
    // ? `http://localhost:8000/storage/${userInfo.profile_picture}`
    ? `${userInfo.profile_picture}`
    : avatar;

  return (
    <>
      <DashboardLayout>
        <TwoColumnLayout
          leftContent={
            <div className="item1 xl:px-4 p-2.5">
              {/* header */}
              <Title title={"settings"} />
              {/* EDIT PERSONAL INFORMATION*/}
              <EditProfile userInfo={userInfo} />
            </div>
          }
          rightContent={
            <div className="dark:text-lightGrey scroll">
              {/* USER PROFILE */}
              <div className="mb-6">
                <img
                  src={profile_picture_url || avatar}
                  alt={fullname}
                  className="h-[200px] rounded-md mb-2"
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
                    className={dateOfBirth ? "font-semibold" : "text-red-500"}
                  >
                    {dateOfBirth || "Not yet added..."}
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

// Component to edit student personal Information
const EditProfile = ({ userInfo }) => {
  const API_BASE_URL = "http://localhost:8000";
  const { setAuthenticatedUser } = useSchoolContext();

  // Form Data
  const [formData, setFormData] = useState({
    firstname: userInfo.firstname || "",
    lastname: userInfo.lastname || "",
    phone: userInfo.phone || "",
    dateOfBirth: formatDate(userInfo.date_of_birth) || "",
    homeAddress: userInfo.home_address || "",
    location: userInfo.location || "",
  });
  const [profile, setProfile] = useState();
  const [profileErr, setProfileErr] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSucessMsg] = useState(false);
  // Capture user info
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Form Real Time Validation
    let newErrors = { ...formErrors };
    switch (name) {
      case "firstname":
      case "lastname":
      case "location":
        if (value.trim()) {
          delete newErrors[name];
        } else {
          newErrors[name] = `${
            name.charAt(0).toUpperCase() + name.slice(1)
          } is required`;
        }
        break;
      case "dateOfBirth":
        if (value.trim()) {
          delete newErrors[name];
        } else {
          newErrors[name] = "Date of Birth is required";
        }
        break;
      case "homeAddress":
        if (value.trim()) {
          delete newErrors[name];
        } else {
          newErrors[name] = "Home address is required";
        }
        break;
      case "phone":
        if (!value.trim()) {
          newErrors[name] = "Phone number is required";
        } else if (!/^0[789][01]\d{8}$/.test(value)) {
          newErrors[name] = "Invalid Phone number format";
        } else {
          delete newErrors[name];
        }
        break;

      default:
        break;
    }
    setFormErrors(newErrors);
  };
  // File Upload

  // Validate File Upload
  const handleFileUpload = (e) => {
    const image = e.target?.files[0];
    if (
      image.type === "image/jpeg" ||
      image.type === "image/jpg" ||
      image.type === "image/png"
    ) {
      if (image.size > 2 * 1024 * 1024) {
        setProfileErr("Image size is too large");
      } else {
        setProfileErr("");
        setProfile(image);
      }
    } else {
      setProfileErr("file type is not supported");
    }
  };
  const checkFormErrors = () => Object.keys(formErrors).length > 0;
  // Form Submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (checkFormErrors()) return console.log("Error form submission");
    setIsLoading(true);
    // Update the User Information in the Backend(Server) and update the localstorage with the data
    try {
      const res = await axios.put(
        `${API_BASE_URL}/api/students/${userInfo.id}`,
        {
          firstname: formData.firstname,
          lastname: formData.lastname,
          phone: formData.phone,
          date_of_birth: formData.dateOfBirth,
          location: formData.location,
          home_address: formData.homeAddress,
        }
      );
      console.log(res);
      if (res.status === 200) {
        // Update the Local storage and Context with the response data
        setAuthenticatedUser((prev) => ({ ...prev, ...res.data.student }));
        localStorage.setItem("userInfo", JSON.stringify(res.data.student));
        setSucessMsg(true);
      }
      // Upload profile picture if available
      if (profile) {
        const profileRes = await axios.post(
          `${API_BASE_URL}/api/students/${userInfo.id}/profile-picture`,
          {
            profile_picture: profile,
          },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (profileRes.status === 200) {
          console.log(profileRes.data.profile_picture_url);
          setAuthenticatedUser((prev) => ({
            ...prev,
            profile_picture: profileRes.data.profile_picture_url,
          }));
          localStorage.setItem(
            "userInfo",
            JSON.stringify({
              ...userInfo,
              profile_picture: profileRes.data.profile_picture_url,
            })
          );
          console.log(profileRes.data);
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="EDIT PERSONAL INFORMATION ">
      <h4 className="text-sm font-semibold my-4 text-mainBlack dark:text-lightGrey">
        EDIT PERSONAL INFORMATION
      </h4>
      {successMsg && (
        <span className="flex items-center justify-center my-2 text-sm text-green-500 w-full">
          Profile Updated Sucessfully
        </span>
      )}
      <form
        autoComplete="off"
        action=""
        method="post"
        onSubmit={handleFormSubmit}
      >
        <div className="flex flex-col gap-5 mb-2.5 dark:text-lightGrey">
          <InputField
            name={"firstname"}
            value={formData.firstname}
            formErrors={formErrors.firstname}
            label={"First name"}
            type={"text"}
            placeholder={"Enter first name"}
            onchange={handleInputChange}
          />
          <InputField
            name={"lastname"}
            value={formData.lastname}
            formErrors={formErrors.lastname}
            label={"Last name"}
            type={"text"}
            placeholder={"Enter last name"}
            onchange={handleInputChange}
          />
          <InputField
            name={"phone"}
            value={formData.phone}
            formErrors={formErrors.phone}
            label={"Phone Number"}
            type={"text"}
            placeholder={"Enter phone number format (e.g. 08012345678)"}
            onchange={handleInputChange}
          />
          <InputField
            name={"dateOfBirth"}
            value={formData.dateOfBirth}
            formErrors={formErrors.dateOfBirth}
            label={"Date of Birth"}
            type={"date"}
            placeholder={"Enter date of birth"}
            onchange={handleInputChange}
          />
          <InputField
            name={"homeAddress"}
            value={formData.homeAddress}
            formErrors={formErrors.homeAddress}
            label={" Home address"}
            type={"text"}
            placeholder={"Enter home address"}
            onchange={handleInputChange}
          />
          <InputField
            name={"location"}
            value={formData.location}
            formErrors={formErrors.location}
            label={"Location"}
            type={"text"}
            placeholder={"Enter location"}
            onchange={handleInputChange}
          />
          <label htmlFor="course_image" className="text-sm dark:text-lightGrey">
            Upload Profile Image (JPG, PNG)
            <input
              id="course_image"
              name="course_image"
              type="file"
              onChange={handleFileUpload}
              className={`mt-1 w-full px-4 py-2 border rounded-lg ${
                profileErr
                  ? "border-red-500"
                  : "dark:border-whiteFade border-mainBlue"
              } focus:ring-2 focus:ring-gray-300  focus:border-transparent transition`}
            />
            {profileErr && (
              <p className="mt-1 text-xs text-red-500">{profileErr}</p>
            )}
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 w-full py-2.5 rounded-md text-xs font-semibold shadow-custom-1 bg-mainBlue text-mainWhite dark:bg-darkMode dark:text-lightGrey flex items-center justify-center"
        >
          {isLoading ? (
            <Icon icon="line-md:loading-loop" width="24" height="24" />
          ) : (
            "DONE"
          )}
        </button>
      </form>
    </div>
  );
};

const InputField = ({
  name,
  type,
  placeholder,
  formErrors,
  label,
  value,
  onchange,
}) => {
  return (
    <label htmlFor={label} className="text-xs font-medium ">
      {label}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        className={`mt-1 w-full px-4 py-2 border rounded-lg ${
          formErrors
            ? "border-red-500"
            : "dark:border-whiteFade border-mainBlue"
        } focus:ring-2 focus:ring-gray-300  focus:border-transparent transition`}
        onChange={onchange}
      />
      {formErrors && <p className="mt-1 text-xs text-red-500">{formErrors}</p>}
    </label>
  );
};
