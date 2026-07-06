import React from "react";

type KeyInfo = {
  title: string;
  value: string;
};

export type KeyInfoArray = KeyInfo[];
type Props = {
  keyInfos: KeyInfoArray;
};

const Table = ({keyInfos}: Props) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Heading */}
      <div className="px-7 py-5 border-b border-gray-200">
        <h2 className="text-xl font-bold text-gray-900">Key Information</h2>
      </div>

      {/* Table */}
      <table className="w-full">
        <tbody>
          {keyInfos.map((item, index) => (
            <tr
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <td className="w-[32%] p-5 font-semibold text-gray-900">
                {item.title}
              </td>

              <td className="p-5 text-gray-700 leading-8">
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
