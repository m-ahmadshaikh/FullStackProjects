import Item from './Item';
import 'prop-types' from Prop
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
