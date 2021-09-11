function BubbleSort (array){
    var length = array.length;
    var i,j;
    for (i=0; i<length-1; i++){ //i = 0 
        for ( j=0; j<length-i-1; j++){ // j = 0,1,2
            if(array[j] > array[j+1]){
                var temp = array[j];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }
    for (i=0; i<length; i++){
        console.log(array[i]);
    }
}




var array = [64, 34, 25, 12, 22, 11, 90];
BubbleSort(array);
