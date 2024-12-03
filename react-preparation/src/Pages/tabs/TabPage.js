import React from "react";
import Tabs from "./Tabs";

const tabData = [
  {
    value: "html",
    label: "Html",
    panel:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
  },
  {
    value: "css",
    label: "css",
    panel:
      "ut also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions",
  },
  {
    value: "js",
    label: "Javascript",
    panel:
      "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in t",
  },
];
const TabPage = () => {
  return <Tabs items={tabData} />;
};

export default TabPage;
