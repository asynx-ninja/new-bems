import DefaultLayout from "../../layouts/DefaultLayout"

const BrgyOfficials = () => {
    const Layout = () => (
        <div>
            This is Barangay Officials Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default BrgyOfficials