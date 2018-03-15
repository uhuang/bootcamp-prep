function myMnemonic(string1, string2, string3, string4) {
  let mnemonic = '';

  if (string1 !== undefined) {
    mnemonic += string1[0];
  }

  if (string2 !== undefined) {
    mnemonic += string2[0];
  }

  if (string3 !== undefined) {
    mnemonic += string3[0];
  }

  if (string4 !== undefined) {
    mnemonic += string4[0];
  }

  return mnemonic;
}
