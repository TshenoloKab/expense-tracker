function TransactionList() {
  return (
    <div>
      <h3>History</h3>
      <ul className="transaction-list">
        <li className="transaction positive">
          Salary <span>+$500</span>
        </li>
        <li className="transaction negative">
          Grocery <span>-$50</span>
        </li>
      </ul>
    </div>
  )
}

export default TransactionList

