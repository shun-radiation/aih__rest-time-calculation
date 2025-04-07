import React from 'react';

const DuplicateTimeSelect = ({ duplicationState, setDuplicationState }) => {
  const handleDuplicateOn = () => {
    setDuplicationState(true);
  };
  const handleDuplicateOff = () => {
    setDuplicationState(false);
  };
  return (
    <div className='duplicateTimeSelect'>
      休憩時間重複：
      <input
        name='duplicateTimeSelect'
        type='radio'
        id='duplicateOn'
        checked={duplicationState === true}
        required
        onClick={handleDuplicateOn}
      />
      <label htmlFor='duplicateOn'>有り</label>
      <input
        name='duplicateTimeSelect'
        type='radio'
        id='duplicateOff'
        checked={duplicationState === false}
        style={{ marginLeft: '10px' }}
        onClick={handleDuplicateOff}
      />
      <label htmlFor='duplicateOff'>無し</label>
    </div>
  );
};

export default DuplicateTimeSelect;
