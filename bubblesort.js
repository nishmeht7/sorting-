function bubbleSort(array) {

    var counter = array.length;

    while(counter > 0) {
        for (var i = 0; i < array.length-1; i++) {
            if (compare(arr[i], arr[i+1])) {
                swap(array, i, i+1);
            }
        }

        counter--;
    }

    return array;
}


function swap(arr, index1, index2) {
    var holder = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = holder;
}


function compare(a,b) {
    return a > b;
}