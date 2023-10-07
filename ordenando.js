// Função para trocar os valores de duas posições em um vetor
const swap = (array, position1, position2) => {
    const temp = array[position1];
    array[position1] = array[position2];
    array[position2] = temp;
};

// Função para embaralhar os elementos de um vetor
const shuffle = (array, numberOfSwaps) => {
    for (let i = 0; i < numberOfSwaps; i++) {
        const randomIndex1 = Math.floor(Math.random() * array.length);
        const randomIndex2 = Math.floor(Math.random() * array.length);
        swap(array, randomIndex1, randomIndex2);
    }
};

// Função para ordenar um vetor com o algoritmo Bubble Sort
const bubble_sort = (array) => {
    const n = array.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                swapped = true;
            }
        }
    } while (swapped);
};

// Função para encontrar o índice do menor elemento em um vetor
const findIndexOfMinimum = (array, startIndex) => {
    let minIndex = startIndex;
    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }
    return minIndex;
};

// Função para ordenar um vetor com o algoritmo Selection Sort
const selection_sort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        const minIndex = findIndexOfMinimum(array, i);
        if (minIndex !== i) {
            swap(array, i, minIndex);
        }
    }
};

// Função para ordenar um vetor com o algoritmo Quick Sort
const quick_sort = (array, startIndex, endIndex) => {
    if (startIndex < endIndex) {
        const pivotIndex = partition(array, startIndex, endIndex);
        quick_sort(array, startIndex, pivotIndex - 1);
        quick_sort(array, pivotIndex + 1, endIndex);
    }
};

// Função de apoio ao Quick Sort para fazer o particionamento
const partition = (array, startIndex, endIndex) => {
    const pivotValue = array[endIndex];
    let pivotIndex = startIndex;

    for (let i = startIndex; i < endIndex; i++) {
        if (array[i] < pivotValue) {
            swap(array, i, pivotIndex);
            pivotIndex++;
        }
    }

    swap(array, pivotIndex, endIndex);
    return pivotIndex;
};