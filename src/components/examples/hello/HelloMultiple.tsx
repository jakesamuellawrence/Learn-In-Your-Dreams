import { ReactNode } from "react";

export interface Person {
    id: number;
    name: string;
}

export interface Props {
    people: Person[];
}

function HelloMultiple({people} : Props) {
    // JSX can be stored in any variable, not just directly returned
    // Means we can map data to display in a nice way
    let personList = people.map((person) => (
        // when doing a list you should give each item a key. Because of reasons
        // can just use list index but not recommended if list order changes
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