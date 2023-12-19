import { toast } from "react-toastify";
import {
  postBurrow,
  fetchBurrows,
  returnBurrowedBook,
} from "../../helpers/axiosHelper";
import { getABookAction } from "../book/bookAction";
import { setBurrows } from "../../pages/burrow-history/burrowSlice.js";

export const postBurrowActioin = (obj) => async (dispatch) => {
  const pending = postBurrow(obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // refetch the selected book and update the page

    dispatch(getABookAction(obj.bookId));
  }
};
export const returnBurrowedBookActioin = (_id) => async (dispatch) => {
  const pending = returnBurrowedBook(_id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // refetch the selected book and update the page

    dispatch(fetchBurrowsActioin()); // fetch and set state
  }
};

export const fetchBurrowsActioin = () => async (dispatch) => {
  const { status, message, burrows } = await fetchBurrows();

  console.log(burrows);
  toast[status](message);

  if (status === "success") {
    // refetch the selected book and update the page

    dispatch(setBurrows(burrows));
  }
};
