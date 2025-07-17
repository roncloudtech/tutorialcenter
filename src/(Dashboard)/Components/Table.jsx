import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

export default function Table({ columns }) {
  return (
    <table className="border-separate border-spacing-y-2">
      <thead>
        <tr className="dark:text-lightGrey dark:bg-darkMode">
          {columns.map((cols, i) => {
            return (
              <th key={i} className={cols.className}>
                {cols.headers}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        <tr className="dark:text-lightGrey dark:bg-whiteFade rounded-lg">
          <td className="text-start py-3.5 pl-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <img
                  src="https://www.figma.com/file/C2fHCiSoElx3NBQgrtVrXE/image/9fa492644538aeb8fa7ffd83195864e66d955fde"
                  className="absolute top-0 right-0 w-full h-full"
                  alt=""
                />
              </div>
              <span className="text-[12px]">Kola John Olamide</span>
            </div>
          </td>
          <td>#001</td>
          <td>Lagos, Nigerian</td>
          <td>081XXXXXXXX</td>
          <td>17/04/99</td>
          <td>Online</td>
          <td className="text-end pr-3">
            <Link className="flex justify-end" to={`#`}>
              <button className="w-9 h-9 flex items-center justify-center rounded-lg bg-darkMode">
                <Icon icon="carbon:view" width="20" height="20" />
              </button>
            </Link>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
