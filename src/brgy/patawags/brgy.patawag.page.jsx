import { useState } from "react";
import DefaultLayout from "../../layouts/DefaultLayout";

const BrgyPatawag = () => {
  const Layout = () => (
    <div>
        This is Patawag Page
    </div>
  )

  return <DefaultLayout component={<Layout/>}/>;
};

export default BrgyPatawag;
