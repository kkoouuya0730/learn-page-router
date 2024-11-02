import { createClient } from "@/lib/supabase/component";
import { Inputs } from ".";

export const SignUp = async (value: Inputs) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signUp({
    email: value.email,
    password: value.password,
  });
  if (error) {
    alert(error);
    return;
  }
};
export const SignIn = async (value: Inputs) => {
  const supabase = createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email: value.email,
    password: value.password,
  });
  if (error) {
    alert(error);
    return;
  }
};
