export enum LoadingActionType {
    LOADING = "LOADING"
}

export enum ErrorActionType {
    ERROR = "ERROR",
}

export enum ErrorType {
    EXCEPTION = "EXCEPTION",
    ERROR = "ERROR",
    WARNING = "WARNING",
    INFO = "INFO"
}

export type ActionExtraAny = Record<string, any>;
export type Action<A = any, P = any, E extends ActionExtraAny = ActionExtraAny> = {
    type: A;
    payload: P;
} & E;
export type TypeOfAction<T> = T extends Action<infer A> ? A : unknown;
export type PayloadOfAction<T> = T extends Action<any, infer P> ? P : unknown;
export type ExtraOfAction<A extends Action> = Omit<A, 'type' | 'payload'>;
export function _A<A extends Action, T = TypeOfAction<A>, P = PayloadOfAction<A>>(
    type: T,
    payload: P,
  ): Action<T, P>;
export function _A<A extends Action, T = TypeOfAction<A>, P = PayloadOfAction<A>, E = {}>(
    type: T,
    payload: P,
    extraProps?: E,
): Action<T, P, E>;

export function _A<A extends Action, T = TypeOfAction<A>, P = PayloadOfAction<A>, E = {}>(
    type: T,
    payload: P,
    extraProps?: E,
) {
    return extraProps
    ? {
        type,
        payload,
        ...extraProps,
    }
    : { type, payload };
}

export type ActionCreator<A extends Action, T = TypeOfAction<A>, P = PayloadOfAction<A>, E = {}> = (
    payload: P,
    extraProps?: E,
) => Action<T, P, E>;export type LoadingAction<T = LoadingActionType.LOADING> = Action<T, boolean>;
  
export const actionCreator = <
  A extends Action,
  T = TypeOfAction<A>,
  P = PayloadOfAction<A>,
  E = ExtraOfAction<A>
>(
  type: T,
): ActionCreator<A, T, P, E> => (payload: P, extraProps?: E): Action<T, P, E> => {
  return _A<A, T, P, E>(type, payload, extraProps);
};
export interface DefaultStoreState {}
export type Selector<TSelected, TState extends DefaultStoreState = DefaultStoreState> = (
    state: TState,
) => TSelected;
