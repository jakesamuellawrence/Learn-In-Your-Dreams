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
                <img src={imageUrl}/>
            }
        </div>
    );
}

export default ImageGen;