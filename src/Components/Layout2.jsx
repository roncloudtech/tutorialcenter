import { Link } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
export default function Layout2({
  children,
  btnTitle,
  btnPath,
  reverse,
  bgImage,
}) {
  return (
    <div
      className={`${
        reverse ? "flex-row-reverse" : ""
      } w-screen h-screen flex max-lg:flex-col-reverse overflow-hidden scroll`}
    >
      <PerfectScrollbar
        options={{ suppressScrollX: true }}
        className="lg:w-[57%] w-full bg-white h-full"
      >
        {children}
      </PerfectScrollbar>
      <div
        className="block lg:w-[43%] max-lg:h-[25%] h-full bg-primary relative bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {btnTitle && (
          <div
            className={`absolute ${
              reverse ? " -right-1 rounded-l-3xl" : " -left-1 rounded-r-3xl"
            } bottom-16 w-20 h-8 bg-white  `}
          >
            <Link
              to={btnPath}
              className="text-xs text-primary font-semibold w-full h-full flex justify-center items-center"
            >
              {btnTitle}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
