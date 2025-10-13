import { Icon } from "@iconify/react/dist/iconify.js";
import { useSchoolContext } from "../../Context/SchoolContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { delay } from "../../Utils/Delay";

export default function LogoutModal({ setModal, modal }) {
  // Loading state
  const [isLoading, setIsLoading] = useState(false);
  // context
  const { setAuthenticatedUser, setRole } = useSchoolContext();
  // navigation
  const navigate = useNavigate();
  // Function to handle logout
  const handleLogout = async () => {
    setIsLoading(true);
    // Simulate a delay for logout process
    await delay(3000);
    setIsLoading(false);
    setModal(false);
    // Set user and role to null in the local storage and context
    setAuthenticatedUser({});
    setRole("");
    localStorage.setItem("userInfo", JSON.stringify({}));
    localStorage.setItem("role", "");
    // Navigate to login page
    navigate("/login");
  };
  return (
    <div
      className={`${
        modal ? "opacity-100 visible z-[70] hide-scroll" : "opacity-0 invisible"
      } fixed inset-0 flex items-center justify-center cursor-[url(https://yomicasual.africa/wp-content/themes/minimog/assets/images/cursor/light-close.png),_pointer]`}
    >
      <div onClick={() => setModal(false)} className="modal-overlay"></div>
      <div
        className={`opacity-100 z-50 max-w-[400px] w-full cursor-auto relative mx-4 `}
      >
        <button
          onClick={() => setModal(false)}
          className="absolute transition-all top-0 right-0 -translate-y-1/2 translate-x-1/2 close-modal-button flex items-center justify-center w-[40px] h-[40px] rounded-full shadow-[0_4px_10px_#0000002b] bg-white text-[#563725] hover:bg-[#563725] hover:text-white z-50"
        >
          <Icon icon="hugeicons:cancel-01" width="18" height="18" />
        </button>
        <div className="modal-content-wrap opacity-100 visible z-50 max-h-[calc(100vh - 60px)] w-full h-full rounded-md bg-white overflow-auto">
          <div className="md:p-6 p-4 text-center">
            <h2 className="lg:text-2xl text-xl">
              Are you sure you want to Log out?
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <button
                onClick={handleLogout}
                className="max-sm:text-sm font-medium w-full p-1.5 ring-1 ring-secondaryDark300 text-secondaryDark300 rounded-lg text-base flex items-center justify-center"
              >
                {isLoading ? (
                  <Icon icon="line-md:loading-loop" width="24" height="24" />
                ) : (
                  " Log me out"
                )}
              </button>
              <button
                onClick={() => setModal(false)}
                className="max-sm:text-sm font-medium w-full p-1.5 ring-1 ring-secondaryDark300 bg-secondaryDark300  rounded-lg text-base"
              >
                Stay logged in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
