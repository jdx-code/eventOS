const Navbar = () => {
    return (
        <div className="flex justify-around items-center w-full h-20 bg-slate-900 text-blue-100">
            <h3>EventOS</h3>
            <ul className="flex border-2 border-yellow-300 ml-28">
                <li className="px-10">About</li>
                <li className="px-10">Events</li>
                <li className="px-10">Info</li>
                <li className="px-10">Contact</li>
            </ul>
            <div>
                <button>Login</button>
                <button>Become a member</button>
            </div>
            
        </div>
    )
}

export default Navbar;