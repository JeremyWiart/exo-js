function bubbleSort(arr) {
let n = arr.length;
let swapped;
let liste = [64, 34, 25, 12, 22, 11, 90];
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
        
            if (arr[i] > arr[i + 1]) {
         
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
        n--;  
    } while (swapped);

    return arr;
}



console.log(bubbleSort(liste));