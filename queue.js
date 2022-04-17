var Queue = function(){
    queue = [];

    this.isempty = function(){
        return queue.length === 0;
    }
    this.enqueue = function(value){
        queue.push(value);
    }
    this.count = function(){
        return queue.length;
    }
    this.dequeue = function(){
        if(!this.isempty())
            return queue.shift();
        else{
        console.log("queue is empty !")
        return 0
        }
    }
    this.print = function(){
        for(let i in queue){
            console.log("%d\n",queue[i]);
        }
    }
}

let arr = [10,20,25,12];
let q = new Queue();
for(let i in arr){
    q.enqueue(arr[i]);
}
//q.dequeue();
q.print();