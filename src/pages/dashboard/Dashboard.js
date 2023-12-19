import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Container, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { UsersTable } from "../../components/user/UsersTable";
const Dashboard = () => {
  const { allUsers } = useSelector((state) => state.userInfo);
  const users = allUsers.filter((item) => item.status === "active");

  console.log(allUsers);

  const { user } = useSelector((state) => state.userInfo);
  console.log(user);

  const { books } = useSelector((state) => state.bookInfo);
  console.log(books);

  //I need burrow list
  const randomAry = (array, n) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array.slice(0, 4);
  };

  const randomUsers = randomAry([...users]);
  const randomBooks = randomAry([...books]);

  return user?.role === "admin" ? (
    <div className="bg-background2">
      <UserLayout title="Dashboard">
        <Container>
          <Row className="shadow-sm rounded bg-white py-3">
            <h4>Reviews</h4>
            <Col className="py-4 gap-3  d-flex justify-content-center flex-wrap align-items-center">
              {randomUsers.map((user) => (
                <Link to="#" key={user._id}>
                  <div
                    className="card d-flex wrap justify-content-center align-items-center shadow-sm"
                    style={{ width: "12rem" }}
                  >
                    <div>
                      <RxAvatar />
                    </div>
                    <div className="card-body text-center">
                      <p className="card-title">
                        {user.fName}
                        {/*  */}
                        {user.lName}
                      </p>
                      <p className="card-title">{user.status}</p>
                      <p className="card-title">{user.email}</p>
                    </div>
                  </div>
                </Link>
              ))}
              <Link to="#">... more</Link>
            </Col>
          </Row>
          <Row className="shadow gap-3 mt-4">
            <Col className="shadow bg-white rounded py-3">
              <h5>OverDued Books</h5>
              <hr />
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>dueDate</th>
                    <th>Email</th>
                    <th>joined Date</th>
                  </tr>
                </thead>
                <tbody>
                  {randomBooks.map((book, i) => (
                    <tr>
                      <td>{book.name}</td>
                      <td>{book.author}</td>
                      <td>{book.dueDate}</td>
                      <td>{book.dueDate}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
            <Col className="shadow bg-white rounded py-3">
              <h5>Inqueries</h5>
              <hr />
              <UsersTable role="student" />
            </Col>
          </Row>
        </Container>
      </UserLayout>
    </div>
  ) : (
    <div className="bg-background2">
      <h1>unathorized</h1>
    </div>
  );
};

export default Dashboard;
