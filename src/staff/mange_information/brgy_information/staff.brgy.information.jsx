import DefaultLayout from "../../../layouts/DefaultLayout"

const StaffBrgyInformation = () => {
    const Layout = () => (
        <div>
            This is Barangay Information Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default StaffBrgyInformation