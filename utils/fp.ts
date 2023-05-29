export const track = (tag: string) =>
  function track(data: any) {
    console.log(`TAG: ${tag}\n${data}`); // eslint-disable-line
    return data;
  };
