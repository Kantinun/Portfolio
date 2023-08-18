import React from "react";
import { Card, Tooltip, Modal, Tag } from "antd";
import {
  EllipsisOutlined,
  GithubOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { projects } from "../assets/projects_data";
import { colors } from "../config/colors";
import "./MyProjects.css";

const { Meta } = Card;

export default function MyProjects() {
  const modal_config = {
    icon: <FileTextOutlined />,
    width: "50%",
    okText: "Close",
    maskClosable: true,
  };
  const ProjectCard = (props) => {
    return (
      <Card
        className="w-100 w-sm-100 w-md-100 h-lg-75"
        bordered={false}
        bodyStyle={{ height: "80%" }}
        hoverable
        actions={
          props.project.github_link
            ? [
                <Tooltip title="Click to see more details">
                  <div
                    onClick={() => {
                      Modal.info({
                        title: (
                          <div style={{ fontSize: "1.5em" }}>
                            {props.project.title ? props.project.title : ""}
                            <span
                              className="d-flex justify-content-between"
                              style={{
                                color: colors.grey,
                                fontSize: "1em",
                              }}
                            >
                              ( {props.project.date} )
                            </span>
                          </div>
                        ),
                        content: (
                          <div style={{ marginTop: 5 }}>
                            <div
                              className="d-flex flex-row"
                              style={{
                                fontSize: "1.5em",
                                color: "#555",
                              }}
                            >
                              <span
                                style={{ fontSize: "1em", color: colors.grey }}
                              >
                                Description:{" "}
                              </span>
                              <div style={{ marginLeft: 10 }}>
                                {props.project.job_details}
                              </div>
                            </div>
                            <div style={{ fontSize: "1.5em" }}>
                              <span
                                style={{ fontSize: "1em", color: colors.grey }}
                              >
                                Role:{" "}
                              </span>
                              {props.project.roles.map((role) => (
                                <Tag
                                  style={{ fontSize: "0.8em", marginLeft: 10 }}
                                  color={role.color}
                                >
                                  {role.title}
                                </Tag>
                              ))}
                            </div>
                          </div>
                        ),
                        ...modal_config,
                      });
                    }}
                  >
                    <EllipsisOutlined
                      key="ellipsis"
                      style={{ fontSize: "1.5em" }}
                    />
                  </div>
                </Tooltip>,
                <Tooltip title="Click to see Github repository">
                  <a
                    href={props.project.github_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubOutlined style={{ fontSize: "1.5em" }} />
                  </a>
                </Tooltip>,
              ]
            : [
                <Tooltip title="Click to see more details">
                  <div
                    onClick={() =>
                      Modal.info({
                        title: (
                          <div style={{ fontSize: "1.5em" }}>
                            {props.project.title ? props.project.title : ""}
                            <span
                              style={{
                                color: colors.grey,
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "1em",
                              }}
                            >
                              ( {props.project.date} )
                            </span>
                          </div>
                        ),
                        content: (
                          <div style={{ marginTop: 5 }}>
                            <div
                              style={{
                                fontSize: "1.5em",
                                color: "#555",
                                display: "flex",
                                flexDirection: "row",
                              }}
                            >
                              <span
                                style={{ fontSize: "1em", color: colors.grey }}
                              >
                                Description:{" "}
                              </span>
                              <div style={{ marginLeft: 10 }}>
                                {props.project.job_details}
                              </div>
                            </div>
                            <div style={{ fontSize: "1.5em" }}>
                              <span
                                style={{ fontSize: "1em", color: colors.grey }}
                              >
                                Role:{" "}
                              </span>
                              {props.project.roles.map((role) => (
                                <Tag
                                  color={role.color}
                                  style={{ fontSize: ".8em", marginLeft: 10 }}
                                >
                                  {role.title}
                                </Tag>
                              ))}
                            </div>
                          </div>
                        ),
                        ...modal_config,
                      })
                    }
                  >
                    <EllipsisOutlined
                      key="ellipsis"
                      style={{ fontSize: "1.5em" }}
                    />
                  </div>
                </Tooltip>,
              ]
        }
      >
        <Meta
          title={
            <span style={{ fontSize: "1em" }}>
              {props.project.title ? props.project.title : ""}
              <span
                style={{
                  color: colors.grey,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                ( {props.project.date} )
              </span>
            </span>
          }
          description={
            props.project.description ? props.project.description : ""
          }
        />
      </Card>
    );
  };

  return (
    <>
      <div className="text-center pb-3" style={{ fontSize: "4em" }}>
        MY PROJECTS & EXPERIENCES
      </div>
      <div
        className="d-flex flex-wrap gap-5 py-3 align-items-start justify-content-center"
        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   justifyContent: "space-evenly",
        //   flexDirection: "row",
        //   alignItems: "center",
        //   padding: "0.5rem",
        // }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="col-12 col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center"
            // style={{
            //   width: "30%",
            //   margin: "1%",
            //   display: "flex",
            //   justifyContent: "center",
            // }}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </>
  );
}
