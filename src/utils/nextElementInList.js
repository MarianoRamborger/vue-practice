export const nextElementInList = (setState, action = "Build") => {
  setInterval(() => {
    const actions = ["Build", "Create", "Design", "Code"];
    const currentAction = actions.indexOf(action);
    const nextActionIndex = (currentAction + 1) % 4;
    const nextAction = actions[nextActionIndex];
    action = nextAction;
    setState(action);
  }, 1500);
};
