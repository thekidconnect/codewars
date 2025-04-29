// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']
function permutations(string, char = "") {
  if (string.length < 2) return [string];
  if (string.length === 2) {
    const [l, r] = string;
    if (l === r) return [string];
    return [l + r, r + l];
  }
  const x = permutations(string.slice(1))
    .map((s) => {
      var strings = [];
      for (let i = 0; i < s.length + 1; i++) {
        const b = s.slice(0, i);
        const m = string[0];
        const e = s.slice(i);
        strings.push(b + m + e);
      }
      return strings;
    })
    .flat();
  const o = new Set(x);
  return [...o];
}

function permute(string, char = "") {
  var strings = [];
  for (let i = 0; i < s.length + 1; i++) {
    const b = s.slice(0, i);
    const e = s.slice(i);
    strings.push(b + char + e);
  }
  return strings;
}

function permutationsTwo(string) {
  return [...string].reduce((a, b) => permute(a, b));
}

function permutationsThree(string) {
  if (string.length < 2) return [string];
  const a = [...string]
    .map((char, idx) => {
      const rest = string.slice(0, idx) + string.slice(idx + 1);
      return permutationsThree(rest).map((s) => char + s);
    })
    .flat();
  return [...new Set(a)];
}

const a = permutationsThree("abcd");
console.log(a);

// [...s].map((a, i) => {
//   //   const b = s.slice(0, i);
//   //   const m = string[0];
//   //   const e = s.slice(i);
//   //   console.log({ b, m, e });
//   //   return b + m + e;
// })

//   // permute takes a string and a character and a returns a list of strings which are the given string spliced with the character
//   var permute = (string, char) =>
//     [...string].map((a, i) => string.slice(0, i) + char + string.slice(i));
//   return permute(string.slice(1),string[0]);
//   //return [...string].reduce((a,b)=>permute(a,b))
