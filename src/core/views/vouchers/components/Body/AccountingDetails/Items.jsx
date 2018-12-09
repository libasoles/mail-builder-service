import React from 'react';
import PropTypes from 'prop-types';
import ItemsRow from './ItemsRow';
import { withAppContext } from 'services/context';

const Items = (props) => {
  const { items } = props;

  return (
    <React.Fragment>
      {items.length && items.map((item, index) => (
        <ItemsRow key={index} itemData={item} />
      ))}
    </React.Fragment>
  );
};

Items.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      formattedPrice: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default withAppContext(Items);
