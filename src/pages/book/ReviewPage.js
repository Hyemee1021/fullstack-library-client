import React from "react";
import { UserLayout } from "../../components/layout/UserLayout";

import { ReviewTable } from "../../components/books/ReviewTable";

const ReviewPage = () => {
  return (
    <div className="bg-background2">
      <UserLayout title="Books">
        {/* book listing table  */}

        <ReviewTable />
      </UserLayout>
    </div>
  );
};

export default ReviewPage;
