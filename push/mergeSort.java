public void merge(int[] array, int left, int mid, int right) {
    // calculating lengths
    /* I would suggest to add a purpose statement under this function to clarify its purpose. */
    int lengthLeft = mid - left + 1;
    int lengthRight = right - mid;

    // creating temporary subarrays
    int leftArray[] = new int [lengthLeft];
    int rightArray[] = new int [lengthRight];

    // copying our sorted subarrays into temporaries
    for(int i = 0; i < lengthLeft; i++) {
        leftArray[i] = array[left+i]; }
    for (int i = 0; i < lengthRight; i++) {
        rightArray[i] = array[mid+i+1]; }

    // iterators containing current index of temp subarrays
    /* I might suggest to use smaller variable names to make the code easier to read. */
    int leftIndex = 0;
    int rightIndex = 0;

    // copying from leftArray and rightArray back into array
    for (int i = left; i < right + 1; i++) {
        // if there are still uncopied elements in R and L, copy minimum of the two
        if (leftIndex < lengthLeft && rightIndex < lengthRight) {
            if (leftArray[leftIndex] < rightArray[rightIndex]) {
                array[i] = leftArray[leftIndex];
                leftIndex++;
            }
            else {
                /* I am having trouble understanding what this else statement does. */
                array[i] = rightArray[rightIndex];
                rightIndex++;
            }
        }
        // if all the elements have been copied from rightArray, copy the rest of leftArray
        else if (leftIndex < lengthLeft) {
            array[i] = leftArray[leftIndex];
            leftIndex++;
        }
        // if all the elements have been copied from leftArray, copy the rest of rightArray
        else if (rightIndex < lengthRight) {
            array[i] = rightArray[rightIndex];
            rightIndex++;
        }
    }
}}
