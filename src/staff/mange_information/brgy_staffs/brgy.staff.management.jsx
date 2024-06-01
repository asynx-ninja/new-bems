import DefaultLayout from "../../../layouts/DefaultLayout"

const BrgyStaffManagement = () => {
    const Layout = () => (
        <div>
            This is Barangay Staff Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default BrgyStaffManagement