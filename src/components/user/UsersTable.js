import { Button, Form } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const UsersTable = ({ role }) => {
  //passing role as props anmd display dirrent tables
  const { allUsers } = useSelector((state) => state.userInfo);
  const users = allUsers.filter((item) => item.role === role);

  return (
    <div className="">
      <div className="text-end">
        <Link to="/admin-signup mb-3">
          <Button> Add new Admin</Button>
        </Link>
      </div>
      <p className="d-flex justify-content-between">
        <label htmlFor="">
          {users.length} {role} found!
        </label>
        <div>
          <Form.Control type="text" placeholder="search book by name" />
        </div>
      </p>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Status</th>
            <th>Phone</th>
            <th>Email</th>
            <th>joined Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map(
            (
              {
                _id,
                status,
                name,
                author,
                phone,
                email,
                createdAt,
                lName,
                fName,
              },
              i
            ) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{fName + " " + lName}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{email}</td>
                <td>{createdAt?.slice(0, 10)}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};
