function generateRandomId(): string {
  const chars: string =
    "abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const length: number = 20;
  let password: string = "";

  for (var i = 0, n = chars.length; i < length; ++i) {
    password += chars.charAt(Math.floor(Math.random() * n));
  }

  return password;
}

export default generateRandomId;
