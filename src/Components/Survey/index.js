<<<<<<< HEAD
import React, {useState} from 'react';

const Button = ({c}) => {
    const [choice, makeChoice] = useState(false)

    const handleChoice = () => {
        makeChoice(!choice)
    }
    return(
        <div onClick={handleChoice}  className={"survey-item " + (choice ? "success" : "")}>
            <p className="survey-item-name">{c}</p>
        </div>
    );
}


const Survey = () => {
    const reasons = [
            "To find a mentor", "To make friends","To learn new things"
       ] 
    return(
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
                <Button c={c}/>
                </>
            ))}
            </div>
            <div className="survey-button">
                <button>
                Submit
                </button>
            </div>
        </div>
    )
=======
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
>>>>>>> 09963b5e228d0b98647efebfff28454a26f6a212
}

export default Survey;