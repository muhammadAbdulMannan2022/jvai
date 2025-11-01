import { useState, useCallback } from "react";
import Tree from "react-d3-tree";
import DetailsModal from "./modal/Modal";
import GradientTitle from "../../../Helpers/GradientTitle";
import { motion } from "framer-motion";
import { Briefcase, Play, Star } from "lucide-react";
import { FaPlay } from "react-icons/fa";

// ---- INITIAL DATA ----
const initialOrganizationData = {
  name: "TechCorp Industries",
  attributes: {
    position: "Head of JVAI",
    name: "Gazi Alauddin",
    info: "15+ years experience in tech leadership",
    image: "/mainTeam/Gazi vai.png",
    department: "Executive",
    video:
      "https://res.cloudinary.com/dn98ksbcf/video/upload/v1757576913/Gazi_via.mp4_final_lnfvt6.mp4",
    email: "gazialauddin@joinventureai.com",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor dicta praesentium consequatur earum vel autem nisi quas rem officia voluptates, ratione molestiae sequi voluptas itaque ea totam eligendi, necessitatibus neque.",
    isNumOne: true,
    thum: "/gagi.png",
  },
  children: [
    {
      name: "Sales",
      attributes: {
        image: "/mainTeam/sl.jpg",
        type: "team",
      },
      collapsed: true, // COLLAPSED initially
      children: [
        {
          name: "Mushfiqur Rahman",
          attributes: {
            position: "Head of Sales",
            name: "Mushfiqur Rahman",
            info: "SEO, social media, and content marketing",
            image: "/mainTeam/Mushfiqur Rahman_.png",
            department: "Marketing",
            video:
              "https://res.cloudinary.com/dn98ksbcf/video/upload/v1757576897/Sales_agm-_yj3dfv.mp4",
            email: "mushfiqur@exampl.com",
            description: "",
            thum: "/mus.png",
          },
        },
      ],
    },
    {
      name: "Oparation",
      attributes: {
        image: "/mainTeam/op.jpg",
        type: "team",
      },
      collapsed: false, // EXPANDED initially
      children: [
        {
          name: "Rafsun Ahmad",
          attributes: {
            position: "Head of Oparation",
            name: "Rafsun Ahmad",
            info: "Full-stack development and system design",
            image: "/mainTeam/image.png",
            department: "Engineering",
            video:
              "https://res.cloudinary.com/dn98ksbcf/video/upload/v1757576890/Rafsun_nznpoh.mp4",
            email: "rufsun@exampl.com",
            description: "",
            thum: "/ruf.png",
          },
        },
        {
          name: "Palash",
          attributes: {
            position: "Head of Oparation",
            name: "Palash",
            info: "Full-stack development and system design",
            image: "/mainTeam/Palash vai.png",
            department: "Engineering",
            video:
              "https://res.cloudinary.com/dn98ksbcf/video/upload/v1757576884/Palash_cydcxi.mp4",
            email: "palash@exampl.com",
            description: "",
            thum: "/pol.png",
          },
        },
        {
          name: "Fahad",
          attributes: {
            position: "Head of Oparation",
            name: "Fahad",
            info: "React specialist and UI/UX implementation",
            image: "/mainTeam/Istiaq kflghlfk.png",
            department: "Engineering",
            video:
              "https://res.cloudinary.com/dn98ksbcf/video/upload/v1757576899/FAHAD_INTRO_qg9x7a.mp4",
            email: "fahad@exampl.com",
            description: "",
            thum: "/fahad.png",
          },
        },
      ],
    },
    {
      name: "Business Development",
      attributes: {
        image: "/mainTeam/op.jpg",
        type: "team",
      },
      collapsed: true, // COLLAPSED initially
      children: [
        {
          name: "Tushar",
          attributes: {
            position: "Head of Business Development",
            name: "Tushar",
            info: "SEO, social media, and content marketing",
            image: "/mainTeam/Tushar vai.png",
            department: "Marketing",
            video:
              "https://res.cloudinary.com/dn98ksbcf/video/upload/v1757576890/Tushar_bhai_hgpvjq.mp4",
            email: "tushar@exampl.com",
            description: "",
            thum: "/tush.png",
          },
        },
      ],
    },
  ],
};

