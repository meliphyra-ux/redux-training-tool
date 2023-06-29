export type ToDo = {
  id: number;
  text: string;
  createdAt: number;
  completed: boolean;
}

export type Action<T> = {
  type: T
}

export type ActionWithPayload<T, P> = {
  type: T,
  payload: P,
}