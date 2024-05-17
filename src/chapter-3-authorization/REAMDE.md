# Authorization

## Description

In this chapter we will test the restriction of access to specific resources using policies.

## Steps

1. Setup RLS on supabase, example (auth.role() = 'authenticated'::text)
2. Try to make queries without logging in with `npm run chapter-3` command
3. Try to make queries after logging in with `npm run chapter-3` command

### Create a new record without authentication

```typescript
const { data: createdBook } = await supabase
  .from("books")
  .insert([{ name: "new book 123123" }])
  .select();
```

### Login

```typescript
const data = await supabase.auth.signInWithPassword({
  email: "example-a@gmail.com",
  password: "my-password123",
});

console.log(data);
```

### Log user details

```typescript
await supabase.auth.getUser();
```
