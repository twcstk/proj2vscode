function calcMonthsUntilPaidOff(lBalance, lAPR, lMonthlyPayment) {
    a = -(1 / 30);
    i = (lAPR / 100) / 365;
    c = Math.log10(1 + (lBalance / lMonthlyPayment) * (1 - (1 + i) ** 30));
    d = Math.log10(1 + i);
    localMonths = Math.ceil(a * (c / d));
    return localMonths;
  }
    let balance = 5000;
    let APR = 12;
    let monthlyPayment = 100;
    let months = calcMonthsUntilPaidOff(balance, APR, monthlyPayment);
    
    console.log("what is your balance?", balance, "\n",
       "what is the APR on the card (as a percent)?", APR, "\n", 
       "what is the monthly payment you can make?", monthlyPayment, "\n",
       "it will take you", months, "months to pay off this card")