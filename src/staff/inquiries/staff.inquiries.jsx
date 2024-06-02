import DefaultLayout from "../../layouts/DefaultLayout";
import Table from "../inquiries/manage_inquiries/Table";
import { DataTable } from "../../data/StaffInquiryData";
import { useState } from "react";

const StaffInquiries = () => {
  const [data, setData] = useState(DataTable);

  const Layout = () => (
    <div>
      This is Inquiries
      <Table filtered={data} />
    </div>
  );

  return <DefaultLayout component={<Layout />} />;
};

export default StaffInquiries;
