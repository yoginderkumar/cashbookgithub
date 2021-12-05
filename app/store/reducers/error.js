const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  const matches = /(.*)_(REQUEST|FAILURE)/.exec(type);

  /** Proceed only if action type matched REQUEST or FAILURE. Other case like SUCCESS will be ignored */
  if (!matches) return state;

  const [, requestName, requestState] = matches;

  return {
    ...state,
    [requestName]:
      requestState === "FAILURE"
        ? payload.error === true
          ? payload.errors
          : payload.error
        : "",
    errorType:
      requestState === "FAILURE"
        ? payload.error === true
          ? payload.errorType
          : ""
        : "",
  };
};