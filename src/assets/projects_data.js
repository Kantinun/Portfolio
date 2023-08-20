// template data
// {
//     title: Project Name,
//     date: Project date
//     description: Project description
// }
//  tag_color = ['magenta', 'volcano', 'orange', 'gold', 'lime', 'cyan', 'purple', 'geekblue']
import {badgeColor} from '../config/colors'

export const projects = [
    {
        title: 'Programmer',
        type: 1,
        date:"May 2023 - Present",
        description: 'First job as a programmer at Senior com Ltd.',
        roles: [{title:'Frontend Developer', color: badgeColor.FRONTEND_DEVELOPER},{ title:'Backend Developer',color:badgeColor.BACKEND_DEVELOPER}],
        job_details: 'Full-time job as programmer. Worked as part of a small team of developers.We developed on a Dealer Management system call New Dealer Vision built Frontend with Vue.js and Backend with .NET framework. My main role was a full-stack developer. I implement features in both frontend and backend. The new system more modern as the legacy system. <3 '
    },
    {
        title: 'RTPLMS',
        type: 2,
        date:"Jul 2022 - Apr 2023",
        description: 'Mobile application for production line monitoring & management in factory',
        roles: [{title:'Frontend Developer', color: badgeColor.FRONTEND_DEVELOPER}],
        github_link: 'https://github.com/Kantinun/FE_RTPLMS',
        job_details: 'RTPLMS (Real-time Tracking and Production Line Management System) is my senior project that will create a mobile application for real-time monitoring and management production line with React Native & NestJS frameworks'
    },
    {
        title: 'IT Supports',
        type: 3,
        date:"Oct 2022 - Apr 2023",
        roles:[{title:'Support', color: badgeColor.SUPPORT}],
        description: "Part time job at Computer center, Faculty of Engineering of King mongkut's university of technology north bangkok",
        job_details: "A part-time job at computer center, Faculty of Engineering of King Mongkut's University of Technology North Bangkok as IT support that will be consulting and problem-solving for technical problem",

    },
    {
        title: 'Teacher assistant',
        type: 3,
        date:"Jul 2022 - Oct 2022",
        roles:[{title:'TA', color:badgeColor.TA}],
        description: "TA in Programming fundamental course at King mongkut's university of technology north bangkok",
        job_details: "Teacher assistant job in Programming fundamental course at King Mongkut's University of Technology North Bangkok that will support teacher in class and prepare lab material before class",
    },
    {
        title: 'Young Software Developer Project',
        type: 2,
        date:"2021",
        description: 'Web-application for monitoring & plan management in production line',
        roles:[{title:'Frontend Developer', color:badgeColor.FRONTEND_DEVELOPER},{ title:'Backend Developer',color:badgeColor.BACKEND_DEVELOPER}],
        github_link: 'https://github.com/Pakpoom-Phoonpunt/CPF-PROJECT',
        job_details: 'The project collab CPF Co., Ltd.(Thailand) to create a web application for Production and workforce management in the factory with the Ruby on rails framework ',
    },
    {
        title: 'Oscilloscopes controller',
        type: 2,
        date: 'Nov 2020' ,
        description: 'Application for control rigol oscilloscope',
        roles:[{title:'Frontend Developer', color:badgeColor.FRONTEND_DEVELOPER},{ title:'Backend Developer',color:badgeColor.BACKEND_DEVELOPER}],
        github_link: 'https://github.com/Kantinun/Signal',
        job_details: 'Mini project in signal course to create an application for control Rigol oscilloscopes with PyQt5 library',
    },
]

const projectType = [
    {
        id: 1,
        desc: "Full-time",
        color: "#47CACC"
    },
    {
        id: 2,
        desc: "Project",
        color: "#CDB3D4"
    },
    {
        id: 3,
        desc: "Part-time",
        color: "#FFBE88"
    },
]
export const projectTypeHelper = (projectTyeId)=>{
    return projectType.find((row)=>row.id === projectTyeId)
}