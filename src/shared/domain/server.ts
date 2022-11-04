export interface Server {
  start(): Promise<void>;
  getHTTPServer();
  stop(): Promise<void>;
}
