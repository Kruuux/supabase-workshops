# CRUD

## Description

In this chapter we will test the standard functionality of many backend applications such as saving, reading, updating and deleting records from the database.

## Steps

1. Register to supabase
2. Create new project
3. Copy the secrets to .env file
4. Execute queries from index.ts file with `npm run chapter-1` command

### Create new record

```typescript
await supabase
  .from("books")
  .insert([{ name: "new book" }])
  .select();
```

### Fetch records

```typescript
const { data: books } = await supabase
  .from("books")
  .select("*")
  .order("id", { ascending: true })
  .range(0, 1);

console.log(books);
```

### Fetch particular record by id

```typescript
const { data: book } = await supabase
  .from("books")
  .select()
  .eq("id", 1)
  .single();

console.log(book);
```

### Remove record by id

```typescript
await supabase.from("books").delete().in("id", [1]).select();
```

### Update record by id

```typescript
await supabase
  .from("books")
  .update({ name: "updated book" })
  .eq("id", 1)
  .select();
```
