export const saveStateToSessionStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('cartState', serializedState);
    } catch (err) {
      console.error("Could not save state to session storage", err);
    }
  };
  
  export const loadStateFromSessionStorage = () => {
    try {
      const serializedState = sessionStorage.getItem('cartState');
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (err) {
      console.error("Could not load state from session storage", err);
      return undefined;
    }
  };