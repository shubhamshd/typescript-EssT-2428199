interface TDItems {
  id: number;
  title: string;
  status: TDItemStatus;
  completedOn?: Date;
}

enum TDItemStatus {
  Done = "done",
  InProgress = "in-progress",
  ToDo = "todo",
}

const todoItems: TDItems[] = [
  {
    id: 1,
    title: "Learn HTML",
    status: TDItemStatus.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: TDItemStatus.InProgress },
  {
    id: 3,
    title: "Write the best app in the world",
    status: TDItemStatus.ToDo,
  },
];

function addTodoItem(todo: string): TDItems {
  const id = getNextId(todoItems);

  const newTodo: TDItems = {
    id,
    title: todo,
    status: TDItemStatus.ToDo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
