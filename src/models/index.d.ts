import { ModelInit, MutableModel } from "@aws-amplify/datastore";





export declare class Thread {
  readonly id: string;
  readonly name?: string | null;
  readonly blogID: string;
  constructor(init: ModelInit<Thread>);
  static copyOf(source: Thread, mutator: (draft: MutableModel<Thread>) => MutableModel<Thread> | void): Thread;
}

export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly threads?: (Thread | null)[] | null;
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}