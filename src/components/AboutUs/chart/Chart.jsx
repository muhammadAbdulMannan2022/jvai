import { useState, useCallback } from 'react';
import Tree from 'react-d3-tree';
import DetailsModal from './modal/Modal';
import GradientTitle from '../../../Helpers/GradientTitle';
import { FaPlay } from 'react-icons/fa';

const organizationData = {
    name: 'TechCorp Industries',
    attributes: {
        position: 'Head of JVAI',
        name: 'Gazi Alauddin',
        info: '15+ years experience in tech leadership',
        image: '/mainTeam/Gazi vai.png',
        department: 'Executive',
        video: "",
        email: "gazi@exampl.com"
    },
    children: [
        {
            name: 'Oparation',
            attributes: {
                image: '/mainTeam/op.jpg',
                type: "team"
            },
            children: [

                {
                    name: 'Rufsun Ahmed',
                    attributes: {
                        position: 'Head of Oparation',
                        name: 'Rufsun Ahmed',
                        info: 'Full-stack development and system design',
                        image: '/mainTeam/image.png',
                        department: 'Engineering',
                        video: "",
                        email: "gazi@exampl.com"
                    }
                },
                {
                    name: 'Palash',
                    attributes: {
                        position: 'Head of Oparation',
                        name: 'Palash',
                        info: 'Full-stack development and system design',
                        image: '/mainTeam/Palash vai.png',
                        department: 'Engineering',
                        video: "",
                        email: "gazi@exampl.com"
                    }
                },
                {
                    name: 'Fahad',
                    attributes: {
                        position: 'Head of Oparation',
                        name: 'Fahad',
                        info: 'React specialist and UI/UX implementation',
                        image: '/mainTeam/Istiaq kflghlfk.png',
                        department: 'Engineering',
                        video: "",
                        email: "gazi@exampl.com"
                    }
                }

            ]
        },
        {
            name: 'Sales',
            attributes: {
                image: '/mainTeam/sl.jpg',
                type: "team"
            },
            children: [
                {
                    name: 'David Park',
                    attributes: {
                        position: 'Head of Sales',
                        name: 'Mushfiqur Rahman',
                        info: 'SEO, social media, and content marketing',
                        image: '/mainTeam/Mushfiqur Rahman_.png',
                        department: 'Marketing',
                        video: "",
                        email: "gazi@exampl.com"
                    }
                }
            ]
        },
        {
            name: 'Business Development',
            attributes: {
                image: '/mainTeam/op.jpg',
                type: "team"
            },
            children: [
                {
                    name: 'Tushar',
                    attributes: {
                        position: 'Head of Business Development',
                        name: 'David Park',
                        info: 'SEO, social media, and content marketing',
                        image: '/mainTeam/Tushar vai.png',
                        department: 'Marketing',
                        video: "",
                        email: "gazi@exampl.com"
                    }
                }
            ]
        },
    ]
};


const CustomNodeElement = ({ nodeDatum, toggleNode }) => {
    const [isOpen, setIsOpen] = useState(false);
    const attributes = nodeDatum.attributes || {};
    const isPeopleType = attributes.type !== "team" ? true : false;
    return (
        <g>
            <foreignObject width="280" height="140" x="-140" y="-70" style={{ overflow: 'visible' }}>
                <div
                    onClick={toggleNode}
                    className="p-4 bg-white border-2 border-gray-200 shadow-lg rounded-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out"
                >
                    <div className={`flex items-center space-x-4 ${isPeopleType ? "flex-row" : "flex-col gap-5"}`}>
                        {/* Profile Image */}
                        <div className="relative flex-shrink-0">
                            <img
                                src={attributes.image || "/placeholder.svg?height=64&width=64&query=profile image"}
                                alt={attributes.name || nodeDatum.name || "Profile"}
                                width={64}
                                height={64}
                                className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
                            />
                            {
                                isPeopleType && <><div className='absolute top-0 right-0 left-0 w-full h-full bg-gray-400/30 hover:bg-gray-400/50 transition-colors rounded-full flex items-center justify-center' onClick={() => setIsOpen(true)}>
                                    <FaPlay
                                        className="h-5 w-5 text-blue-600"
                                        style={{
                                            animation: 'scalePulse 1s ease-in-out infinite',
                                        }}
                                    />
                                </div>
                                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-500 rounded-full border-2 border-white"></div></>
                            }
                        </div>
                        {/* Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base text-gray-800 truncate">
                                {attributes.name || nodeDatum.name}
                            </h3>
                            {isPeopleType && (
                                <>
                                    <div className="text-xs font-semibold inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full my-1">
                                        {attributes.position || "Unknown Position"}
                                    </div>
                                    <p className="text-xs text-gray-600 leading-snug">
                                        {attributes.info || "No additional information."}
                                    </p>
                                    <button onClick={() => setIsOpen(true)} className="mt-2 p-1 hover:cursor-pointer hover:bg-blue-500 text-xs rounded-xl bg-blue-600 text-white">
                                        Details
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                    {isPeopleType && <DetailsModal isOpen={isOpen} onClose={() => setIsOpen(false)} person={attributes} />}
                </div>
            </foreignObject>
            <style>
                {`
@keyframes scalePulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}
`}
            </style>
        </g>
    );
};


// --- Main OrganizationalTree Component ---
const OrganizationalTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const treeContainerRef = useCallback((container) => {
        if (container) {
            const { width, height } = container.getBoundingClientRect();
            setTranslate({ x: width / 2, y: height / 4 });
        }
    }, []);

    return (
        <div className="w-full bg-gray-50 font-sans">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <GradientTitle
                        text="Meet Our Team"
                        className="bg-gradient-to-l from-blue-500 to-purple-500 text-3xl lg:text-6xl font-bold leading-tight mb-8"
                    />
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Explore our organizational structure. Click on a team member to expand their branch and learn more about their role.
                    </p>
                </div>

                <div
                    id="tree-wrapper"
                    ref={treeContainerRef}
                    className="w-full h-[700px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden"
                >
                    <Tree
                        data={organizationData}
                        translate={translate}
                        orientation="vertical"
                        renderCustomNodeElement={(rd3tProps) => <CustomNodeElement {...rd3tProps} />}
                        pathFunc="diagonal"
                        separation={{ siblings: 1.2, nonSiblings: 2 }}
                        nodeSize={{ x: 320, y: 200 }}
                        initialDepth={1}
                        collapsible={true}
                        zoomable={false}
                        draggable={true}
                        rootNodeClassName="node__root"
                        branchNodeClassName="node__branch"
                        leafNodeClassName="node__leaf"
                    />
                </div>
            </div>
        </div>
    );
};

export default OrganizationalTree;