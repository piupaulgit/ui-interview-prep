import React, { useState } from "react";

const FileExplorar = ({ data }) => {
  const [expandedDirectories, setExpandedDirectories] = useState(new Set());

  const handleToggle = (id) => {
    let newExpandedDir = new Set(expandedDirectories);

    if (newExpandedDir.has(id)) {
      newExpandedDir.delete(id);
    } else {
      newExpandedDir.add(id);
    }

    setExpandedDirectories(newExpandedDir);
  };
  return (
    <>
      <ul>
        {data.length > 0 &&
          data.map((list) => {
            let isExpanded = expandedDirectories.has(list.id);
            return (
              <li key={list.id}>
                {list.children ? (
                  <button onClick={() => handleToggle(list.id)}>
                    {list.name}
                    {isExpanded ? <span>[-]</span> : <span>[+]</span>}
                  </button>
                ) : (
                  <span>{list.name}</span>
                )}
                {list.children && isExpanded && (
                  <FileExplorar data={list.children} />
                )}
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FileExplorar;
