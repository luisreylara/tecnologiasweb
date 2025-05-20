

 const addTwoNumbers = (params) => {
  return params.first + params.second;
};

 () => {
  console.log(
    addTwoNumbers({
      first: 2,
      second: 4,
    }),
  ).toEqual(6);

  console.log(
    addTwoNumbers({
      first: 10,
      second: 20,
    }),
  ).toEqual(30);
};
