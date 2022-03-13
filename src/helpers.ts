export async function checkForDifferentSid(
  client: any,
  record: any
): Promise<any> {
  const response = await client.messages.list();
  return response[0].sid != record.sid;
}

export function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
