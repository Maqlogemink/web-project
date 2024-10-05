function pang(bil, pangk) {
  if (pangk == 1) {
    return bil;
  }
  return bil * pang(bil, pangk - 1);
}

const nama = "nama saya kon-";

console.log(pang(3, 2));
