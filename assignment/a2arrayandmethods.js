const payroll = [
  { name: "Asha", basePay: 30000, bonus: 2000, taxRate: 0.1 },
  { name: "Vishnu", basePay: 29000, bonus: 3000, taxRate: 0.09 },
  { name: "Chiru", basePay: 20000, bonus: 1500, taxRate: 0.12 },
  { name: "Shreyas", basePay: 40000, bonus: 0, taxRate: 0.15 }
];

const validRecords = payroll.filter(emp =>
  emp.basePay > 0 &&
  emp.bonus >= 0 &&
  emp.taxRate >= 0 &&
  emp.taxRate <= 1
);

const netPayReport = validRecords.map(emp => {
  const gross = emp.basePay + emp.bonus;    
  const netPay = gross - (gross * emp.taxRate);

  return {
    name: emp.name,
    netPay: netPay
  };
});

const totalNetPayout = netPayReport.reduce((total, emp) => {
  return total + emp.netPay;
}, 0);

console.log("Valid Records:", validRecords);
console.log("Net Pay Report:", netPayReport);
console.log("Total Net Payout:", totalNetPayout);