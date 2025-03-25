 import clsx from "clsx";
 import s from "../TransactionHistory/TransactionHistory.module.css";
 
 const TransactionHistory = ({items}) => {
  
    return (
      <div>
        <table className={clsx(s.tableContainer)}>
  <thead className={clsx(s.tableHead)}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={clsx(s.tableBody)}>
    {items.map((item) => {
        return (
            <tr className={clsx(s.tableBodyText)} key={item.id}>
                
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.currency}</td>
                        </tr>
                    )
                })
                }
                </tbody>

</table>
      </div>  
    );
 }

 export default TransactionHistory;