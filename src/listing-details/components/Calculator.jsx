import React, { useState } from "react";

function Calculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(1); // Default to 1 year
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculatePayment = () => {
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      // If interest rate is 0, calculate without interest
      setMonthlyPayment(loanAmount / numberOfPayments);
    } else {
      // Calculate monthly payment using the formula
      const payment =
        (loanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
      setMonthlyPayment(payment);
    }
  };

  return (
    <div className="flex justify-center bg-gray-50 py-10 -mt-10">
      <div className="p-4 rounded-lg bg-gray-100 shadow-sm w-[50%]">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Financial Calculator
        </h2>
        <div className="space-y-4">
          {/* Loan Value and Interest Rate in One Row */}
          <div className="flex gap-3">
            {/* Loan Value */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600">
                Loan Value
              </label>
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="Enter loan value"
              />
            </div>

            {/* Interest Rate */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-600">
                Interest Rate (%)
              </label>
              <input
                type="text"
                inputMode="decimal"
                pattern="[0-9]*"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:outline-none"
                placeholder="Enter interest rate"
              />
            </div>
            {/* Loan Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Loan Duration
              </label>
              <select
                value={loanTerm}
                onChange={(e) => setLoanTerm(Number(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded focus:ring-1 focus:ring-gray-400 focus:outline-none"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((year) => (
                  <option key={year} value={year}>
                    {year} {year === 1 ? "Year" : "Years"}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculatePayment}
            className="w-full bg-gray-300 text-gray-700 py-2 rounded hover:bg-gray-400 transition text-sm"
          >
            Calculate
          </button>

          {/* Monthly Payment Result */}
          {monthlyPayment > 0 && (
            <div className="mt-4 p-3 bg-gray-200 rounded text-center shadow-sm">
              <h3 className="text-lg font-medium text-gray-700">
                Monthly Payment: {monthlyPayment.toFixed(2)} Lkr
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
