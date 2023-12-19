import React, { useEffect } from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { useDispatch, useSelector } from "react-redux";
import { BurrowHistoryTable } from "../../components/burrow-history/BurrowHistoryTable";
import { fetchBurrowsActioin } from "./burrowActions.js";

const BurrowHistory = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    user?.role === "admin" && dispatch(fetchBurrowsActioin());
  }, [dispatch, user?.role]);

  return user?.role === "admin" ? (
    <div className="bg-background2">
      <UserLayout title={"History"}>
        <BurrowHistoryTable />
      </UserLayout>
    </div>
  ) : (
    <div className="bg-background2">
      <h1>Unauthorize</h1>
    </div>
  );
};

export default BurrowHistory;
