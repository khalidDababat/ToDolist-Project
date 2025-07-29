export enum PriorityType {
  low = "low",
  medium = "medium",
  high = "high",
}

export type Todo = {
  task: string;
  completed: boolean;
  priority: PriorityType;
};
