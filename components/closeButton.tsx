export default function closeButton () {
    return (
        <div className="flex">
            <button className="bg-green-700 text-white px-4 py-2 rounded mr-2">ALL</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded mr-2">DRIVING</button>
            <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded">PARKED</button>
        </div>
    )
};