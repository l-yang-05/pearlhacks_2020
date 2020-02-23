import React from 'react';
import '../../assets/css/styles.css';
import UserNavigation from '../UserNavigation';
import ProjectCards from './ProjectCards';

const Dashboard = () => {
    return (
        <>
            <UserNavigation />
            <div className="project-container">
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
                <ProjectCards title={"Full-Stack MERN Web Hub App"} description={"Let's get together and make something fun that everyone can use!"} />
            </div>

        </>
    )
}

export default Dashboard;