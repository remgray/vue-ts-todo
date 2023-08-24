export type ITodosState = {
  todos: ITodoItem[];
};

export interface ITodoItem {
  id: number;
  title: string;
  completed: boolean;
}

export type TodoFiltersType = 'All' | 'Active' | 'Done';
export type TodoFiltersList = TodoFiltersType[];

export interface ITodosStat {
  active: number;
  done: number;
}
