import DefaultLayout from "../../layouts/DefaultLayout"

const BrgyResidents = () => {
    const Layout = () => (
        <div>
            This is Barangay Residents Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default BrgyResidents