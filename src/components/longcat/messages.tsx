import React from 'react';

export interface Props {
    difficultyLevel: number; // up to 4
    creepinessLevel: number; // up to 4?
    correct: boolean;
    goNext: () => void;
}

function DisplayMessage({difficultyLevel, creepinessLevel, correct, goNext} : Props) {
    const incorrectMessageArray = [ // row = difficulty, column = creep; (difficulty, creep)
    [
        "Sweet dreams! Welcome to the inside of your mind, tonight we'll be Learning in Your Dreams - a once in a lifetime chance, I assure you. I'm your host and teacher, Longcat. We'll be starting with a little test to assess which class you should be placed in. Do try your best!",
        "Oh no, you really shouldn't be making mistakes at this stage, you might end up with the bad students!",
        "<i>Sigh<i>, looks like you're on the track for our most intesive programme.",
        "It's okay. It's okay. We can fix you. Make you better. Smarter. It will take a while. Maybe forever. But it's for your own good. Just look at this last image, and try to think about your future with us!"
    ],
    [
        "YOU SHOULD NEVER SEE THIS MESSAGE - diff: 1, creep: 0",
        "Oops! Well that wasn't very difficult yet, but hopefully that was just a small mistake.",
        "Hm... your evaluation just dropped. Might need to place you under a tutor, hm? Better try harder, our tutors can be very... strict!",
        "Tsk. Looks like we'll indeed need to send you for special tutorial classes. Let's see... ah yes, there's a recent opening due to... reasons. See if this picture helps you guess who your tutor will be?"
    ],
    [
        "YOU SHOULD NEVER SEE THIS MESSAGE - diff: 2, creep: 0",
        "Ah! I thought you might be able to go all the way. Unfortunate - but we can enroll you with the general student population!",
        "That's okay - 50% is still a passing grade, after all! Of course, it won't be enough for us to just let you go quite yet, but we've got some fantastic courses lined up for you, with plenty of recent openings!",
        "Yes, yes. Lectures it is for you, with all the other average students. That's okay, I'm sure they all eat you right up! Now, let's have a look at the next image, just in case!"
    ],
    [
        "YOU SHOULD NEVER SEE THIS MESSAGE - diff: 3, creep: 0",
        "Ha... okay. Even the mighty fall. Of course we look for perfection, so we might put you in some special classes - with other 'gifted' students!",
        "Close to graduation, but not quite enough! See if you can pull through - I hear the special classes can get intense, but with some blood and sweat you'll pull through. Or maybe with a lot.",
        "Okay, here's a final chance, but my instinct is you're in for some very difficult special classes. But as I said before! Blood, sweat, and tears. Oh, I didn't mention the tears? But as long as you put in all your blood and tears... and maybe a bit beyond that you'll be out of here in no time! But before that: let's just see how you do with material from the special classes!"
    ]
    ]

    const correctMessageArray = [ // row = difficulty, column = creep; (difficulty, creep)
    [
        "",
        "",
        "",
        ""
    ],
    [
        "Oh! You already know some basics! Fantastic! Let's move on to entry-level questions.",
        "Ok, it looks like you've a talent for the more abstract? I think you'd fit right in if that's the case, but maybe we just have nothing to teach you? We'll see.",
        "Salvageable. Your mind is - I mean. Not necessarily this test, but you deserve a chance!",
        "Truly a weird mind. I'd love to examine you personally if you end up staying, but I guess you can still fix things!"
    ],
    [
        "Ah, you have the entry-level material down as well? How about material from our more intense tutorials?",
        "Ok, ok! You have potential to still graduate. Keep going! We can forgive that one little mistake.",
        "Half the way to graduation... though the road is still long. Have I mentioned our brilliant lectures? Quite challenging, but I've heard they are a life-drain- ahem- I mean a life-changing experience! ",
        "Truly wonderful, the mind of a student is. Can I root around in it? Most of those who didn't receive our education don't manage to get correct answers at this point. I'll give you credits if I can open up your head!"
    ],
    [
        "What a gifted student! Perhaps you can just graduate? Well let's see how you deal with material from the special classes for gifted students before we let you off.",
        "Amazing. Despite your mistake you're doing great! But are you eligible for graduation straight up? I'd love to keep you here and have one of our researchers work with you? So how about another question?",
        "Still hanging in there? Very impressive! What's going on in that head? Maybe another image will help as spill those juices right out?",
        "Fascinating. Truly, fascinating. I so want to pull off all that organic matter that's preventing me from examining your though processes more closely. But, policy is policy - one final question before I take you on as a personal student. But I do look forward to working on- with you!"
    ]
    ]

    let message  = "";
    if (correct) {
        message = correctMessageArray[difficultyLevel][creepinessLevel];
    }
    else {
        message = incorrectMessageArray[difficultyLevel][creepinessLevel];
    }
    return (
        <div className="message">
            Longcat says:
            <p>{message}</p>
            <button onClick={goNext}>Next</button>
        </div>
    )

}


export default DisplayMessage;



