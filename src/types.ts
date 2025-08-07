export enum PriorityType {
  low = "low",
  medium = "medium",
  high = "high",
}

export type Todo = {
  id: string;
  task: string;
  completed: boolean;
  priority: PriorityType;
};
