// @ts-nocheck
import { toast } from "react-toastify";

const notify: (
  type: string,
  msg: string,
  position?: any,
  duration?: any
) => any = (type, msg, position, duration) => {
  const toastParam = {
    position: position ? toast.POSITION[position] : toast.POSITION.TOP_RIGHT,
    autoClose: duration ? duration : 3000,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    newestOnTop: true,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
    theme: "colored",
  };

  switch (type) {
    case "info":
      return toast.info(msg, toastParam);
    case "success":
      return toast.success(msg, toastParam);
    case "warning":
      return toast.warning(msg, toastParam);
    case "error":
      return toast.error(msg, toastParam);
    default:
      return toast.info(msg, toastParam);
  }
};

export default notify;
