import DefaultLayout from "../../../layouts/DefaultLayout"

const StaffBrgyOfficials = () => {
    const Layout = () => (
        <div>
            This is Barangay Officials Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default StaffBrgyOfficials