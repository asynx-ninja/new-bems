import DefaultLayout from "../../../layouts/DefaultLayout"

const BrgyResidentsManagement = () => {
    const Layout = () => (
        <div>
            This is Barangay Residents Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default BrgyResidentsManagement