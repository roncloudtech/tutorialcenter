import { Icon } from "@iconify/react/dist/iconify.js";

const GoBack = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute top-[7%] left-[9%] block">
      <Icon
        icon="iconamoon:arrow-left-2-light"
        width="30"
        height="30"
        className=""
      />
    </button>
  );
};
export default GoBack;
