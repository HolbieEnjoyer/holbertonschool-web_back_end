/* eslint-disable */

export default function updateUniqueItems(map) {
    if (!(map instanceof Map) || map === null) {
        throw new Error('Cannot process');
    }

    for (const [key, value] of map) {
        if (value === 1) {
            map.set(key, 100);
        }
    }
}