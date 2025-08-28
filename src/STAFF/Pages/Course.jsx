import React, { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useCourses } from "../../Hooks/useCourses";

const API_BASE_URL = "http://localhost:8000/api";
export default function StaffCourses() {
  const [isRegisteredCourses, setIsRegisteredCourses] = useState(false);
  const checkClases = (bool) => {
    if (bool) return "border-b-2 border-solid border-b-ascent text-ascent";
    return "text-mainGrey";
  };
  return (
    <DashboardLayout>
      <PerfectScrollbar>
        <div className="xl:px-4 p-2.5">
          <Title title={"COURSES"} />
          <div className="courses mt-5">
            <div className="w-full flex items-center justify-between">
              <button
                onClick={() => setIsRegisteredCourses(false)}
                className={`w-full ${checkClases(
                  !isRegisteredCourses
                )} text-sm font-semibold text-center uppercase pb-2`}
              >
                Registration
              </button>
              <button
                onClick={() => setIsRegisteredCourses(true)}
                className={`w-full ${checkClases(
                  isRegisteredCourses
                )}  text-sm font-semibold text-center uppercase pb-2`}
              >
                Registered Courses
              </button>
            </div>
          </div>
          {isRegisteredCourses ? <AllRegisteredCourses /> : <RegiterCourses />}
        </div>
      </PerfectScrollbar>
    </DashboardLayout>
  );
}

const RegiterCourses = () => {
  const [isCourseRegistration, setIsCourseRegistration] = useState(true);
  return (
    <div className="mt-6">
      <div className="flex items-center">
        <button
          onClick={() => setIsCourseRegistration(true)}
          className={`text-sm text-white py-2 px-5 rounded-t-lg ${
            isCourseRegistration ? "dark:bg-darkMode  shadow-custom-1" : ""
          }`}
        >
          Course
        </button>
        <button
          onClick={() => setIsCourseRegistration(false)}
          className={`text-sm text-white py-2 px-5 rounded-t-lg ${
            isCourseRegistration ? "" : "dark:bg-darkMode  shadow-custom-1"
          }`}
        >
          subject
        </button>
      </div>
      {isCourseRegistration ? (
        <CourseRegistrationForm />
      ) : (
        <SubjectRegistrationForm />
      )}
    </div>
  );
};

const AllRegisteredCourses = () => {
  return (
    <div className="">
      <span>Courses Lists</span>
    </div>
  );
};

