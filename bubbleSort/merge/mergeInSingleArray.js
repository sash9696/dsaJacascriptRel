
function Merge(A, l, mid, h){

    let m = A.length
  

    let C = []

    let i,j,k;
    i = l; j = mid + 1; k = l 
    

    while (i <= mid  && j <= h){

        if(A[i] < A[j]){

            B[k++] = A[i++]
        }else{
    
            B[k++] = A[j++]
    
        }
    

    }

    for (i=  ; i <= mid ; i++){
        B[k++] = A[i]

    }

    for (j=  ; i <= h; i++){
        B[k++] = A[j]
        
    }

    for (i = l; i <= h; i++){
        A[i] = B[i]
    }
  




}