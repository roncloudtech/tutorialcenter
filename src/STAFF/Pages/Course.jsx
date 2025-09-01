import React, { useState } from "react";
import DashboardLayout from "../../(Dashboard)/DashboardLayout";
import Title from "../../(Dashboard)/Components/Title";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Icon } from "@iconify/react/dist/iconify.js";
import axios from "axios";
import { useCourses } from "../../Hooks/useCourses";
import { queryClient } from "../..";
import { useTutors } from "../../Hooks/useTutors";
import { useSchoolContext } from "../../Context/SchoolContext";

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
      if (res.status === 201) {
        // clear all form inputs
        setErrors({});
        setServerErr("");
        setCourseFile();
        setFormData({
          name: "",
          description: "",
          price: "",
        });
        // Invalidate the course query and refecth it
        queryClient.invalidateQueries({
          queryKey: ["courses"],
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
  const { authenticatedUser } = useSchoolContext();
  // Capture all Course information
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    status: "",
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
  // All selected course || department || tutors
  const [selected, setSelected] = useState({
    courses: [],
    departments: [],
    tutors: [],
  });
  // Modals state
  const [isVisible, setIsVisible] = useState({
    course: false,
    department: false,
    tutor: false,
  });
  // Toggle state Modals
  const toggleCourseModal = () => {
    setIsVisible((prev) => ({ ...prev, course: !prev.course }));
  };
  const toggleDepartmentModal = () => {
    setIsVisible((prev) => ({ ...prev, department: !prev.department }));
  };

  // All departments
  const allDepartments = ["Commerce", "Science", "Art"];
  // This function toggle the selected department
  const toggleSelectedDepartment = (department) => {
    setSelected((prev) => {
      // check if the department exists
      const checkIfDeptExist = prev.departments.find(
        (dept) => dept === department
      );
      if (checkIfDeptExist) {
        // remove
        const prevDept = prev.departments.filter((dept) => dept !== department);
        return { ...prev, departments: prevDept };
      } else {
        // add a new department
        const newDept = [...prev.departments, department];
        return { ...prev, departments: newDept };
      }
    });
  };
  const removeSelectedDept = (department) => {
    setSelected((prev) => ({
      ...prev,
      departments: prev.departments.filter((dept) => dept !== department),
    }));
  };

  // This function toggle the selected course
  const toggleSelectedCourse = (course) => {
    setSelected((prev) => {
      const checkIfCourseExist = prev.courses.find((c) => c.id === course.id);
      // if the course exists remove
      if (checkIfCourseExist) {
        // remove
        const prevCourses = prev.courses.filter((c) => c.id !== course.id);
        return { ...prev, courses: prevCourses };
      } else {
        // Add a new course
        const newCourses = [...prev.courses, course];
        return { ...prev, courses: newCourses };
      }
    });
  };
  // Remove a selected course by id
  const removeSelectedCourse = (courseId) => {
    setSelected((prev) => ({
      ...prev,
      courses: prev.courses.filter((c) => c.id !== courseId),
    }));
  };

  // This function toggle the selected Tutor
  const toggleSelectedTutor = (tutor) => {
    setSelected((prev) => {
      const checkIfTutorExist = prev.tutors.find((t) => t.id === tutor.id);
      // if the Tutor exists remove
      if (checkIfTutorExist) {
        // remove
        const prevTutor = prev.tutors.filter((t) => t.id !== tutor.id);
        return { ...prev, tutors: prevTutor };
      } else {
        // Add a new Tutor
        const newTutor = [...prev.tutors, tutor];
        return { ...prev, tutors: newTutor };
      }
    });
  };

  // Remove a selected course by id
  const removeSelectedTutor = (tutorId) => {
    setSelected((prev) => ({
      ...prev,
      tutors: prev.tutors.filter((t) => t.id !== tutorId),
    }));
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
    if (!formData.status.trim()) newErrors.status = "Status is required";
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (!formData.description.length > 20) {
      newErrors.description = "Description must be more than 20 characters";
    }
    if (!courseFile) newErrors.image = "Image is required";
    if (!selected.departments.length > 0)
      newErrors.department = "Department is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Select Courses component
  const GetAllCourses = () => {
    const { data, isLoading } = useCourses();
    if (isLoading)
      return (
        <div
          style={{ display: isVisible.course ? "block" : "none" }}
          className="w-full flex items-center justify-center dark:text-lightGrey"
        >
          <Icon icon="line-md:loading-loop" width="24" height="24" />
        </div>
      );
    return (
      <div
        className={`${
          isVisible.course ? "block" : "hidden"
        } z-50 absolute top-[87px] left-0 w-full overflow-hidden ring-2 ring-whiteFade dark:bg-darkMode dark:text-lightGrey p-3 rounded-md`}
      >
        {!data || data.length === 0 ? (
          <div className="dark:text-lightGrey text-xs">No Course Found</div>
        ) : (
          data.map((course) => {
            // Check if a course is selected
            const isCourseSelected = selected.courses.some(
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

  // Select Tutor component
  const GetAllTutors = () => {
    const { data, isLoading } = useTutors();
    if (isLoading)
      return (
        <div
          style={{ display: isVisible.tutor ? "block" : "none" }}
          className="w-full flex items-center justify-center dark:text-lightGrey"
        >
          <Icon icon="line-md:loading-loop" width="24" height="24" />
        </div>
      );
    return (
      <div
        className={`${
          isVisible.tutor ? "block" : "hidden"
        } z-50 absolute top-[87px] left-0 w-full max-h-52 overflow-hidden ring-2 ring-whiteFade dark:bg-darkMode dark:text-lightGrey p-3 rounded-md`}
      >
        <PerfectScrollbar>
          {!data || data.length === 0 ? (
            <div className="dark:text-lightGrey text-xs">No Tutor Found</div>
          ) : (
            data.map((tutor) => {
              // Check if a Tutor is selected
              const isTutorSelected = selected.tutors.some(
                (c) => c.id === tutor.id
              );
              return (
                <button
                  onClick={() => toggleSelectedTutor(tutor)}
                  type="button"
                  key={tutor.id}
                  className="flex items-center gap-2 p-1.5 w-full group hover:dark:bg-lightGrey hover:dark:text-darkMode rounded-md"
                >
                  <div className="flex items-center justify-center w-5 h-5 rounded-sm ring-2 ring-whiteFade group-hover:ring-darkMode">
                    {isTutorSelected && (
                      <Icon icon="mingcute:check-fill" width="14" height="14" />
                    )}
                  </div>
                  <span className="uppercase  text-xs">
                    {tutor.firstname + " " + tutor.lastname}
                  </span>
                  <span
                    className={`${
                      isTutorSelected && "bg-green-500 text-lightGrey"
                    } uppercase  text-xs p-0.5 bg-lightGrey text-black group-hover:bg-green-500 group-hover:text-lightGrey rounded-sm`}
                  >
                    {tutor.staff_role}
                  </span>
                </button>
              );
            })
          )}
        </PerfectScrollbar>
      </div>
    );
  };

  // Select Department component
  const SelectDepartment = () => {
    return (
      <label htmlFor="price" className="text-sm dark:text-lightGrey relative">
        Departments
        <div
          onClick={toggleDepartmentModal}
          className="flex gap-2 w-full cursor-pointer mt-2 ring-2 ring-whiteFade text-lightGrey text-sm p-2 rounded"
        >
          {selected.departments.length > 0 ? (
            selected.departments.map((dept, i) => (
              <div
                key={i}
                className="p-1 ring-2 ring-whiteFade flex gap-2 w-max rounded"
              >
                <span className="text-xs">{dept}</span>
                <button
                  onClick={() => removeSelectedDept(dept)}
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
            <div className="flex items-center justify-between w-full py-1">
              {" "}
              <span className="text-xs">Select Departments</span>
              <Icon icon="bxs:down-arrow" width="15" height="15" />
            </div>
          )}
        </div>
        <div
          className={`${
            isVisible.department ? "block" : "hidden"
          } z-50 absolute top-[94px] left-0 w-full overflow-hidden ring-2 ring-whiteFade dark:bg-darkMode dark:text-lightGrey p-2.5 rounded-md`}
        >
          {allDepartments.map((department, i) => {
            const isDeptSelected = selected.departments.some(
              (dept) => dept === department
            );
            return (
              <button
                onClick={() => toggleSelectedDepartment(department)}
                type="button"
                key={i}
                className="flex items-center gap-2 p-1.5 w-full group hover:dark:bg-lightGrey hover:dark:text-darkMode rounded-md"
              >
                <div className="flex items-center justify-center w-5 h-5 rounded-sm ring-2 ring-whiteFade group-hover:ring-darkMode">
                  {isDeptSelected && (
                    <Icon icon="mingcute:check-fill" width="14" height="14" />
                  )}
                </div>
                <span className="uppercase  text-xs">{department}</span>
              </button>
            );
          })}
        </div>
        {errors.department && (
          <p className="mt-1 text-xs text-red-500">{errors.department}</p>
        )}
      </label>
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
        `${API_BASE_URL}/subjects/`,
        {
          name: formData.name,
          description: formData.description,
          status: formData.status,
          departments: selected.departments,
          created_by: authenticatedUser.id,
          tutors_assignees: selected.tutors.map((tutor) => parseInt(tutor.id)),
          courses_ids: selected.courses.map((course) => course.id),
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);
      if (res.status === 201) {
        // clear all form inputs
        setErrors({});
        setCourseFile();
        setFormData({
          name: "",
          description: "",
          status: "",
        });
        setSelected({ courses: [], departments: [], tutors: [] });
      }
    } catch (error) {
      console.log(error);
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
            onClick={toggleCourseModal}
            className={`cursor-pointer mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded`}
          >
            <div className="dark:text-lightGrey flex gap-4">
              {selected.courses.length > 0 ? (
                selected.courses.map((course) => (
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
                <div className="flex items-center justify-between w-full py-1">
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
        <SelectDepartment />
        <label
          htmlFor="staffs"
          className="text-sm dark:text-lightGrey relative"
        >
          Assign Staffs
          <div
            onClick={() => {
              setIsVisible((prev) => ({ ...prev, tutor: !prev.tutor }));
            }}
            className={`cursor-pointer mt-2 w-full ring-2 ring-whiteFade text-lightGrey text-sm p-1.5 rounded`}
          >
            <div className="dark:text-lightGrey flex gap-4">
              {selected.tutors.length > 0 ? (
                selected.tutors.map((tutor) => (
                  <div
                    key={tutor.id}
                    className="p-1 ring-2 ring-whiteFade flex gap-2 w-max rounded"
                  >
                    <span className="text-xs">
                      {" "}
                      {tutor.firstname + " " + tutor.lastname}
                    </span>
                    <button
                      onClick={() => removeSelectedTutor(tutor.id)}
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
                <div className="flex items-center justify-between w-full py-1">
                  <span className="text-xs">Select staffs</span>
                  <Icon icon="bxs:down-arrow" width="15" height="15" />
                </div>
              )}
            </div>
          </div>
          <GetAllTutors />
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
        <label htmlFor="status" className="text-sm dark:text-lightGrey">
          Subject Status
          <select
            className="mt-2 w-full ring-2 ring-whiteFade dark:text-lightGrey dark:bg-darkMode text-sm p-1.5 rounded"
            name="status"
            id="status"
            value={formData.status}
            onChange={handleFormInputChange}
          >
            <option value="">-- select status --</option>
            <option value="published">published</option>
            <option value="draft">draft</option>
            <option value="archived">archived</option>
          </select>
          {errors.status && (
            <p className="mt-1 text-xs text-red-500">{errors.status}</p>
          )}
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
