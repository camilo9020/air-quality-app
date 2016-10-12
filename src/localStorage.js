export const loadState = () => {
  try {
    const serialiazedState = localStorage.getItem('state')
    if (serialiazedState === null) {
      return undefined;
    }
    return JSON.parse(serialiazedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialiazedState = JSON.stringify(state);
    localStorage.setItem('state', serialiazedState);
  } catch (err) {
    //ignore write errors.
  }
}

