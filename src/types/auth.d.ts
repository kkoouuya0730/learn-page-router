export type UserInfo = {
  name: {
    firstName: string;
    lastName: string;
  };
  username: string;
  gender: "man" | "woman";
  age: string;
  description: string;
  email: string;
  loginInfo: {
    userId: string;
    password: string;
  };
  registered: string;
  phone: string;
  thumbnail: string;
  github: string;
  twitter: string;
  instagram: string;
};
