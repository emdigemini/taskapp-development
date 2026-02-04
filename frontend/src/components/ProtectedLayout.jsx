import Navbar from "./Navbar/Navbar"

const ProtectedLayout = () => {
  return (
    <div className="flex w-full">
      <Navbar />
    </div>
  )
}

export default ProtectedLayout