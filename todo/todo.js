let todo=[];
let input= prompt("please enter the task you want to perform");

while(true){
    if(input=="quit"){
        console.log("quiting from the app");
        break;
    } 
    else if(input=="list"){
        console.log("------------------------------------------------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------------------------------------------");
    }
    else if(input=="add"){
        let task=prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if(input=="remove"){
        let index=prompt("enter the index of the tasl you want to remove");
        todo.splice(index,1);
        console.log("task removed");
    }
    else{
        console.log("wrong request entered");
    }
    input= prompt("please enter the task you want to perform");
}

