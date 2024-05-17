// import { supabase } from "../shared/supabaseClient.ts";

// =============== Create a new record without authentication ===============
//
// const { data: createdBook } = await supabase
//   .from("books")
//   .insert([{ name: "new book 123123" }])
//   .select();
//
// console.log(createdBook);
//
// =====================================================

// =============== Login ===============
//
// const data = await supabase.auth.signInWithPassword({
//   email: "example-a@gmail.com",
//   password: "my-password123",
// });
//
// console.log(data);
//
// =====================================================

// =============== Log user details ===============
//
// await supabase.auth.getUser()
//
// =====================================================

// =============== Create new record after logging in ===============
//
// const { data: createdBook, error } = await supabase
//   .from("books")
//   .insert([{ name: "new book 333" }])
//   .select();
//
// =====================================================
