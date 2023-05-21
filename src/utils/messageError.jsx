import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const messageError = (message) => {
  toast.error(`Error! ${message}`, {
    theme: "colored",
    autoClose: 2000,
  });
};

export const messageInfo = ()=> {
  toast.info('🦄 Wow so easy!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
}