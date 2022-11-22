import { toast } from "react-toastify";

export function toastSucess(message: string) {
  toast(message, {
    type: "success",
    position: toast.POSITION.TOP_CENTER,
    style: {},
  });
}

export function toastError(message: string) {
  toast(message, {
    type: "error",
    position: toast.POSITION.TOP_CENTER,
    style: {},
  });
}
