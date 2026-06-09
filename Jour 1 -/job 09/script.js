function tri(numbers, order) {
    let n = numbers.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if ((order === "asc" && numbers[i] > numbers[i + 1]) ||
                (order === "desc" && numbers[i] < numbers[i + 1])) {
               
                let temp = numbers[i];
                numbers[i] = numbers[i + 1];
                numbers[i + 1] = temp;
                swapped = true;
            }
        }
        n--;
    } while (swapped);

    return numbers;
}

console.log(tri([5, 2, 9, 1, 5, 6], "asc"));  
console.log(tri([5, 2, 9, 1, 5, 6], "desc"));  
