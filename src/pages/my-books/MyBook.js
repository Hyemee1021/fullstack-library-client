import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";
import { BurrowHistoryTable } from "../../components/burrow-history/BurrowHistoryTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBurrowsActioin } from "../burrow-history/burrowActions";
import { useEffect } from "react";

const MyBook = () => {
  const { user } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBurrowsActioin());
  }, [dispatch]);
  console.log(user._id);

  return (
    <div className="bg-background2">
      <UserLayout title={"My books"}>
        {/* passing id then onlt fetch book according to the id */}
        <BurrowHistoryTable userId={user._id} />
      </UserLayout>
    </div>
  );
};

export default MyBook;
