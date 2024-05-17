// import { supabase } from "../shared/supabaseClient.ts";

// =============== Create new record ===============
// await supabase
//   .from("books")
//   .insert([{ name: "new book" }])
//   .select();
//
// =====================================================

// =============== Fetch records ===============
//
// const { data: books } = await supabase
//   .from("books")
//   .select("*")
//   .order("id", { ascending: true })
//   .range(0, 1);
//
//  console.log(books);
// =====================================================

// =============== Fetch particular record by id ===============
//
// const { data: book } = await supabase
//   .from("books")
//   .select()
//   .eq("id", 1)
//   .single();
//
// console.log(book);
//
// =====================================================

// =============== Remove records by ids ===============
//
// await supabase
//   .from("books")
//   .delete()
//   .in("id", [1])
//   .select();
//
// =====================================================

// =============== Update record by id ===============
//
// await supabase
//   .from("books")
//   .update({ name: "updated book" })
//   .eq("id", 1)
//   .select();
//
// =============== Update record by id ===============
