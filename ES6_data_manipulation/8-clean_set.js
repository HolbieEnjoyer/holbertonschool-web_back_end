/* eslint-disable */

export default function cleanSet(set, startString) {
    if (startString === "") {
        return "";
    }
    
    let str = "";
    set.forEach((item) => {
        if (item.startsWith(startString)) {
            str += item.replace(startString, "") + "-";
        }
    });
    return str.slice(0, -1);
}