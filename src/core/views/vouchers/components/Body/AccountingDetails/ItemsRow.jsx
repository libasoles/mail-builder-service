import React from 'react';
import PropTypes from 'prop-types';
import Row from './Row';
import { withAppContext } from 'services/context';

const ItemsRow = ({ itemData, styles }) => {
  const textProperties = {
    color: styles.textColors.dark,
    fontSize: '16px',
    lineHeight: '20px',
  };

  return (
    <Row
      label={itemData.name}
      value={itemData.formattedPrice}
      textProperties={textProperties}
    />
  );
};

ItemsRow.propTypes = {
  itemData: PropTypes.shape({
    name: PropTypes.string,
    formattedPrice: PropTypes.string.isRequired,
  }).isRequired,
  styles: PropTypes.shape({}).isRequired,
};

export default withAppContext(ItemsRow);
