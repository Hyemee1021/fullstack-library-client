import { toast } from "react-toastify";
import {
  deleteBook,
  getBooks,
  postBook,
  updateBook,
  postReview,
  fetchReviews,
  updateReview,
  deleteReview,
} from "../../helpers/axiosHelper";
import { setABook, setBooks, setReviews } from "./bookSlice";
import { setShowModal } from "../../system-state/systemSlice";
import { fetchBurrowsActioin } from "../burrow-history/burrowActions";

export const getAllBooksAction = () => async (dispatch) => {
  const { status, message, books } = await getBooks();

  if (status === "success") {
    dispatch(setBooks(books));
  }
};

export const getABookAction = (_id) => async (dispatch) => {
  const { status, message, books } = await getBooks(_id);
  if (status === "success") {
    dispatch(setABook(books));
  }
};

export const postNewBookAction = (bookObj) => async (dispatch) => {
  const pending = postBook(bookObj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store
    dispatch(getAllBooksAction());
  }
};

export const updateBookAction = (bookObj) => async (dispatch) => {
  const pending = updateBook(bookObj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store

    dispatch(setABook({}));

    //fetch burrowlist agian and cen worte another review
    dispatch(fetchBurrowsActioin());
  }
};

export const deleteBookAction = (_id) => async (dispatch) => {
  const pending = deleteBook(_id);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store
    dispatch(getAllBooksAction());
    return true;
  }
};

//
export const postNewReviewAction = (Obj) => async (dispatch) => {
  const pending = postReview(Obj);
  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store
    dispatch(setShowModal(false));

    //fetch all the burrow list again
    dispatch(fetchBurrowsActioin());
  }
};
//I need _id for patch
export const updateReviewAction = (Obj) => async (dispatch) => {
  const pending = updateReview(Obj);

  toast.promise(pending, {
    pending: "Please wait...",
  });
  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    // call the fuction that fatches all the books and updates the store

    //fetch all the burrow list again
    dispatch(fetchBurrowsActioin());
  }
};
//
export const fetchReviewsAction = () => async (dispatch) => {
  const pending = fetchReviews();

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message, reviews } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(setReviews(reviews));
  }
};
export const deleteReviewsAction = (_id) => async (dispatch) => {
  const pending = deleteReview(_id);

  toast.promise(pending, {
    pending: "Please wait...",
  });

  const { status, message } = await pending;
  toast[status](message);

  if (status === "success") {
    dispatch(fetchReviewsAction());
  }
};
