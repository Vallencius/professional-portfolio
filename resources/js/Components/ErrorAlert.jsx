import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ErrorAlert(props) {
    return (
        <>
            <div className={"w-96 h-24 bg-coffee-50 border-2 border-coffee-700 rounded-lg " + props.className}>
                <div className="flex justify-center items-center w-full h-full">
                    <i className="fa fa-exclamation-triangle text-3xl mr-4 text-red-600"></i>
                    <p className="text-lg">Error: {props.error}</p>
                </div>
            </div>
        </>
    );
}