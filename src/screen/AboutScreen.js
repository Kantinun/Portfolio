import React from 'react'
import { colors } from '../config/colors'
import { Image, Collapse } from 'antd';
import './AboutScreen.css'
import pic from '../assets/myself.jpg'
import {
    IdcardOutlined,
    PhoneOutlined,
    MailOutlined,
    EnvironmentOutlined,
    CaretRightOutlined
  } from '@ant-design/icons';
  

const { Panel } = Collapse;

export default function AboutScreen() {
  return (
    <div style={{backgroundColor: colors.primary, display: 'flex', flexDirection: 'row', padding: '2%'}}>
        <div style={{display: 'flex',flexDirection: 'column', justifyContent:'center', width: '50%'}}>
            <div
                style={{fontSize: '5em', display:'flex'}}
            >
                Hi. I'm Kantinun</div>
            <div
                style={{fontSize: '1.5em'}}
            >
                I'm a new graduate computer engineering student from King Mongkut's University of Technology North Bangkok. I'm currently looking for a software engineer or Frontend developer career.
            </div>
            <Collapse ghost style={{marginTop: 5}}
                expandIcon={({ isActive }) => <CaretRightOutlined style={{fontSize: '1.5em', paddingTop: 10}} rotate={isActive ? 90 : 0} />}
            >
                <Panel header={
                    <div className="contactme_jump" style={{color: colors.blue, fontSize: '1.5em',}}>Contact Me
                        <span style={{ marginLeft: 10, fontSize: '1em'}}><IdcardOutlined /></span>
                    </div>
                }
                >
                    <div style={{marginLeft: 5}}>
                        <div style={{fontSize: '1.5em'}}><span style={{margin: 5}}><PhoneOutlined style={{color: colors.blue}} /></span>+66 92-768-4876</div>
                        <div style={{fontSize: '1.5em'}}><span style={{margin: 5}}><MailOutlined style={{color: colors.blue}} /></span>kantinun.sirintharawet@gmail.com</div>
                        <div style={{fontSize: '1.5em'}}><span style={{margin: 5}}><EnvironmentOutlined style={{color: colors.blue}} /></span>132/16 Room402 Rama6 samsennai phayathai bangkok 10400</div>
                    </div>
                </Panel>
            </Collapse>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image src={pic} alt="my picture" width='50vh' style={{borderRadius: 20}} className="pic_jump" />
        </div>
    </div>
  )
}
