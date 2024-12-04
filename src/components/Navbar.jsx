export default function Navbar() {
    return (<>
    <div className="fixed w-80 h-16 bottom-4  left-[42%] rounded-full border-[3px] border-yello-500 p-6 bg-white shadow-lg shadow-black">
        <ul className="w-full h-full flex justify-between items-center">
            <li><span className="text-xl text-black hover:text-gray-700"><i class="fa-solid fa-house"></i></span></li>
            <li><span className="text-xl text-black hover:text-gray-700"><i class="fa-solid fa-wrench"></i></span></li>
            <li><span className="text-xl text-black hover:text-gray-700"><i class="fa-solid fa-message"></i></span></li>
            <li><span className="text-xl text-black hover:text-gray-700"><i class="fa-solid fa-address-card"></i></span></li>
        </ul>
    </div>
    </>)
  
}