// ---- PERSON CARD ----
const PersonCard = ({ person, onClick, delay = 0, isGM = false }) => {
  const cardSize = isGM ? "w-24 h-24" : "w-20 h-20";
  const cardPadding = isGM ? "p-5" : "p-4";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 },
      }}
      className="relative group cursor-pointer"
      onClick={onClick}
    >
      <div
        className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 ${cardPadding} border-2 border-blue-600 backdrop-blur-sm`}
      >
        {/* Experience badge */}
        <div className="absolute -top-1 -left-1 z-10">
          <span className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-md text-xs px-2 py-1 rounded-md">
            <Star className="w-2 h-2 mr-1" />
            {person.experience || "15+ yrs"}
          </span>
        </div>

        <div className="mb-4">
          <div
            className={`${cardSize} mx-auto relative rounded-full overflow-hidden ring-2 ring-blue-200 shadow-lg group-hover:ring-4 group-hover:ring-blue-300 transition-all duration-500`}
          >
            <img
              loading="lazy"
              src={person.image || "/placeholder.svg"}
              alt={person.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 right-0 flex items-center justify-center w-full h-full z-20 bg-black/80">
              <FaPlay className="h-5 w-5 animatePlay text-blue-600" />
            </div>
          </div>
        </div>

        <div className="text-center space-y-2">
          <h3
            className={`font-bold ${
              isGM ? "text-lg" : "text-base"
            } text-gray-800`}
          >
            {person.name}
          </h3>

          <span
            className={`inline-block bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-0 shadow-md px-3 py-1 text-xs rounded-md`}
          >
            {person.position}
          </span>

          <p
            className={`text-xs text-gray-600 leading-relaxed ${
              isGM ? "text-sm" : ""
            }`}
          >
            {person.info}
          </p>

          <div className="flex items-center justify-center gap-1 mt-2 text-blue-600 font-medium text-xs">
            <Briefcase className="w-3 h-3" />
            {person.department}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ---- CUSTOM NODE ELEMENT ----
const CustomNodeElement = ({ nodeDatum, toggleNode, hierarchyPointNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const attributes = nodeDatum.attributes || {};
  const isPerson = attributes.type !== "team";

  // Detect depth
  const isDepth1 = hierarchyPointNode.depth === 1;

  return (
    <g>
      <foreignObject
        width="280"
        height="200"
        x="-140"
        y="-50"
        style={{ overflow: "visible" }}
      >
        {isPerson ? (
          <>
            <PersonCard
              person={attributes}
              isGM={attributes.isNumOne}
              onClick={() => setIsOpen(true)}
            />
            <DetailsModal
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              person={attributes}
            />
          </>
        ) : (
          <div
            className="p-4 bg-white border rounded-xl shadow-lg text-center cursor-pointer hover:scale-105 transition"
            onClick={() => {
              if (isDepth1) {
                // call prop function injected by parent to toggle depth1 node
                toggleNode();
              } else {
                toggleNode();
              }
            }}
          >
            <p className="font-semibold text-gray-800">{nodeDatum.name}</p>
          </div>
        )}
      </foreignObject>
    </g>
  );
};

// ---- MAIN COMPONENT ----
const OrganizationalTree = () => {
  const [treeData, setTreeData] = useState(initialOrganizationData);

  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const treeContainerRef = useCallback((container) => {
    if (container) {
      const { width, height } = container.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 4 });
    }
  }, []);

  // Function to toggle only one depth-1 node open at a time
  const toggleNodeAtDepth1 = (nodeName) => {
    const newTreeData = { ...treeData };

    if (!newTreeData.children) return;

    newTreeData.children = newTreeData.children.map((child) => {
      if (child.name === nodeName) {
        return { ...child, collapsed: false };
      } else {
        return { ...child, collapsed: true };
      }
    });

    setTreeData(newTreeData);
  };

  // Override CustomNodeElement to handle depth 1 toggle
  const renderCustomNodeElement = (rd3tProps) => {
    const { nodeDatum, toggleNode, hierarchyPointNode } = rd3tProps;

    const isPerson = nodeDatum.attributes?.type !== "team";
    const isDepth1 = hierarchyPointNode.depth === 1;

    // Custom toggle that enforces one open at depth 1
    const handleToggle = () => {
      if (isDepth1) {
        toggleNodeAtDepth1(nodeDatum.name);
      } else {
        toggleNode();
      }
    };

    return <CustomNodeElement {...rd3tProps} toggleNode={handleToggle} />;
  };

  return (
    <div className="w-[100vw] bg-gray-50 font-sans">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <GradientTitle
            text="Meet Our Team"
            className="bg-gradient-to-l from-blue-500 to-purple-500 text-3xl lg:text-6xl font-bold leading-tight mb-8"
          />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our organizational structure. Click on a team member to
            expand their branch and learn more about their role.
          </p>
        </div>

        <div
          id="tree-wrapper"
          ref={treeContainerRef}
          className="w-full h-[120vh] rounded-2xl overflow-hidden"
        >
          <Tree
            data={treeData}
            // translate={translate}
            translate={{ x: window.screen.width / 2.55, y: 100 }}
            orientation="vertical"
            renderCustomNodeElement={renderCustomNodeElement}
            pathFunc="diagonal"
            separation={{ siblings: 1, nonSiblings: 1 }}
            nodeSize={{ x: 300, y: 300 }}
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
