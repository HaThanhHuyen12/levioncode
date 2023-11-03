import { toast } from "react-toastify";

const toastNofication = (type, message, options = {}) => {
  switch (type) {
    case "error":
      toast.error(message, options);
      break;
    case "success":
      toast.success(message, options);
      break;
    default:
      return;
  }
};

export default toastNofication;
