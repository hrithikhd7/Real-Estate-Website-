import { useState } from "react";

const Mortgage = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = (e) => {
    e.preventDefault();
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (principal > 0 && rate > 0 && term > 0) {
      const payment =
        (principal * rate * Math.pow(1 + rate, term)) /
        (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(payment);
    } else {
      setMonthlyPayment(null);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          "url('https://i.ibb.co/kJvjJB1/andrey-yachmenov-0-Wx-A37-EXV0-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "20px",
      }}
    >
      <div className="max-w-md mx-auto mt-10 p-6 bg-white bg-opacity-75 rounded-lg shadow-md">
        <h2 className="text-5xl font-bold mb-6 text-center font-primary">
          Calculate Your Mortgage
        </h2>
        <form onSubmit={calculateMortgage} className="space-y-4">
          <div>
            <label
              htmlFor="loanAmount"
              className="block text-xl font-medium text-gray-700 mb-1 font-primary"
            >
              Loan Amount ($)
            </label>
            <input
              id="loanAmount"
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder="Enter loan amount"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="interestRate"
              className="font-primary text-xl block text-sm font-medium text-gray-700 mb-1"
            >
              Interest Rate (%)
            </label>
            <input
              id="interestRate"
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              placeholder="Enter interest rate"
              step="0.01"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="loanTerm"
              className="font-primary text-xl block text-sm font-medium text-gray-700 mb-1"
            >
              Loan Term (years)
            </label>
            <input
              id="loanTerm"
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              placeholder="Enter loan term"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="submit"
            className="text-2xl font-primary w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Calculate
          </button>
        </form>
        {monthlyPayment !== 0 && (
          <div className="mt-6 p-4 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Monthly Payment:</h3>
            <p className="text-2xl font-bold text-green-600">
              ${monthlyPayment.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Mortgage;
