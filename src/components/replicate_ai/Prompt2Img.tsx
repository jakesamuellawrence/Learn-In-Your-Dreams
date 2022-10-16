import React from "react";

export interface Props {
    imageUrl: string;
}

function ImageGen({imageUrl} : Props) {
    return (
        <div>
            {imageUrl == "" ?
                <p>Loading...</p>
                :
                <img className="prompt-image" src={imageUrl}/>
            }
        </div>
    );
}

export default ImageGen;