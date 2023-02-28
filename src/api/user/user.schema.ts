export type UserInput = {
  email?: string;
  password?: string;
  fullName?: string;
};

export type User = {
  id: number;
  email: string;
  fullName: string | null;
  isAdmin: boolean;
};
