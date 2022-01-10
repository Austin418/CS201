let num: number = 5;
const user: string = "test";

const add = (n1: number, n2: number): string => {
  console.log(n1 + n2);

  return `the sum is ${n1} + ${n2}`;
};

const addAndHandle = (
  n1: number,
  n2: number,
  cb: (result: string) => void
): void => {
  const result: number = n1 + n2;
  cb(`${result}`);
};

addAndHandle(2, 60, (result) => {
  console.log(result);
});

const concatAndHandle =  (
  str1: string,
  str2: string,
  cb:(result: string) => void
) => {
  const result = str1 + " " + str2
  cb(result)
}

const concatAll = (...strs: string[]):void => {
  console.log(strs.join(" "));
}