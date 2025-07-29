const { test, expect, request } = require('@playwright/test');

test('Login API and get protected resource', async () => {
  const apiContext = await request.newContext();

//   // 1. Login
//   const loginResponse = await apiContext.post('https://yourapi.com/login', {
//     data: {
//       username: 'your_username',
//       password: 'your_password',
//     },
//   });

  //expect(loginResponse.ok()).toBeTruthy();

//   const loginData = await loginResponse.json();
//   const token = loginData.token; // assume token comes here

  // 2. Use token to get protected resource
const protectedResponse = await apiContext.get('https://netopzdevbackend-bphqbpgwdjbag8e8.a01.azurefd.net/api/Dashboard', {
  headers: {
    Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Il9qTndqZVNudlRUSzhYRWRyNVFVUGtCUkxMbyIsImtpZCI6Il9qTndqZVNudlRUSzhYRWRyNVFVUGtCUkxMbyJ9.eyJhdWQiOiJhcGk6Ly9iYzA1ZDBjOS1jNDllLTRlZmUtYWIwMC0yNzlhYTFlNjE2MTciLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC9jZjU1Y2UxMC04MzdiLTQyY2QtODE1NC1lOWE0ZGJkMTgwMzkvIiwiaWF0IjoxNzUxMjc1MDcyLCJuYmYiOjE3NTEyNzUwNzIsImV4cCI6MTc1MTI3OTU5NSwiYWNyIjoiMSIsImFpbyI6IkFYUUFpLzhaQUFBQUtBSTFpMkJPd3pCY3h6TTBlWHFaYTMwREJ6ajJEb1c5d2g5blVrMnFJdnhSR3lWdWZQc3IzQnp5OS9BMEZ0WVFzRGZMMG8wYWRaclUwcVpJU0dKTHA5UC8wU1Y4ZXhrOTFwYmwyQ2p1SFZubDVNcmxXdDZ4YXU3RWhPejBxeEhrMy90QmdLdXFZbXpHNDRUMlBrV3Yrdz09IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBpZCI6IjBiM2YwMWFhLWQyODAtNDJkOS1iM2MzLTU4MjYxMTBiMWJkZiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiQ2hvdGh2ZSIsImdpdmVuX25hbWUiOiJNYWhlc2giLCJpcGFkZHIiOiIyNy4xMDcuMTMuNTgiLCJuYW1lIjoiQ2hvdGh2ZSwgTWFoZXNoIiwib2lkIjoiODZiYWUzN2QtNDQ4MS00MTViLWJlZjEtOWFjMzI3ZDY0NzViIiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTE1MTQ3OTQwMDgtNjU2NzUzOTg3LTE3OTE0MTE5NC0xODIzMDUiLCJyaCI6IjEuQVEwQUVNNVZ6M3VEelVLQlZPbWsyOUdBT2NuUUJieWV4UDVPcXdBbm1xSG1GaGNDQWVnTkFBLiIsInNjcCI6ImFjY2Vzc19hc191c2VyIiwic2lkIjoiMDA2MDI5NDktMmUxNy1iNGM3LTJmYTUtODdmMTdmYWY0MzRmIiwic3ViIjoiWkR1ZS1idk1JRHRIeWFJSVRMVl9lblY2LXhES0RRMl9WZTVUelZQN0ltYyIsInRpZCI6ImNmNTVjZTEwLTgzN2ItNDJjZC04MTU0LWU5YTRkYmQxODAzOSIsInVuaXF1ZV9uYW1lIjoibWFoZXNoLmNob3RodmVAYWxpeHBhcnRuZXJzLmNvbSIsInVwbiI6Im1haGVzaC5jaG90aHZlQGFsaXhwYXJ0bmVycy5jb20iLCJ1dGkiOiJxOUtvUVVHcGlVR0RPbjBndmt5ZUFBIiwidmVyIjoiMS4wIiwieG1zX2Z0ZCI6IkMxTGo4Z3dCaGFmZVhjSkxwakVreVptMmt2aXVlaFNHel9CdHRubVV6YzRCZFhOemIzVjBhQzFrYzIxeiJ9.IJN_gC_80TZiTB2Z1NTeh2ftUK-AixbpEOQTdu9JynFhbR2B8koE-MadJ5CpqL5gGljsHo8FwciJ-Qpn_Fy-pojHagw9E9oo03td678bBLbeHDrl1nGooJgB8uXHf1Zy116Oh5pwbh777azgo6oitG60bM6D3Zjin53wP_oSojBi0VBUsB1DVuOOhfNjHAvQrMurIXW72SZ82wQh6LFZXfaKcfjjTjBhTe9VuUVjE59CMx1-xBfZZ5O4g0-829lyU_JrLhQqacBTzifJGAdT1Ws2TCd2bjGpImQfRz-9_58s-7845V4jVg1GG1822p5mCq1dd7Ze57pLPywGjWmqWQ',
  },
});

  expect(protectedResponse.ok()).toBeTruthy();

  const data = await protectedResponse.json();
  console.log(data);
});
