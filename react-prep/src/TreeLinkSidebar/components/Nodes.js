import React, { useState } from "react";
import "../style.css";
import { FaAngleDown, FaAngleRight, FaCircle } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Icon = ({ isOpen, isParentNode, onClick }) => {
  if (isParentNode) {
    return (
      <span onClick={onClick}>
        {isOpen ? <FaAngleDown /> : <FaAngleRight />}
      </span>
    );
  } else {
    return (
      <span>
        <FaCircle size={7} />
      </span>
    );
  }
};

const Node = ({ link, label, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isParentNode = Boolean(children && children.length);

  return (
    <li>
      <div className="node">
        <span>
          <Icon
            isOpen={isOpen}
            isParentNode={isParentNode}
            onClick={() => setIsOpen(!isOpen)}
          />
        </span>
        <a href={link}>{label}</a>
      </div>
      <AnimatePresence>
        {isParentNode && isOpen ? (
          <motion.div
            variants={{
              collapsed: {
                height: 0,
                opacity: 0,
              },
              open: {
                height: "auto",
                opacity: 1,
              },
            }}
            initial="collapsed"
            animate="open"
            exit="collapsed"
          >
            <Nodes nodes={children} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </li>
  );
};

const Nodes = ({ nodes }) => {
  return (
    <ul>
      {nodes.map((node) => {
        return <Node key={node.key} {...node} />;
      })}
    </ul>
  );
};

export default Nodes;
