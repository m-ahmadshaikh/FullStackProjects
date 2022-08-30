import Item from './Item';
import  from 'prop-types';
function List({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <Item item={item} key={item.objectID} />
      ))}
    </ul>
  );
}
List.propTypes = { list: PropTypes.shape([]) };
List.defaultProps = {
  list: [],
};
