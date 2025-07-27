export type Priority = "High" | "Medium" | "Low";

export  type Todo = {
  task: string;
  completed: boolean;
  priority: Priority;
};
