import React, { useState } from "react";
import "./mortgageCalculator.css";

const MortgageCalculator = () => {
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalPayment, setTotalPayment] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const loanAmount = parseFloat(data.get("loanAmount"));
    const monthlyInterestRate = parseFloat(data.get("interestRate")) / 100 / 12;
    const loanTermsInMonth = parseFloat(data.get("loanTerm")) / 12;

    const monthlyPaymentAmount =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTermsInMonth));
    const totalPayment = monthlyPaymentAmount * loanTermsInMonth;
    const currencyFormatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    // Display monthly payment amount.
    setMonthlyPayment(currencyFormatter.format(monthlyPaymentAmount));

    // Display total payment amount.
    setTotalPayment(currencyFormatter.format(totalPayment));

    // Display total interest amount.
    setTotalInterest(currencyFormatter.format(totalPayment - loanAmount));
  };
  return (
    <div>
      <h2>Mortgage Calculator</h2>
      <form onSubmit={onSubmit} className="mortgage-form">
        <div>
          <label htmlFor="loanAmount">Loan Amount</label>
          <input type="number" id="loanAmount" name="loanAmount" />
        </div>
        <div>
          <label htmlFor="loanTerm">Loan Term(years)</label>
          <input type="number" id="loanTerm" name="loanTerm" />
        </div>
        <div>
          <label htmlFor="interestRate">Interest Rate</label>
          <input type="number" id="interestRate" name="interestRate" />
        </div>
        <div>
          <button type="submit">Calculate</button>
        </div>
      </form>
      <div className="calculated-result">
        <p>
          <b>Monthly Payment Amount:</b>
          {monthlyPayment}
        </p>
        <p>
          <b>Total Payment Amount:</b>
          {totalPayment}
        </p>
        <p>
          <b>Total Interest Paid:</b>
          {totalInterest}
        </p>
      </div>
    </div>
  );
};

export default MortgageCalculator;
