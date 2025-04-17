export const logValue = (value: string, ...args: unknown[]) => {
    const prefix = `r:${Math.random().toPrecision(2)}`.slice(0, 6);
    console.log(prefix + ":    " + value, {
      args
    });
  };