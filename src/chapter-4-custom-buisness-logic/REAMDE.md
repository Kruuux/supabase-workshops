# Custom business logic - edge functions

## Description

In this chapter, we will deal with solution for custom business logic. First we will create an edge function, then deploy it and later call it remotely.

## Steps

1. Install CLI with `brew install supabase/tap/supabase`
2. Run `supabase init`
3. Create new function by running `supabase functions new hello-world`
4. Follow deployment steps from [docs](https://supabase.com/docs/guides/functions/deploy)
5. Check logs on the platform

### Call remotely edge function

```typescript
const url = `https://${process.env.SUPABASE_PROJECT_ID}.supabase.co/functions/v1/hello-world`;

const headers = {
  Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
  "Content-Type": "application/json",
};

const data = {
  name: "Konrad",
};

const { data: responseData } = await axios.post(url, data, { headers });

console.log(responseData);
```
