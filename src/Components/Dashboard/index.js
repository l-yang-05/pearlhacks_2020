import React from 'react';
import '../../assets/css/styles.css';
import UserNavigation from '../UserNavigation';
import ProjectCards from './ProjectCards';

const Dashboard = () => {
    return (
        <>
            <UserNavigation />
            <div>
                <div className="project-container">
                    <ProjectCards title={"Full-Stack MERN Web Hub App"} tech={"Full-Stack"} description={"Let's get together and make something fun that everyone can use!"} />
                    <ProjectCards title={"C# Game to help educate about recyling!"} tech={"C#"} description={"Join me and create a fun experience for the both of us! :)"} />
                    <ProjectCards title={"MEAN Stack eCommerce App"} tech={"Full-Stack"} description={"I have an exciting idea that we can help build together!"} />
                    <ProjectCards title={"MongoDB practice"} tech={"MongoDB"} description={"I need some help with learning MongoDB, let's get some practice into this so that we're both proficient at it!"} />
                    <ProjectCards title={"React Native Music App"} tech={"React Native"} description={"I'm trying to make the next spotify, but allowing users have more of a platform! If you're interested, please contact me."} />
                    <ProjectCards title={"Go Lang APIs"} tech={"Go Lang"} description={"I'm in the process of learning how to write APIs in Go Lang. If you need help writing APIs, we can learn from each."} />
                    <ProjectCards title={"Node.js Bot Making"} tech={"Node.js"} description={"Have you ever wanted to build a bot? It could be dealing with anything! We can take this time to learn more about developing bots of our own!"} />
                    <ProjectCards title={"Python Pizza API"} tech={"Python"} description={"Who's hungry? I am. I want pizza, so let's make a Python app dealing with ordering pizza!"} />
                    <ProjectCards title={"Learning how to use React Hooks"} tech={"React"} description={"If you are struggling at learning React Hooks, please contact me if you're interested!"} />
                </div>
            </div>
        </>
    )
}

export default Dashboard;