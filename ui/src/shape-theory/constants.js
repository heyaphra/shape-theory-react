const { Scale, Note: { enharmonic } } = require("@tonaljs/tonal");

export const FUNDAMENTAL = "C";
export const CHROMATIC_METADATA = Scale.get(`${FUNDAMENTAL} chromatic`);
export const CHROMATIC_SCALE = CHROMATIC_METADATA["notes"].map(n => enharmonic(n))
export const ALL_INTERVALS = CHROMATIC_METADATA["intervals"];