let MasterCard = /^(?:5[1-5][0-9]{4,}|2221[0-9]{2,}|222[1-9][0-9]{2,}|22[3-9][0-9]{3,}|2[3-6][0-9]{4,}|27[01][0-9]{3,}|2720[0-9]{2,})$/
//222100‑272099 51‑55, 222100‑272099
console.log("start")
for (let i = 100000; i <= 99999999; i++) {
  const v2 = parseInt(String(i).substr(0, 2))
  const v6 = parseInt(String(i).substr(0, 6))
  const f2 = v2 >= 51 && v2 <= 55
  const f6 = v6 >= 222100 && v6 <= 272099
  const matched = MasterCard.test(String(i))
  if (!f2 && !f6 && matched) console.log("不在范围内且匹配：", i)
  if ((f2 || f6) && !matched) console.log("在范围内且不匹配：", i)
}
for (let i = 0; i < 100000; i++) {
  if (MasterCard.test(String(i))) {
    console.log(i)
  }
}

console.log("end")

console.log("-----------------")
// 6011, 622126‑622925, 644‑649, 65
let discover = /^(?:6011[0-9]{2,}|65[0-9]{4,}|64[4-9][0-9]{3,}|62212[6-9][0-9]*|6221[3-9][0-9]+|622[2-8][0-9]{2,}|62292[0-5][0-9]*|6229[01][0-9]+)$/
console.log("start")
for (let i = 0; i < 100000; i++) {
  if (discover.test(String(i))) {
    console.log(i)
  }
}
for (let i = 100000; i <= 99999999; i++) {
  const v2 = parseInt(String(i).substr(0, 2))
  const v6 = parseInt(String(i).substr(0, 6))
  const v4 = parseInt(String(i).substr(0, 4))
  const v3 = parseInt(String(i).substr(0, 3))
  const f3 = v3 >= 644 && v3 <= 649
  const f6 = v6 >= 622126 && v6 <= 622925
  const f4 = v4 === 6011
  const f2 = v2 === 65
  const matched = discover.test(String(i))
  if (!f3 && !f4 && !f2 && !f6 && matched) console.log("不在范围内且匹配：", i)
  if ((f2 || f6 || f3 || f2) && !matched) console.log("在范围内且不匹配：", i)
}
console.log("end")
