angular.module("chatApp",[])
.controller("todoCtrl",todoCtrl)

function todoCtrl(){
    var todo = this;
    todo.enableEdit = false;
    todo.mainBtnText = "Add";
    todo.tasks = [];

    function addTask(t){
        if(todo.enableEdit){
            todo.tasks[tempIndex].text = todo.task;
            todo.task = "";
            todo.enableEdit = !todo.enableEdit;
            todo.mainBtnText = "Add";
        }
        else{
            var obj = {};
            obj.text = t;
            obj.status = false;
            obj.time = new Date();
            obj.btntext = "Done";
            if(obj.text){
                todo.tasks.push(obj);
            }
            todo.task = "";
        }
    }

    function removeTask(index){
        todo.tasks.splice(index,1);
    }

    function taskCompleted(index){
        todo.tasks[index].status = !todo.tasks[index].status;
        if(todo.tasks[index].status){
            todo.tasks[index].btntext="Undo";
            todo.tasks[index].time = new Date();
        }
        else{
            todo.tasks[index].btntext="Done";
            todo.tasks[index].time = new Date();
        }
    }

    function moveUp(index){
        if(index != 0){
            temp = todo.tasks[index];
            todo.tasks[index] = todo.tasks[index-1];
            todo.tasks[index-1] = temp;
        }
    }

    function moveDown(index){
        if(index != todo.tasks.length - 1){
            temp = todo.tasks[index];
            todo.tasks[index] = todo.tasks[index+1];
            todo.tasks[index+1] = temp;
        }
    }

    function editTask(index){
        todo.enableEdit = !todo.enableEdit;
        todo.task = todo.tasks[index].text;
        todo.mainBtnText = "Update";
        tempIndex = index;
    }
    
    todo.addTask = addTask;
    todo.removeTask = removeTask;
    todo.taskCompleted = taskCompleted;
    todo.moveUp = moveUp;
    todo.moveDown = moveDown;
    todo.editTask = editTask;
    var tempIndex;
}