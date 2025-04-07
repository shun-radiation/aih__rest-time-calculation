import React from 'react';

const Member = ({
  radiographerA,
  radiographerB,
  radiographerC,
  setRadiographerA,
  setRadiographerB,
  setRadiographerC,
}) => {
  //   const member = () => {
  //     const member = [];
  //     for (let i = 0; i < 3; i++) {
  //       member.push(<div className='member'>aaa</div>);
  //     }
  //     return member;
  //   };

  return (
    <>
      <input
        type='text'
        placeholder='技師A'
        className='member'
        onChange={(e) => {
          setRadiographerA(e.target.value);
        }}
        value={radiographerA}
      ></input>
      <input
        type='text'
        placeholder='技師B'
        className='member'
        onChange={(e) => {
          setRadiographerB(e.target.value);
        }}
        value={radiographerB}
      ></input>
      <input
        type='text'
        placeholder='技師C'
        className='member'
        onChange={(e) => {
          setRadiographerC(e.target.value);
        }}
        value={radiographerC}
      ></input>
    </>
  );
};

export default Member;
