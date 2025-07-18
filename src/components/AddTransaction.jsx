function AddTransaction() {
  return (
    <div className="add-transaction">
      <h3>Add New Transaction</h3>
      <form>
        <input type="text" placeholder="Enter text..." />
        <input type="number" placeholder="Enter amount..." />
        <button type="submit">Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction

