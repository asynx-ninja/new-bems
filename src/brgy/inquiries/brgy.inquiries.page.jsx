import DefaultLayout from "../../layouts/DefaultLayout";
import Table from "./manage_inquiries/Table";
import { DataTable } from "../../data/InquiryData";
import { useState } from "react";

const BrgyInquiries = () => {
  const [data, setData] = useState(DataTable);

  const Layout = () => (
    <div>
      This is Inquiries
      <Table filtered={data} />
    </div>
  );

  return <DefaultLayout component={<Layout />} />;
};

export default BrgyInquiries;
