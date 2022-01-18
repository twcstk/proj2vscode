function calcMonthsUntilPaidOff(localBalance, localAPR, localMonthlyPayment) {
    let dailyRate = ((localAPR / 100) / 365);
    let numerator  = Math.log10(1 + ((localBalance/localMonthlyPayment) * (1 - (1 + dailyRate)**30 )));
    let denominator = Math.log10(1 + dailyRate);
    let numeratorN  = Math.log(1 + ((localBalance/localMonthlyPayment) * (1 - (1 + dailyRate)**30 )));
    let denominatorN = Math.log(1 + dailyRate);
    console.log("dailyRate  : ", dailyRate);
    console.log("numerator  : ", numerator );
    console.log("numeratorN  : ", numeratorN );
    console.log("denominator  : ", denominator ); 
    console.log("denominatorN  : ", denominatorN );
    console.log("Ratio   : ", numerator / denominator );
    console.log("RatioN  : ", numeratorN / denominatorN );

    console.log("Months10  : ", (-(1 / 30)) * ( numerator / denominator));
    console.log("MonthsN  : ", (-(1 / 30)) * ( numeratorN / denominatorN));
   
    let localMonths = Math.ceil((-(1 / 30)) * ( numerator / denominator));
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