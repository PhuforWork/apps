import React from "react";
import { Card } from "antd";
import "../components.scss";

export default function CardComp({title , content}) {
  return (
    <>
      <Card title={title} bordered={true}>
        {content[0]}
        {content[1]}
        {content[2]}
      </Card>
    </>
  );
}
