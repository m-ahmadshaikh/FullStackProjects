import { ReactPropTypes } from "react";
function Item({ item, key }) {
  return (
    <li key={key}>
      <span>
        <a href={item.url}>{item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
}
Item.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
    author: PropTypes.string,
    num_comments: PropTypes.number,
    points: PropTypes.number,
    objectID: PropTypes.number,
  }),
  key: PropTypes.string,
};
Item.defaultProps = {
  item: {
    title: 'title',
  },
  key: '',
};

export default Item;
