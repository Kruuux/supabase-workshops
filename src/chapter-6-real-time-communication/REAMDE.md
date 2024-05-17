# CRUD

## Description

In this chapter we will test the standard functionality of many backend applications such as saving, reading, updating and deleting records from the database.

## Steps

1. Run listener with `npm run chapter-6-listener`
2. Run sender with `npm run chapter-6-sender`
3. Check if listener received a message

### Login

```typescript
await supabase.auth.signInWithPassword({
  email: "example-a@gmail.com",
  password: "my-password123",
});
```

### Listen for an event

```typescript
const channelA = supabase.channel("room-1");
channelA
  .on("broadcast", { event: "test" }, (payload) =>
    console.log(`Received message: \n\n ${JSON.stringify(payload)}`)
  )
  .subscribe();
```

### Send event

```typescript
const channelB = supabase.channel("room-1");

channelB.subscribe((status) => {
  if (status !== "SUBSCRIBED") {
    return null;
  }

  channelB.send({
    type: "broadcast",
    event: "test",
    payload: { message: "First message, hello" },
  });
});
```
