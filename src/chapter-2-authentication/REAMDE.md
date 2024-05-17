# Authentication

## Description

In this chapter we are going to create user account, confirm the email address and log into the account.

## Steps

1. Execute register method from index.ts file with `npm run chapter-2` command
2. Confirm email address
3. Execute login method from index.ts file with `npm run chapter-2` command

### Register

```typescript
const signupResponse = await supabase.auth.signUp({
  email: "example-a@gmail.com",
  password: "my-password123",
});

console.log(signupResponse);
```

### Login

```typescript
const data = await supabase.auth.signInWithPassword({
  email: "example-b@gmail.com",
  password: "my-password123",
});

console.log(data);
```

### Logout

```typescript
await supabase.auth.signOut();
```
