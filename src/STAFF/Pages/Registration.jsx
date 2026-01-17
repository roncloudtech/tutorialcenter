import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import Title from "../../(Dashboard)/Components/Title";
import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import CheckersImage from "../../Assets/checkers.png";

const genderOptions = [
  {
    value: "",
    label: "select gender",
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Others",
    label: "Others",
  },
];

const roleOptions = [
  {
    value: "",
    label: "select role",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "tutor",
    label: "Tutor",
  },
  {
    value: "adviser",
    label: "Adviser",
  },
  {
    value: "staff",
    label: "Staff",
  },
];
export default function StaffRegistration() {
  // const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  const [profilePicture, setProfilePicture] = useState();
  const [profileErr, setProfileErr] = useState("");
  // Form Data State
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    gender: "",
    staff_role: "",
    date_of_birth: "",
    home_address: "",
  });
  // Form Data Error State
  const [formErr, setFormErr] = useState({});

  // Capture User Entries
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Real-time validation
    let newErrors = { ...formErr };

    switch (name) {
      case "firstname":
      case "lastname":
      case "phone":
      case "gender":
      case "staff_role":
      case "date_of_birth":
      case "home_address":
        if (value.trim()) {
          delete newErrors[name];
        } else {
          newErrors[name] = `${name.replace("_", " ")} is required`;
        }
        break;
      case "email":
        if (/\S+@\S+\.\S+/.test(value)) {
          delete newErrors.email;
        } else {
          newErrors.email = "Email address is invalid";
        }
        break;
      default:
        break;
    }
    setFormErr(newErrors);
  };
  // Validate Form Entries
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstname.trim())
      newErrors.firstname = "Firstname is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Lastname is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.gender.trim()) newErrors.gender = "Gender is required";
    if (!formData.staff_role.trim()) newErrors.staff_role = "Role is required";
    if (!formData.date_of_birth.trim())
      newErrors.date_of_birth = "Date of birth is required";
    if (!formData.home_address.trim())
      newErrors.home_address = "Home address is required";
    if (!profilePicture)
      newErrors.profile_picture = "Profile picture is required";
    setFormErr(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
        setProfilePicture(image);
      }
    } else {
      setProfileErr("file type is not supported");
    }
  };

  // Submit Form Data
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log(formData);
  };
  return (
    <DashboardLayout>
      <PerfectScrollbar>
        <div className="xl:px-4 p-2.5">
          <Title title={"STAFF REGISTRATION"} />
          <div className="registration mt-5">
            {/* <h2 className="uppercase dark:text-lightGrey text-center text-xl font-semibold mb-5">
              Registration
            </h2> */}
            <form action="" onSubmit={handleSubmit} method="POST">
              <div className="w-full flex items-center">
                <div className="flex-[35%] mr-6 profile_picture">
                  <div
                    style={{ backgroundImage: `url(${CheckersImage})` }}
                    className=" bg-slate-400 h-80 w-full rounded-lg overflow-hidden flex items-center justify-center"
                  >
                    <div className="w-1/2">
                      <input
                        type="file"
                        name="profile_picture"
                        id="profile_picture"
                        className="bg-[#D1D5DB]"
                        onChange={handleFileUpload}
                      />
                      {profileErr && (
                        <p className="mt-1 text-xs text-red-500">
                          {profileErr}
                        </p>
                      )}
                    </div>
                  </div>

                  {formErr.profile_picture && (
                    <p className="mt-1 text-xs text-red-500">
                      {formErr.profile_picture}
                    </p>
                  )}
                </div>
                <div className="input_fields flex-[65%] w-full space-y-4">
                  <InputField
                    type={"text"}
                    name={"firstname"}
                    id={"firstname"}
                    placeholder={"Enter Firstname"}
                    label={"First Name"}
                    value={formData.firstname}
                    onchangeFn={handleChange}
                    labelErr={formErr.firstname}
                  />
                  <InputField
                    type={"text"}
                    name={"lastname"}
                    id={"lastname"}
                    placeholder={"Enter lastname"}
                    label={"Last Name"}
                    value={formData.lastname}
                    onchangeFn={handleChange}
                    labelErr={formErr.lastname}
                  />
                  <InputField
                    type={"email"}
                    name={"email"}
                    id={"email"}
                    placeholder={"Enter email"}
                    label={"Email Address"}
                    value={formData.email}
                    onchangeFn={handleChange}
                    labelErr={formErr.email}
                  />
                  <InputField
                    type={"tel"}
                    name={"phone"}
                    id={"phone"}
                    placeholder={"Enter phone number"}
                    label={"Phone Number"}
                    value={formData.phone}
                    onchangeFn={handleChange}
                    labelErr={formErr.phone}
                  />
                </div>
              </div>
              <div className="space-y-4 mt-4">
                <SelectField
                  name={"gender"}
                  id={"gender"}
                  label={"Gender"}
                  options={genderOptions}
                  value={formData.gender}
                  onchangeFn={handleChange}
                  labelErr={formErr.gender}
                />
                <SelectField
                  name={"staff_role"}
                  id={"role"}
                  label={"Role"}
                  options={roleOptions}
                  value={formData.staff_role}
                  onchangeFn={handleChange}
                  labelErr={formErr.staff_role}
                />
                <InputField
                  type={"date"}
                  name={"date_of_birth"}
                  id={"date_of_birth"}
                  placeholder={"Enter date of birth"}
                  label={"Date of Birth"}
                  value={formData.date_of_birth}
                  onchangeFn={handleChange}
                  labelErr={formErr.date_of_birth}
                />
                <InputField
                  type={"text"}
                  name={"home_address"}
                  id={"home_address"}
                  placeholder={"Enter address"}
                  label={"Home Address"}
                  value={formData.home_address}
                  onchangeFn={handleChange}
                  labelErr={formErr.home_address}
                />
              </div>
              <div className="flex items-center justify-center mt-7">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="text-base dark:text-lightGrey ring-2 ring-whiteFade px-5 py-2 rounded-lg"
                >
                  {isLoading ? (
                    <Icon icon="line-md:loading-loop" width="24" height="24" />
                  ) : (
                    "Create"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </PerfectScrollbar>
    </DashboardLayout>
  );
}

const InputField = ({
  onchangeFn,
  name,
  id,
  placeholder,
  type,
  label,
  value,
  labelErr,
}) => {
  return (
    <label htmlFor={label} className="text-sm dark:text-lightGrey block">
      {label}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onchangeFn}
        className={`mt-1.5 w-full ${
          labelErr ? "ring-red-500" : "ring-[#d1d5dbc3]"
        } ring-1 ring-[#d1d5dbc3] focus:ring-[#D1D5DB] text-lightGrey text-sm p-1.5 rounded`}
      />
      {labelErr && <p className="mt-1 text-xs text-red-500">{labelErr}</p>}
    </label>
  );
};
const SelectField = ({
  onchangeFn,
  name,
  id,
  label,
  options,
  value,
  labelErr,
}) => {
  return (
    <label htmlFor={label} className="text-sm dark:text-lightGrey block">
      {label}
      <select
        onChange={onchangeFn}
        name={name}
        id={id}
        value={value}
        className={`mt-1.5 w-full ${
          labelErr ? "ring-red-500" : "ring-[#d1d5dbc3]"
        } ring-1 ring-[#d1d5dbc3] focus:ring-[#D1D5DB] text-mainGrey dark:bg-[#2A2A2A] text-sm p-1.5 rounded`}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {labelErr && <p className="mt-1 text-xs text-red-500">{labelErr}</p>}
    </label>
  );
};
