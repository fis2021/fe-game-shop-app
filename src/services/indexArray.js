export function indexArray(arr) {
    if (!arr) return {};
return arr.reduce((p, o) => ({ ...p, [o.id]: o }), {});
}

export function addElementToIndexedArray(arr, obj) {
    Object.assign(arr, { [obj.id]: obj });
}

export function addArrayToIndexArray(indexedArr, arr) {
    arr.forEach(function (item) {
        indexedArr[item.id] = item;
    });
}
