import css from '../TransactionHistory/transactionHistory.module.css'
import PropTypes from 'prop-types';


export default function TransactionHistory({ items }) {
  return (
    <table className={css.transaction_table}>
      <thead className={css.table_head}>
        <tr>
          <th className={css.table_title}>Type</th>
          <th className={css.table_title}>Amount</th>
          <th className={css.table_title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={css.table_body_row} key={id}>
            <td className={css.table_row_data}>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
TransactionHistory.propTypes={
    items: PropTypes.arrayOf(
        PropTypes.exact({
        id: PropTypes.string.isRequired,
        amount:PropTypes.string.isRequired,
        currency:PropTypes.string.isRequired,
        type:PropTypes.string.isRequired,
    }))}