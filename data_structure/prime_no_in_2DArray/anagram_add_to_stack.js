class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
class AnagramStack{
    constructor(){
        this.head = null;
    }
    addLast(val){
        let node = new Node(val);
        if(this.head === null){
            this.head = node
        }
        else{
            let temp = this.head;
            while(temp.next !== null){
                temp = temp.next;
            }
            temp.next = node;
        }
        return node;
    }
}
function find_out_prime() {
    function check_fun(val) {
        for (let i = 2; i < val / 2; i++) {
            if (val % i === 0) {
                return false;
            }
        }
        return true;
    }
    function anagram(var1, var2) {
        let count = 0
        let exm1 = var1.toString().split('').sort();
        let exm2 = var2.toString().split('').sort();
        if (exm1.length = exm2.length) {
            for (let i = 0; i < exm1.length; i++) {
                if (exm1[i] === exm2[i]) {
                    count++;
                }
            }
        }
        if (count === exm1.length) {
            return true;
        }
    }
    let a = [], b = [];
    for (let i = 0; i < 10; i++) {
        let col = [];
        for (let j = 100 * i; j < 100 * (i + 1); j++) {
            if (j % 2 !== 0 && check_fun(j)) {
                col.push(j);
            }
        }
        a.push(col);
    }
    for (let x = 0; x < 10; x++) {
        let arr = a[x], c = [];
        for (let y = 0; y < arr.length - 1; y++) {
            for (let z = y + 1; z < arr.length; z++) {
                if (anagram(arr[y], arr[z]) === true) {
                    c.push(arr[y]);
                    c.push(arr[z]);
                };
            }
        }
        b.push(c);
    }
    console.log(a);
    console.log(b);
    let stackArray = [];
    let as = new AnagramStack();
    for(let g=0; g<10; g++){
        let every = b[g];
       for(let h=0;h<every.length;h++){
           stackArray.push(as.addLast(every[h]));
       }
    }
    console.log(stackArray);
}
find_out_prime();
