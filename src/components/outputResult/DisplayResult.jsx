import React from 'react';

const DisplayResult = ({
  radiographerA,
  radiographerB,
  radiographerC,
  breakTimePairs,
}) => {
  // const shuffledList = [radiographerA, radiographerB, radiographerC].sort(
  //   () => Math.random() - 0.5
  // );

  // 上のシャッフルは完全なランダムではない(若干の偏りが生じる; 実際に偏っている気がしなくもない)
  // 代替案として、Fisher-Yatesシャッフルを用いる
  const shuffle = (radiographer) => {
    for (let i = radiographer.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [radiographer[i], radiographer[j]] = [radiographer[j], radiographer[i]];
    }
    return radiographer;
  };
  const shuffledList = shuffle([radiographerA, radiographerB, radiographerC]);

  return (
    <>
      <div className='eachResult'>
        1st:
        <br />
        &emsp;{`${breakTimePairs[0][0]}~${breakTimePairs[0][1]}`}
        &emsp;⇨&emsp;{shuffledList[0]}
      </div>
      <div className='eachResult'>
        2nd:
        <br />
        &emsp;{`${breakTimePairs[1][0]}~${breakTimePairs[1][1]}`}
        &emsp;⇨&emsp;{shuffledList[1]}
      </div>
      <div className='eachResult'>
        3rd:
        <br />
        &emsp;{`${breakTimePairs[2][0]}~${breakTimePairs[2][1]}`}
        &emsp;⇨&emsp;{shuffledList[2]}
      </div>
    </>
  );
};

export default DisplayResult;
