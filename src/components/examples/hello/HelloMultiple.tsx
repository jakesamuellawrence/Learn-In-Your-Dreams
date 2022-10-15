import { ReactNode } from "react";

export interface Person {
    id: number;
    name: string;
}

export interface Props {
    people: Person[];
}

function HelloMultiple({people} : Props) {
    let personList = people.map((person) => (
        <li key={person.id}>{person.name}</li>
    ));

    return (
        <div>
            Hello to:
            <ul>
                {personList}
            </ul>
        </div>
    )
}

export default HelloMultiple;