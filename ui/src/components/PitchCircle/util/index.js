import { Scale } from "@tonaljs/tonal";
import { Point } from "../constants";

export const range = (count) => {
    return Array.from(Array(count).keys());
};

export const degreesToRadians = (angleInDegrees) => {
    return (Math.PI * angleInDegrees) / 180;
};

export const distributePolar = (config) => {
    const { ctx, cx, cy, r, N_NOTES, colorModel } = config;
    const chromatic_scale = Scale.get("C chromatic").notes;
    const points = [];
    const angle = 360 / N_NOTES;
    const vertices = range(N_NOTES);
    vertices.forEach((vertex, index) => {
        const theta = degreesToRadians(-90 + angle * index);
        const point = new Point(
            cx + r * Math.cos(theta),
            cy + r * Math.sin(theta),
            6,
            theta,
            ctx,
            chromatic_scale[index],
            colorModel
        );
        points.push(point);
    });
    return points;
};

