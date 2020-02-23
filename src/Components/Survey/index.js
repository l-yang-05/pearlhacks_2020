import React from 'react';
import UserNavigation from '../UserNavigation';

const Survey = () => {
    return (
        <>
            <UserNavigation />
            <div className="survey">
                <p className="survey-question-one">
                    Tell us a litte more about yourself...
        </p>

                <p className="survey-question-two">
                    Why did you sign up for Mauve?
        </p>

                <div className="survey-item">
                    To find a mentor
            </div>

                <div className="survey-item">
                    To make friends
            </div>

                <div className="survey-item">
                    To learn new things
            </div>

                <div className="survey-button">
                    <button >
                        Submit
            </button>
                </div>
            </div>
        </>
    );
}

export default Survey;