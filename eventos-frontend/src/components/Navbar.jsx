const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full h-20 bg-slate-900 text-blue-100">
            <h3>Developer's Events</h3>
            <ul className="flex">
                <li className="px-10">About</li>
                <li className="px-10">Events</li>
                <li className="px-10">Info</li>
                <li className="px-10">Contact</li>
            </ul>
        </div>
    )
}

export default Navbar;