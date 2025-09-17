import { Icon } from "@iconify/react/dist/iconify.js";

export default function Spinner() {
  return (
    <div className="w-full  flex items-center justify-center text-center gap-2">
      <Icon icon="line-md:loading-loop" width="35" height="35" />
      <span className="text-xs">Loading...</span>
    </div>
  );
}
