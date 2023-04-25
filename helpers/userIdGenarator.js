const usedIDs = [];

function generateUserID() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // check if the generated ID is unique
  if (usedIDs.includes(result)) {
    // if not unique, recursively generate a new ID
    return generateUserID();
  } else {
    // if unique, add it to the usedIDs array and return it
    usedIDs.push(result);
    return result;
  }
}

export default generateUserID