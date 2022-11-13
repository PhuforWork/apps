import React from "react";
import { Card, Col, List, Row } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
import "./components.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMemory,
  faServer,
  faTemperatureQuarter,
} from "@fortawesome/free-solid-svg-icons";
import CardComp from "./Card/card";

export default function Components() {
  const data = [
    {
      title1: (
        <span className="header-card">
          <FontAwesomeIcon icon={faServer} /> Server
        </span>
      ),
      title2: (
        <span className="header-card">
          <FontAwesomeIcon icon={faMemory} /> Memory
        </span>
      ),
      title3: (
        <span className="header-card">
          <FontAwesomeIcon icon={faTemperatureQuarter} /> Stats
        </span>
      ),
      contentSr: {
        content1: (
          <div className="info-card">
            <span className="info-title">Redis Version:</span>{" "}
            <span className="info-data">3.2.9</span>
          </div>
        ),
        content2: (
          <div className="info-card">
            <span className="info-title">Os:</span>{" "}
            <span className="info-data">Darwin20.6.0x86_64</span>
          </div>
        ),
        content3: (
          <div className="info-card">
            <span className="info-title">Process ID:</span>{" "}
            <span className="info-data">80088</span>
          </div>
        ),
      },
      contentMr: {
        content1: (
          <div className="info-card">
            <span className="info-title">Used Memory:</span>{" "}
            <span className="info-data">1.19M</span>
          </div>
        ),
        content2: (
          <div className="info-card">
            <span className="info-title">Used Memory Peak:</span>{" "}
            <span className="info-data">1.19M</span>
          </div>
        ),
        content3: (
          <div className="info-card">
            <span className="info-title">Used Memory Lua:</span>{" "}
            <span className="info-data">37k</span>
          </div>
        ),
      },
      contentStats: {
        content1: (
          <div className="info-card">
            <span className="info-title">Connected Clients:</span>{" "}
            <span className="info-data">2</span>
          </div>
        ),
        content2: (
          <div className="info-card">
            <span className="info-title">Total Connections:</span>{" "}
            <span className="info-data">4</span>
          </div>
        ),
        content3: (
          <div className="info-card">
            <span className="info-title">Total Commands:</span>{" "}
            <span className="info-data">1844</span>
          </div>
        ),
      },
    },
  ];
  return (
    <div className="modify-container">
      <List
        className="w-100"
        dataSource={data}
        renderItem={(item) => (
          <div className="site-card-wrapper">
            <List.Item>
              <Row
                gutter={15}
                style={{ width: "100%" }}
                className="d-flex justify-content-center"
              >
                <Col span={8}>
                  <CardComp
                    title={item.title1}
                    content={[
                      item.contentSr.content1,
                      item.contentSr.content2,
                      item.contentSr.content3,
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <CardComp
                    title={item.title2}
                    content={[
                      item.contentMr.content1,
                      item.contentMr.content2,
                      item.contentMr.content3,
                    ]}
                  />
                </Col>
                <Col span={8}>
                  <CardComp
                    title={item.title3}
                    content={[
                      item.contentStats.content1,
                      item.contentStats.content2,
                      item.contentStats.content3,
                    ]}
                  />
                </Col>
              </Row>
            </List.Item>
          </div>
        )}
      />
    </div>
  );
}
