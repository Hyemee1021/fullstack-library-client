import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  updateReviewAction,
  deleteReviewsAction,
} from "../../pages/book/bookAction";
export const ReviewTable = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.bookInfo);

  //swtiches is input as well
  const handleOnStatus = (e) => {
    const { value, checked } = e.target;

    if (window.confirm("ARe you sure to update?")) {
      dispatch(
        updateReviewAction({
          _id: value,
          status: checked ? "active" : "inactive",
        })
      );
      //call server and updat review
    }
    //value is _id
    //checked returns boolean
  };

  const handleOnDelete = (_id) => {
    if (window.confirm("ARe you sure to delete review?"))
      dispatch(deleteReviewsAction(_id));
  };
  return (
    <div className="">
      <p className="d-flex justify-content-between">
        <label htmlFor="">{reviews.length} found!</label>
        <div>
          <Form.Control type="text" placeholder="search book by name" />
        </div>
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>status</th>
            <th>Book Name</th>
            <th>Review Title</th>
            <th>Message</th>
            <th>Rating</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map(
            ({ _id, status, bookName, title, message, rating }, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  {" "}
                  <Form.Check // prettier-ignore
                    onChange={handleOnStatus}
                    type="switch"
                    id="custom-switch"
                    label={status}
                    value={_id}
                  />
                </td>
                <td>
                  <span>{status}</span>
                </td>
                <td>{title}</td>
                <td>{message}</td>
                <td>{rating}</td>
                <td>
                  <Button variant="danger" onClick={() => handleOnDelete(_id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
