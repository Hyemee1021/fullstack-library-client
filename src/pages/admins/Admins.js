import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersAction } from "../user_sinup_login/userAction.js";
import { UsersTable } from "../../components/user/UsersTable.js";
export const Admins = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    user?.role === "admin" && dispatch(getAllUsersAction());
  }, [dispatch, user.role]);

  return user?.role === "admin" ? (
    <div className="bg-background2">
      <UserLayout title={"Admins"}>
        <UsersTable role="admin" />
      </UserLayout>
    </div>
  ) : (
    <div className="bg-background2">
      <h1>Unauthorize</h1>
    </div>
  );
};
