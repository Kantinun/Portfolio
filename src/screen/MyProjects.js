import React from 'react'
import { Card, Tooltip } from 'antd'
import { EllipsisOutlined, GithubOutlined } from '@ant-design/icons';
import { projects } from '../assets/projects_data';
import { colors } from '../config/colors';

const { Meta } = Card;

const ProjectCard = (props)=>{
    return(
        <Card 
            bordered={false} 
            style={{ width: '80%' }}
            hoverable
            actions={props.github ? [
                <Tooltip title="Click to see more details"><EllipsisOutlined key="ellipsis" style={{ fontSize: '1.5em' }}/></Tooltip>,
                <Tooltip title="Click to see Github repository"><a href={props.github} target="_blank" rel="noopener noreferrer"><GithubOutlined style={{ fontSize: '1.5em' }} /></a></Tooltip>
            ] : [<Tooltip title="Click to see more details"><EllipsisOutlined key="ellipsis" style={{ fontSize: '1.5em' }}/></Tooltip>]}
            >
            <Meta
                title={<span style={{ fontSize: '1em' }}>{props.title ? props.title : ''} 
                    <span style={{color:colors.grey, display:'flex', justifyContent: 'space-between'}}>( {props.date} )</span>
                </span>}
                description={props.description? props.description: ''}
            />
        </Card>
    )
}
export default function MyProjects() {
  return (
    <>
        <div style={{textAlign: 'center', fontSize: '4em'}}>MY PROJECTS & EXPERIENCES</div>
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0.5rem',
        }}>
            {projects.map((project, index)=>(
                <div key={index} style={{ width: '30%', margin: '1%', display: 'flex', justifyContent: 'center' }}>
                    <ProjectCard title={project.title} description={project.description} date={project.date} github={project.github_link} />
                </div>
            ))
            }
        </div>
    </>
  )
}