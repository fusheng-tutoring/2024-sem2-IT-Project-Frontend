import { useState, useEffect } from "react";

interface Node {
  id: string;
  label: string;
  dependencies?: string[];
}

export default function Subject() {
  const data = {
    "nodes": [
      { "id": "COMP30026", "label": "COMP30026" },
      { "id": "COMP30024", "label": "COMP30024" },
      { "id": "COMP30027", "label": "COMP30027" },
      { "id": "SWEN30006", "label": "SWEN30006" },
      { "id": "COMP30023", "label": "COMP30023" },
      { "id": "COMP20003", "label": "COMP20003", "dependencies": ["COMP30026", "COMP30024", "COMP30027", "SWEN30006", "COMP30023"] },
      { "id": "COMP10002", "label": "COMP10002" },
      { "id": "COMP20005", "label": "COMP20005" },
      { "id": "Required", "label": "One of", "dependencies": ["COMP10002", "COMP20005"] }
    ],
    "rules": "A minimum of 25 credit points university level mathematics. This rule is exclusive of MAST10012."
  }


  const renderDependencies = (node: Node) => {
    if (!node.dependencies) return null;

    return (
      <ul className="pt-5 relative transition-all duration-500 ease-in-out">
        {node.dependencies.map((dep) => {
          const depNode = data.nodes.find((n) => n.id === dep);
          return (
            <li
              key={depNode?.id}
              className="float-left text-center list-none relative py-5 px-1 transition-all duration-500 ease-in-out"
            >
              <div className="relative">
                <span className="absolute top-0 right-1/2 border-t border-gray-300 w-1/2 h-5"></span>
                <span className="absolute top-0 left-1/2 border-t border-l border-gray-300 w-1/2 h-5"></span>
              </div>
              {depNode && renderNodes(depNode)}
            </li>
          );
        })}
      </ul>
    );
  };

  const renderNodes = (node: Node) => {
    return (
      <li
        key={node.id}
        className="float-left text-center list-none relative py-5 px-1 transition-all duration-500 ease-in-out"
      >
        <a
          href="#"
          className="border border-gray-300 py-1 px-2 text-gray-600 text-xs inline-block rounded-md transition-all duration-500 ease-in-out hover:bg-blue-100 hover:text-black hover:border-gray-400"
        >
          {node.label}
        </a>
        {node.dependencies && node.dependencies.length > 0 && (
          <div className="pt-5 relative">
            <span className="absolute top-0 left-1/2 border-l border-gray-300 h-5 w-0"></span>
            {renderDependencies(node)}
          </div>
        )}
      </li>
    );
  };

  return (
    <section className="relative">
      <div className="max-w-7xl mt-12 mx-auto">
        <div className="container mx-auto p-8">
          <h1 className="text-3xl font-bold mb-8">Course Dependencies</h1>

          <div className="flex flex-col items-start space-y-8">
            <div className="tree">
              <ul>
                {data.nodes
                  .filter((node) => !node.dependencies)
                  .map((node) => renderNodes(node))}
              </ul>
            </div>

            <div className="mt-8 text-blue-800">
              <p>{data.rules}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
