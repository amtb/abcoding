/**
 * 929. Unique Email Addresses
 * https://leetcode.com/problems/unique-email-addresses/
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const process = (email) => {
    const [localName, domainName] = email.split('@');

    let processed = '';
    for (let i = 0; i < localName.length; i++) {
      if (localName[i] === '+') break;
      if (localName[i] !== '.') processed += localName[i];
    }

    return `${processed}@${domainName}`;
  };

  const set = new Set();
  for (const email of emails) {
    set.add(process(email));
  }

  return set.size;
};
export default numUniqueEmails;
