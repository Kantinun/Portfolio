import React from "react";
import { colors } from "../config/colors";
import { Image, Collapse } from "antd";
import "./AboutScreen.css";
import pic from "../assets/myself.jpg";
import cvFile from "../assets/CV.pdf"
import resumerFile from "../assets/Resume.pdf"
import {
  MailOutlined,
  CaretRightOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

export default function AboutScreen() {
  const myEmail = 'kantinun.sirintharawet@gmail.com'
  const mailLink = `mailto:${myEmail}?subject=&body=`
  return (
    <div
      className="d-flex flex-column-reverse flex-sm-column-reverse flex-md-row py-5 gap-5 justify-content-center align-items-center"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="d-flex flex-column justify-content-center w-100 w-sm-100 w-md-50">
        <div className="d-inline" style={{ fontSize: "5em" }}>
          <span style={{color: colors.darkWhite}}>Hi. I'm </span>
          <span className="animate-charcter font-monoton ms-5">Kantinun</span>
        </div>
        <div className="sign d-inline" style={{ fontSize: "1.5em" }}>
          I'm <span className="fast-flicker">Programmer</span> at Senior Com Ltd. since May 2023.I graduate with
          computer engineering from King Mongkut's University of Technology
          North Bangkok. I'm currently looking for a <span className="normal-flicker">software engineer</span> or
          <span className="flicker">Frontend developer</span> career :)
        </div>
        <Collapse
          ghost
          style={{ marginTop: 5 }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined
              style={{ fontSize: "1.5em", paddingTop: 10, color: colors.darkWhite }}
              rotate={isActive ? 90 : 0}
            />
          )}
        >
          <Panel
            header={
              <div
                className="contactme_jump"
                style={{ color: colors.lightBlue, fontSize: "1.5em" }}
              >
                Contact Me
              </div>
            }
          >
            <div className="ms-3 text-nowrap">
              <div clas style={{ fontSize: "1.5em", color: colors.lightBlue }}>
                <span>
                  <MailOutlined
                    className="mx-3"
                    style={{ color: colors.darkWhite }}
                  />
                </span>
                <a href={mailLink}>{myEmail}</a>
              </div>
              <div style={{ fontSize: "1.5em", color: colors.lightBlue }}>
                <span>
                  <ContainerOutlined
                    className="mx-3"
                    style={{ color: colors.darkWhite }}
                  />
                </span>
                <a href={cvFile} target="_blank" rel="noreferrer" >My CV</a>
              </div>
              <div style={{ fontSize: "1.5em" }}>
                <span>
                  <ContainerOutlined
                    className="mx-3"
                    style={{ color: colors.darkWhite }}
                  />
                </span>
                <a href={resumerFile} target="_blank" rel="noreferrer">My Resume</a>
              </div>
            </div>
          </Panel>
        </Collapse>
      </div>
      <div className="d-flex justify-content-center align-items-center w-50">
        <Image src={pic} alt="my picture" className="pic_jump rounded-circle" />
      </div>
    </div>
  );
}
