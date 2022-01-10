let Unknown: unknown;

unknown = "test"

const add2 = (n1: number) => {
  console.log(n1 + n1)
}

if(typeof (Unknown) === 'number') {
  add2(Unknown)
}else{
  console.log(Unknown);
  
}

type Combinable = number | string;
type Conversion = "as-num" | "as-str"

const combine = (
input1: Combinable,
input2: Combinable,
convert: Conversion
): Combinable => {
  let result: Combinable;
  if (convert == "as-num") {
    result = Number(input1) + +input2
    if (convert == "as-str") {
      result = "" + input1 + input2
      return result
    }else{
      return "invalid"
    }
  }
}
type Hero = {
  stats: {
    strength: string
  }
  inventory: Item[];
  title: Title;
}

function errorCatch(mess)