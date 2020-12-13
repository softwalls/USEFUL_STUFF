//const randomArray = [5,10,2,1,4,7,9,3];

export default function bubbleSort(arr) {
    let stepCounter = arr.length - 1;
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < stepCounter; i += 1) {
            if (arr[i] > arr[i + 1]) {
                let max = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = max;
                swapped = true;
            }
        }
        stepCounter -= 1;
    } while (swapped === true);
    return arr;
}
