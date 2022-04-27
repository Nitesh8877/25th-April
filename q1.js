let input=[];

for(let i=1;i<=100;i++){
    input.push(i);

}

function bubbleSort(num){
    let n=num.length;
    for(let i=0;i<n;i++){
        for(let j=0;j<n-1-i;j++){
            if(num[j]<num[j+1]){
                [num[j],num[j+1]]=[num[j+1],num[j]];
            }
        }
    }
    return num;
}
// let input=[5,4,6,3];
console.log(bubbleSort(input.length));


// Time Complexity ------

// Best Case: O(n);
// Worst Case: O(n^2);
// Average Case: O(n^2);

// Space Complexity-------

// O(1);

