import * as things from "./things";

// This works because we exported the name explicitly
export const thing1 = (param: things.ThingA) => null;

// This fails because ThingB was exported with `export *`
export const thing2 = (param: things.ThingB) => null;
