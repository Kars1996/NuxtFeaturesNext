/*
Copyright © 2024 Kars (github.com/kars1996)

Not to be shared, replicated or used without prior consent.
Contact Kars for any enquieries
*/

import { IconType } from "react-icons";
import {
    FaBeer,
    FaCoffee,
    FaApple,
    FaAndroid,
    FaReact,
    FaVuejs,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";
import clsx from "clsx";

interface Feature {
    icon: IconType;
    title: string;
    description: string;
}

const features: Feature[] = [
    { icon: FaBeer, title: "Feature 1", description: "Description 1" },
    { icon: FaCoffee, title: "Feature 2", description: "Description 2" },
    { icon: FaApple, title: "Feature 3", description: "Description 3" },
    { icon: FaAndroid, title: "Feature 4", description: "Description 4" },
    { icon: FaReact, title: "Feature 5", description: "Description 5" },
    { icon: FaVuejs, title: "Feature 6", description: "Description 6" },
    { icon: FaNodeJs, title: "Feature 7", description: "Description 7" },
    { icon: FaPython, title: "Feature 8", description: "Description 8" },
];

export default function () {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
                <div
                    key={index}
                    className={clsx(
                        "p-4 border border-transparent rounded-lg",
                        "hover:outline hover:outline-2 hover:outline-blue-500",
                        "relative group"
                    )}
                >
                    <feature.icon className="text-4xl mb-4" />
                    <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                    </h3>
                    <p>{feature.description}</p>
                    <div
                        className={clsx(
                            "absolute inset-0 z-[-1]",
                            "group-hover:border-2 group-hover:border-dotted group-hover:border-blue-300"
                        )}
                    />
                </div>
            ))}
        </div>
    );
}
