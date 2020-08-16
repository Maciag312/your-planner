
import { Server } from "miragejs";

new Server({
    routes() {
      this.namespace = "api";
  
      this.get("/signin", () => {
        return "token";
      });
      this.get("/signup", () => {
          return "token";
      });
    }
  });


export const signin = (username, password) => {

    fetch("/api/signin").then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.text();
      }).then(function(value){
          
          console.log(value)
        })
}

export const addTask = (task) => {
    return true;//TODO 
}


export const removeTask = (task) => {
    return true; //TODO 
}



export const removeTasks = (task) => {
    return true;//TODO 
}

export const GetTasksByDate = (date) => {
    const task = {duration: 1020123, date: 3210319, isDone: false, name: "first task", category: "cat1"}
    return task;//TODO 
    
}

export const MarkTaskAsDone = (task) => {
    return true;//TODO 
}
 
export const UpdateTasks = (tasks) => {
    return true//TODO 
}

export const AddTasks = (tasks) => {
    return true;//TODO 
}
