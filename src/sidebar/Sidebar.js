import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { PiStudentBold } from "react-icons/pi";
import { FaHistory } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineReviews } from "react-icons/md";

export const Sidebar = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <div className="p-2 sidebar bg-background vh-100">
      <div className="top mt-5 font-weight-bold text-center"> CL - Admin </div>
      <hr />
      <div className="bottom ">
        <ul className="fs-6 ">
          <li>
            <Link
              className="nav-link d-flex align-items-center gap-2 text-white"
              to="/dashboard"
            >
              <MdDashboard /> Dashboard
            </Link>
          </li>
          {user?.role === "admin" && (
            <>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white"
                  to="/books"
                >
                  <ImBooks /> Books
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white"
                  to="/reviews"
                >
                  <MdOutlineReviews /> Reviews
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white"
                  to="/all-admins"
                >
                  <PiStudentBold />
                  Admins
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white"
                  to="/students"
                >
                  <PiStudentBold /> Students
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link d-flex align-items-center gap-2 text-white"
                  to="/burrow-history"
                >
                  <FaHistory /> History
                </Link>
              </li>
            </>
          )}

          <li>
            <Link
              className="nav-link d-flex align-items-center gap-2 text-white"
              to="/my-books"
            >
              <FaHistory /> My Books
            </Link>
          </li>
          <li className="font-weight-normal">
            <Link
              className="nav-link d-flex align-items-center gap-2 text-white "
              to="/my-profile"
            >
              <FaUserCog /> My Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
