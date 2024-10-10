
const genderValue = ["MAN", "WOMAN"] as const;
type Gender = (typeof genderValue)[number];

export type UserInfo = {
  id: string;
  username: string;
  gender: Gender;
  age: string;
  description: string;
  email: string;
  password: string;
  phone: string;
  thumbnail: string;
  github: string;
  twitter: string;
  instagram: string;
};
