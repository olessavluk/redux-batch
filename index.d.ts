declare module "@olessavluk/redux-batch" {
  import { AnyAction, StoreEnhancer } from "redux";

  export const reduxBatch: StoreEnhancer<{
    dispatch: (actions: AnyAction[]) => AnyAction[],
  }>;
}
