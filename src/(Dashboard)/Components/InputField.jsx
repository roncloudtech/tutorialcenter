// import { Icon } from "@iconify/react/dist/iconify.js";
// import React from "react";

// export default function InputField({
//   error,
//   type,
//   register,
//   defaultValue,
//   placeholder,
//   serverErr,
//   inputProps,
//   name,
//   className,
//   label,
//   labelClassName,
//   icon,
// }) {
//   return (
//     <>
//       {label && <label className={labelClassName}>{label}</label>}
//       <div className="flex gap-2 px-2 py-[10px]">
//         <input
//           type={type}
//           defaultValue={defaultValue}
//           placeholder={placeholder}
//           {...inputProps}
//           className={className}
//         />
//         {icon && <Icon icon={icon} width="24" height="24" />}
//       </div>
//       {error?.message && (
//         <p className="text-red text-[10px]">{error.message.toString()}</p>
//       )}
//       {serverErr && <p className="text-red text-[10px]">{serverErr}</p>}
//     </>
//   );
// }
