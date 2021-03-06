import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import ReactSelect from 'react-select';

import PropTypes from 'prop-types';

export default function AsyncSelect({ name, label, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map(option => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <ReactSelect
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}

AsyncSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

AsyncSelect.defaultProps = {
  label: '',
};
