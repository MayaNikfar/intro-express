//data/todo-db
const todos =[
    {todo: 'Feed dogs', done: true},
    {todo:'Learn Express', done: false},
    {todo: 'Buy Milk', dane: false}
]
module.exports={
    getAll:function(){
        return todos;
    }
};
