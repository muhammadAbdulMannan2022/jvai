

export default function PersonDetails({ name, image, position, info, email = "example@abc.com", description }) {
    return (
        <div className="flex flex-col items-start text-center p-3 bg-gray-50 rounded-b-lg"> {/* Reduced padding, added light background */}
            <div className="flex items-start gap-4">
                <img
                    loading="lazy"
                    src={image || "/placeholder.svg?height=128&width=128&query=person profile"}
                    alt={name}
                    width={128}
                    height={128}
                    className="w-24 h-24 rounded-full object-cover border-3 border-blue-500 mb-3 shadow-md" // Slightly smaller, stronger border, shadow
                />
                <div className="flex flex-col items-start">
                    <h3 className="font-bold text-2xl text-gray-800 mb-1">{name}</h3> {/* Reduced font size, margin */}
                    <div className="text-xs font-semibold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full mb-1.5"> {/* Reduced padding, margin */}
                        {position}
                    </div>
                    <p>{email}</p>
                </div>
            </div>
            <p className="text-sm text-start text-gray-700 leading-snug px-2 indent-6 line-clamp-3">
                {description}
            </p>
        </div>
    );
}
