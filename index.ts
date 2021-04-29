import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// define object structure
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(id, title, completed);
});
