import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";
import { returnBurrowedBookActioin } from "../../pages/burrow-history/burrowActions";
import { Review } from "../review/Review";
import { CustomModal } from "../custom-modal/CustomModal";
import { setShowModal } from "../../system-state/systemSlice";
import { useState } from "react";

export const BurrowHistoryTable = ({ userId }) => {
  const dispatch = useDispatch();
  //have is as a local variable
  const [selectedBurrow, setSelectedBurrow] = useState({});

  // if this is requested from all  burrow hostory or

  //match id fomr user state and id from burrow state
  let { burrows } = useSelector((state) => state.burrowInfo);

  console.log(userId);

  //getting burrows only for one person from id
  if (userId) {
    //burrows is overwritten
    burrows = burrows.filter((item) => item.userId === userId);
  }

  //i need to update in burrow state (_id)and book state(userId)
  const handleOnReturn = (_id) => {
    if (window.confirm("Are you ready to return the book?")) {
      //call api update the book state and fetch all the burrow history
      dispatch(returnBurrowedBookActioin(_id));
    }
  };

  const handleOnReview = (obj) => {
    console.log(obj);

    setSelectedBurrow(obj);
    //obj is here but I like to send it as props to Review

    //show modal
    //in oreder to write a review
    //after click - obj has bookid , _id , bookname
    dispatch(setShowModal(true));
  };

  return (
    <div className="">
      <CustomModal title="Leave review">
        <Review {...selectedBurrow} />
      </CustomModal>

      <div className="d-flex justify-content-between">
        <label htmlFor="">{burrows.length} found!</label>
        <div>
          <Form.Control type="text" placeholder="search book by name" />
        </div>
      </div>

      <Table striped bordered hover text-center>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Book Name</th>
            <th>Student name</th>
            <th>Burrowed Date</th>
            <th>Due Date</th>
            <th>Returned</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map(
            (
              {
                thumbnail,
                _id,
                userName,
                bookName,
                bookId,
                dueDate,
                isReturned,
                returnedDate,
                createdAt,
                reviewGiven,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <img src={thumbnail} alt="" width={"80rems"} />
                </td>
                <td>
                  <h4>{bookName}</h4>
                </td>
                <td>{userName}...</td>
                <td>{createdAt?.slice(0, 10)}</td>
                <td>{dueDate?.slice(0, 10)}</td>

                {userId ? (
                  <td>
                    {isReturned ? (
                      reviewGiven ? (
                        <span className="text-success fw-bold">
                          Review written
                        </span>
                      ) : (
                        <Button
                          onClick={() =>
                            handleOnReview({ _id, bookId, bookName })
                          }
                          variant="warning"
                        >
                          Leave Review
                        </Button>
                      )
                    ) : (
                      <Button onClick={() => handleOnReturn(_id)}>
                        Return Book
                      </Button>
                    )}
                  </td>
                ) : (
                  <td>
                    <Alert variant={isReturned ? "success" : "warning"}>
                      {isReturned ? "Returned" : "Not Yet"}
                    </Alert>
                  </td>
                )}
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
