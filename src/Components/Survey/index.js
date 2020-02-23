import React, { useState } from 'react';
import UserNavigation from '../UserNavigation';
import { Link } from 'react-router-dom';

const Button = ({ c }) => {
    const [choice, makeChoice] = useState(false)

    const handleChoice = () => {
        makeChoice(!choice)
    }
    return (
        <div onClick={handleChoice} className={"survey-item " + (choice ? "success" : "")}>
            <p className="survey-item-name">{c}</p>
        </div>
    );
}


const Survey = () => {
    const reasons = [
        "To find a mentor", "To make friends", "To learn new things"
    ]
    return (
        <>
            <UserNavigation />
            <div>
                <p className="survey-question-one">
                    Tell us a little bit about yourself?
            </p>
                <p className="survey-question-two">
                    Why do you want to join Mauve?
            </p>
                <div className="survey-items">
                    {reasons.map(c => (
                        <>
                            <Button c={c} />
                        </>
                    ))}
                </div>
                <div className="survey-button">
                    <Link to="/dashboard">
                        <button>
                            Submit
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Survey;