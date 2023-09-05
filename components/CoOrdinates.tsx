import React from "react";

// write a generic component that takes in a prop of type {x: number, y: number} and renders the x and y values
interface CoOrdinatesProps {
    x: number;
    y: number;
}

const CoOrdinates = ({ x, y }: CoOrdinatesProps) => {
    return (
        <div>
            <p>x: {x}</p>
            <p>y: {y}</p>
        </div>
    );
};
;
export default CoOrdinates;