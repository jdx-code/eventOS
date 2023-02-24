const Navbar = () => {
    return (
        <div className="flex justify-around items-center w-full h-20 bg-slate-900 text-blue-100">
            <h3>EventOS</h3>
            <ul className="flex border-2 border-yellow-300">
                <li className="px-12">About</li>
                <li className="px-12">Events</li>
                <li className="px-12">Info</li>
                <li className="px-12">Contact</li>
                <li className="px-12">Community</li>
            </ul>
            <div>
                <button className="pr-4">Login</button>
                <button>Sign up</button>
            </div>
            
        </div>
    )
}

export default Navbar;