
const rules = [
  { role: "admin", action: "READ", allowed: true },
  { role: "admin", action: "WRITE", allowed: true },
  { role: "student", action: "READ", allowed: true },
  { role: "student", action: "WRITE", allowed: false },
  { role: "guest", action: "READ", allowed: false }
];

const allowedRules = rules.filter(rule => rule.allowed === true);

const allowedPairs = allowedRules.map(rule => `${rule.role}:${rule.action}`);

const summary = rules.reduce((acc, rule) => {
  if (!acc[rule.role]) {
    acc[rule.role] = 0;
  }
  if (rule.allowed) {
    acc[rule.role]++;
  }
  return acc;
}, {});

["admin", "student", "guest"].forEach(role => {
  if (!summary[role]) summary[role] = 0;
});

console.log("Allowed Rules:", allowedRules);
console.log("Allowed Pairs:", allowedPairs);
console.log("Summary:", summary);