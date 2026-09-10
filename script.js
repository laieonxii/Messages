import { $, Contents, Tag, msgBox, mainBox, frontBlur, ribbon, paperContainer, stepsFunc, start } from './mod.js';

//msgBox.addEventListener("touchstart", start);
const pref = "Happy Birthday,";
const name = "Charlnick";
const punc = "!"
const content = new Contents(pref, name, punc);
//---
const tag = new Tag(frontBlur, 0);
tag.getTag(content.content, content.name, content.punc);

let step = 0;
const steps = [
    stepsFunc.zoom,
    stepsFunc.untie,
    stepsFunc.reveal,
    stepsFunc.zoomPaper
]

/*msgBox.addEventListener("touchstart", () => {
    if (step < steps.length) {
        steps[step]();
        step++;
        console.log(step);
    } else {
        console.log("You've reached the final step.");
    }
});*/

const proceedings = async () => {
    if (step < steps.length) {
        await steps[step]();
    } else {
        throw new Error("You've reached the final step.");
    }
};

let busy = false;

async function on() {
    if (busy) {
        console.log(`Step ${step} is still running. Wait until it's finished.`);
        return;
    }
    
    busy = true;
    
    try {
        await proceedings();
        console.log(`Step executed: ${step}`);
        step++;
        console.log(`Next step: ${step}`);
    } catch (e) {
        console.log(e);
    } finally {
        busy = false;
    }
};

msgBox.addEventListener("touchstart", on);