const CourseRegistrationForm = () => {
  // Capture all Course information
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [courseFile, setCourseFile] = useState();
  const [fileErr, setFileErr] = useState("");
  // Form state errors
  const [errors, setErrors] = useState({});
  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  // Capture course entries
  const handleFormInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // Check to see if the course name has been taken in the database
  const [serverErr, setServerErr] = useState("");
  // Validate File Upload
  const handleFileUpload = (e) => {
    const image = e.target?.files[0];
    if (
      image.type === "image/jpeg" ||
      image.type === "image/jpg" ||
      image.type === "image/png"
    ) {
      if (image.size > 2 * 1024 * 1024) {
        setFileErr("Image size is too large");
      } else {
        setFileErr("");
        setCourseFile(image);
      }
    } else {
      setFileErr("file type is not supported");
    }
  };
  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (!formData.description.length > 20) {
      newErrors.description = "Description must be more than 20 characters";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (formData.price < 5000) newErrors.price = "Minimum of ₦5000";
    if (!courseFile) newErrors.image = "Image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  // Form Submission and form Validation
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    // Make an api call to store the course info in the database
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${API_BASE_URL}/courses/`,
        {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          course_image: courseFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        // clear all form inputs
        setErrors({});
        setServerErr("");
        setCourseFile();
        setFormData({
          name: "",
          description: "",
          price: "",
        });
      }
    } catch (error) {
      console.log(error.response.data?.errors?.name);
      const err = error.response.data?.errors?.name[0];

      setServerErr(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-4 py-6 dark:bg-darkMode  shadow-custom-1">
      <div className="flex items-center gap-3 py-2 px-3 rounded-lg dark:bg-whiteFade">
        <Icon
          icon="uiw:warning"
          width="24"
          height="24"
          className="text-mainRed"
        />
        <span className="dark:text-lightGrey text-xs">
          To register a course from our offerings, provide all the required
          course details.
        </span>
      </div>
      <form
        onSubmit={handleFormSubmit}
        method="post"
        autoComplete="off"
        className="w-full mt-6 flex flex-col gap-5"
      >
        <label htmlFor="name" className="text-sm dark:text-lightGrey">
          Course Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter course name"
            value={formData.name}
            onChange={handleFormInputChange}
            className={`mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
          {serverErr && (
            <p className="mt-1 text-xs text-red-500">{serverErr}</p>
          )}
        </label>
        <label htmlFor="description" className="text-sm dark:text-lightGrey">
          Course Description
          <textarea
            rows={3}
            id="description"
            name="description"
            type="text"
            placeholder="Enter course description"
            value={formData.description}
            onChange={handleFormInputChange}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.description && (
            <p className="mt-1 text-xs text-red-500">{errors.description}</p>
          )}
        </label>
        <label htmlFor="price" className="text-sm dark:text-lightGrey">
          Course Price
          <input
            id="price"
            name="price"
            type="number"
            min={1}
            placeholder="Enter course price"
            value={formData.price}
            onChange={handleFormInputChange}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.price && (
            <p className="mt-1 text-xs text-red-500">{errors.price}</p>
          )}
        </label>
        <label htmlFor="course_image" className="text-sm dark:text-lightGrey">
          Upload Course Image (JPG, PNG)
          <input
            id="course_image"
            name="course_image"
            type="file"
            onChange={handleFileUpload}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.image && (
            <p className="mt-1 text-xs text-red-500">{errors.image}</p>
          )}
          {fileErr && <p className="mt-1 text-xs text-red-500">{fileErr}</p>}
        </label>
        <div className="flex items-center justify-center mt-4">
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
  );
};
const SubjectRegistrationForm = () => {
  // Capture all Course information
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
  });
  const [courseFile, setCourseFile] = useState();
  const [fileErr, setFileErr] = useState("");
  // Form state errors
  const [errors, setErrors] = useState({});
  // Loading State
  const [isLoading, setIsLoading] = useState(false);
  // Capture course entries
  const handleFormInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  // selected Courses
  const [selectedCourses, setSelectedCourses] = useState([]);
  // show course modal
  const [isVisible, setIsVisible] = useState(false);

  // This function toggle the selected course
  const toggleSelectedCourse = (course) => {
    setSelectedCourses((prev) => {
      const checkIfCourseExist = prev.find((c) => c.id === course.id);
      // if the course exists remove
      if (checkIfCourseExist) {
        // remove
        return prev.filter((c) => c.id !== course.id);
      } else {
        // add
        return [...prev, course];
      }
    });
  };
  // Remove a selected course by id
  const removeSelectedCourse = (courseId) => {
    setSelectedCourses((prev) => prev.filter((c) => c.id !== courseId));
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
        setFileErr("Image size is too large");
      } else {
        setFileErr("");
        setCourseFile(image);
      }
    } else {
      setFileErr("file type is not supported");
    }
  };
  // Form Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (!formData.description.length > 20) {
      newErrors.description = "Description must be more than 20 characters";
    }
    if (!formData.price) {
      newErrors.price = "Price is required";
    } else if (formData.price < 5000) newErrors.price = "Minimum of ₦5000";
    if (!courseFile) newErrors.image = "Image is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const GetAllCourses = () => {
    const { data, isLoading, isError } = useCourses();
    if (isError) return console.log("Error fetching Courses");
    if (isLoading)
      return (
        <div
          style={{ display: isVisible ? "block" : "none" }}
          className="w-full flex items-center justify-center dark:text-lightGrey"
        >
          <Icon icon="line-md:loading-loop" width="24" height="24" />
        </div>
      );
    return (
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } z-50 absolute top-[80px] left-0 w-full overflow-hidden ring-2 ring-whiteFade dark:bg-darkMode dark:text-lightGrey p-3 rounded-md`}
      >
        {!data ? (
          <div className="dark:text-lightGrey text-lg">No Course Found</div>
        ) : (
          data.map((course) => {
            const isCourseSelected = selectedCourses.some(
              (c) => c.id === course.id
            );
            return (
              <button
                onClick={() => toggleSelectedCourse(course)}
                type="button"
                key={course.id}
                className="flex items-center gap-2 p-1.5 w-full group hover:dark:bg-lightGrey hover:dark:text-darkMode rounded-md"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-sm ring-2 ring-whiteFade group-hover:ring-darkMode">
                  {isCourseSelected && (
                    <Icon icon="mingcute:check-fill" width="14" height="14" />
                  )}
                </div>
                <span className="uppercase  text-xs">{course.name}</span>
              </button>
            );
          })
        )}
      </div>
    );
  };
  // Form Submission and form Validation
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    // Make an api call to store the course info in the database
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${API_BASE_URL}/courses/`,
        {
          name: formData.name,
          description: formData.description,
          price: formData.price,
          course_image: courseFile,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        // clear all form inputs
        setErrors({});
        setCourseFile();
        setFormData({
          name: "",
          description: "",
          price: "",
        });
      }
    } catch (error) {
      const err = error.response.data?.errors?.name[0];
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="px-4 py-6 dark:bg-darkMode  shadow-custom-1">
      <div className="flex items-center gap-3 py-2 px-3 rounded-lg dark:bg-whiteFade">
        <Icon
          icon="uiw:warning"
          width="24"
          height="24"
          className="text-mainRed"
        />
        <span className="dark:text-lightGrey text-xs">
          To register a subject from our offerings, provide all the required
          course details.
        </span>
      </div>
      <form
        onSubmit={handleFormSubmit}
        method="post"
        autoComplete="off"
        className="w-full mt-6 flex flex-col gap-5"
      >
        <label
          htmlFor="courses-name"
          className="text-sm dark:text-lightGrey relative"
        >
          Course Name
          <div
            onClick={() => setIsVisible(!isVisible)}
            className={`cursor-pointer mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded`}
          >
            <div className="dark:text-lightGrey flex gap-4">
              {selectedCourses.length > 0 ? (
                selectedCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-1 ring-2 ring-whiteFade flex gap-2 w-max rounded"
                  >
                    <span className="text-xs">{course.name}</span>
                    <button
                      onClick={() => removeSelectedCourse(course.id)}
                      className="z-20 relative"
                    >
                      <Icon
                        icon="material-symbols:cancel-outline-rounded"
                        width="16"
                        height="16"
                      />
                    </button>
                  </div>
                ))
              ) : (
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs">Select Courses</span>
                  <Icon icon="bxs:down-arrow" width="15" height="15" />
                </div>
              )}
            </div>
          </div>
          <GetAllCourses />
        </label>
        <label htmlFor="name" className="text-sm dark:text-lightGrey">
          Subject Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter subject name"
            value={formData.name}
            onChange={handleFormInputChange}
            className={`mt-2 w-full ring-2 ring-whiteFade dark:text-lightGrey text-sm p-1.5 rounded`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          )}
        </label>
        <label htmlFor="description" className="text-sm dark:text-lightGrey">
          Subject Description
          <textarea
            rows={3}
            id="description"
            name="description"
            type="text"
            placeholder="Enter subject description"
            value={formData.description}
            onChange={handleFormInputChange}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.description && (
            <p className="mt-1 text-xs text-red-500">{errors.description}</p>
          )}
        </label>
        <label htmlFor="price" className="text-sm dark:text-lightGrey">
          Department
          <input
            id="price"
            name="price"
            type="number"
            min={1}
            placeholder="Enter course price"
            value={formData.price}
            onChange={handleFormInputChange}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.price && (
            <p className="mt-1 text-xs text-red-500">{errors.price}</p>
          )}
        </label>
        <label htmlFor="TutorsId" className="text-sm dark:text-lightGrey">
          Assign Tutors
          <input
            id="TutorsId"
            name="TutorsId"
            type="number"
            min={1}
            placeholder="Select Tutors"
            value={formData.price}
            onChange={handleFormInputChange}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.price && (
            <p className="mt-1 text-xs text-red-500">{errors.price}</p>
          )}
        </label>
        <label htmlFor="course_image" className="text-sm dark:text-lightGrey">
          Upload Course Image (JPG, PNG)
          <input
            id="course_image"
            name="course_image"
            type="file"
            onChange={handleFileUpload}
            className="mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded"
          />
          {errors.image && (
            <p className="mt-1 text-xs text-red-500">{errors.image}</p>
          )}
          {fileErr && <p className="mt-1 text-xs text-red-500">{fileErr}</p>}
        </label>
        <label htmlFor="course_image" className="text-sm dark:text-lightGrey">
          Subject Status
          <select
            className="mt-2 w-full ring-2 ring-whiteFade dark:text-lightGrey dark:bg-darkMode text-sm p-1.5 rounded"
            name="status"
            id="status"
          >
            <option value="">-- select status --</option>
            <option value="published">published</option>
            <option value="draft">draft</option>
            <option value="archived">archived</option>
          </select>
        </label>
        <div className="flex items-center justify-center mt-4">
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
  );
};
