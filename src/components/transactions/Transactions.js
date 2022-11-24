
import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const TransactionsList = ( { tranactions } ) =>
{
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {tranactions.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
        ;
      </tbody>
    </table>
  );
};


TransactionsList.propTypes = {
  tranactions: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}