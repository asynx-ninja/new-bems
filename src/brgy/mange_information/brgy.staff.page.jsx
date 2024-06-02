import DefaultLayout from "../../layouts/DefaultLayout"

const BrgyStaff = () => {
    const Layout = () => (
        <div>
            This is Barangay Staff Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default BrgyStaff