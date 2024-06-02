import DefaultLayout from "../../layouts/DefaultLayout"

const BrgyInformation = () => {
    const Layout = () => (
        <div>
            This is Barangay Information Management
        </div>
    )

    return <DefaultLayout component={<Layout/>} />
}

export default BrgyInformation