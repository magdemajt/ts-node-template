export interface IServer {
  start(): Promise<void>;
}

export const SERVER_TYPE = Symbol('Server');
