import React from 'react'
import { colors } from '../config/colors'
import { Image } from 'antd';
import './AboutScreen.css'
import pic from '../assets/myself.jpg'

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
                I'm a new graduate computer engineering student. I'm currently looking for a software engineer or Frontend developer career.
            </div>
        </div>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <Image src={pic} alt="my picture" width='50vh' style={{borderRadius: 20}} className="jump" />
        </div>
    </div>
  )
}
