import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import PersonDetails from './Details';
import VideoPlayer from '../../../../Helpers/VideoPlayer';

export default function DetailsModal({ isOpen, onClose, person }) {
    const [isPlaying, setIsPlaying] = useState(false);
    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        } else {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = ''; // Restore scrolling
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = ''; // Cleanup on unmount
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 w-screen h-screen p-4"
            onClick={onClose} // Close modal when clicking outside content
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <div
                className="relative w-full max-w-2xl max-h-[90vh] bg-white rounded-lg shadow-2xl overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
            >
                {/* Close Button */}
                <button
                    className="absolute z-50 right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X className="h-6 w-6 text-gray-600" />
                    <span className="sr-only">Close</span>
                </button>

                <div className="w-full aspect-video bg-black flex items-center justify-center overflow-hidden rounded-t-lg">
                    <VideoPlayer thum={person.thum || ""} muted={false} src={person.video} isPlaying={isPlaying} onToggle={() => setIsPlaying(!isPlaying)} />
                </div>
                <div className="p-6">
                    <PersonDetails
                        name={person.name}
                        image={person.image}
                        position={person.position}
                        info={person.info}
                        email={person.email}
                        description={person?.description}
                    />
                </div>
            </div>
        </div>,
        document.body
    );
}
