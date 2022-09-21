
function Merge(A,B){

    let m = A.length
    let n = B.length

    let C = []

    let i,j,k;
    i=j=k = 0;

    while (i < m && j < n){

        if(A[i] < B[j]){

            C[k++] = A[i++]
        }else{
    
            C[k++] = B[j++]
    
        }
    

    }

    for (i=  ; i < m ; i++){
        C[k++] = A[j]

    }

    for (j=  ; i < n ; i++){
        C[k++] = B[j]
        
    }
  




}