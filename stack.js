var Stack = function(){
    this.count = 0
    this.storage = {}

    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        var val = this.storage[this.count];
        delete this.storage[this.count];
        return val;
    }
    this.size = function(){
        return this.count;
    }
    this.top = function(){
        if(this.count === 0){
            return undefined
        }
        return this.storage[this.count -1]
    }
}

var s = new Stack();
s.push(10);
s.push(20);
s.push(15);
while(s.size() != 0){
    console.log(s.size());
    s.pop();
}