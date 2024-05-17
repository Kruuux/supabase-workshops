# File storage

## Description

In this chapter we will upload file to remote file storage.

## Steps

1. Create public bucket
2. Add bucket policy
3. Upload the file by running `npm run chapter-5`
4. Download the file from the platform

### Login

```typescript
await supabase.auth.signInWithPassword({
  email: "example-a@gmail.com",
  password: "my-password123",
});
```

### Upload the file

```typescript
const file = fs.readFileSync("./src/chapter-5-file-storage/text.txt");

const { data, error } = await supabase.storage
  .from("photos")
  .upload("public/text.txt", file);

console.log(data, error);
```
