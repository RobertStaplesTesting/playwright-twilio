import { test, expect } from "@playwright/test";
import { checkForDifferentSid, sleep } from "../src/helpers";
const accountSid = process.env.accountId;
const authToken = process.env.accountId;
const client = require("twilio")(accountSid, authToken);

let record: any;

test.beforeAll(async () => {
  const response = await client.messages.list({limit: 1);
  record = await response[0];
});

test("Testing a 2fa message", async () => {
  test.setTimeout(10000);

  //Here is where you would send off the 2FA test and wait for a response

  let tries = 0;
  let result: any;
  while (tries < 5 && !(result = await checkForDifferentSid(client, record))) {
    tries++;
    await sleep(1000);
  }
  expect(result).toEqual(true);

  // Here is where we would extract the code from the SMS and use it in the SUT/
});
