import React from 'react'
import { Card } from 'antd'
import { EditOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

const ProjectCard = (props)=>{
    return(
        <Card 
            bordered={false} 
            style={{ width: '25%' }}
            hoverable
            actions={[
                <EditOutlined key="edit"/>,
                <EllipsisOutlined key="ellipsis" />,
            ]}
        >
            <Meta
                title={props.title? props.title: ''}
                description={props.description? props.description: ''}
            />
        </Card>
    )
}
export default function MyProjects() {
  return (
    <>
        <div style={{textAlign: 'center', fontSize: '4em'}}>MY PROJECTS</div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '0.5rem',
        }}>
            <ProjectCard title="My Projects" description="My projects" />
            <ProjectCard title="My Projects" description="My projects" />
            <ProjectCard title="My Projects" description="My projects" />
        </div>
    </>
  )
}