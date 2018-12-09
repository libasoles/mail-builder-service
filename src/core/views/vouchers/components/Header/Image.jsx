import React from 'react';
import PropTypes from 'prop-types';
import { Table, Column } from 'components/index';
import { withAppContext } from 'services/context';

const AccountImage = (props) => {
  const { src, styles } = props;
  return (
    <Column>
      <Table cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style={{ ...styles.sections.header.imageContainer }}>
            <img src={src} {...styles.sections.header.image} alt="accountImage" />
          </td>
        </tr>
      </Table>
    </Column>
  );
};

AccountImage.propTypes = {
  src: PropTypes.string.isRequired,
  styles: PropTypes.shape({}).isRequired,
};

export default withAppContext(AccountImage);
