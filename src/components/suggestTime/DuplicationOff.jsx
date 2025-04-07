import React, { useState } from 'react';

const DuplicationOff = ({
  startTimeValue,
  finishTimeValue,
  setBreakTimePairs,
}) => {
  const [selectedPair, setSelectedPair] = useState([]);

  const formatStartTimeValue = (timeValue) => {
    const hour = Number(timeValue.slice(0, 2));
    const minute = Number(timeValue.slice(-2));
    const startDate = new Date(2025, 0, 1, hour, minute, 0, 0); //2025.01.01.hour.minute.0.0
    return startDate;
  };
  const formatFinishTimeValue = (timeValue) => {
    const hour = Number(timeValue.slice(0, 2));
    const minute = Number(timeValue.slice(-2));
    const finishDate = new Date(2025, 0, 2, hour, minute, 0, 0); //2025.01.02.hour.minute.0.0
    return finishDate;
  };

  // const startTime = formatStartTimeValue(startTimeValue).toLocaleString();
  // const finishTime = formatFinishTimeValue(finishTimeValue).toLocaleString();
  const startTime = formatStartTimeValue(startTimeValue);
  const finishTime = formatFinishTimeValue(finishTimeValue);

  const totalRestTime_minute =
    (finishTime.getTime() - startTime.getTime()) / (60 * 1000);

  const divideRestTime = (time) => {
    const totalRestTime_10minute = time / 10;
    if (totalRestTime_10minute % 3 === 0) {
      return time / 3;
    } else if (totalRestTime_10minute % 3 === 1) {
      return (time - 10) / 3;
    } else if (totalRestTime_10minute % 3 === 2) {
      return (time - 20) / 3;
    } else {
      return 'は？';
    }
  };

  const individualRestTime = divideRestTime(totalRestTime_minute);

  const calculateRestTime = (startTime, individualRestTime) => {
    const firstStart = startTime.toTimeString().slice(0, 5);
    const secondStart = new Date(
      startTime.getTime() + individualRestTime * 60 * 1000
    )
      .toTimeString()
      .slice(0, 5);
    const thirdStart = new Date(
      startTime.getTime() + individualRestTime * 60 * 1000 * 2
    )
      .toTimeString()
      .slice(0, 5);
    const thirdFinish = new Date(
      startTime.getTime() + individualRestTime * 60 * 1000 * 3
    )
      .toTimeString()
      .slice(0, 5);

    const breakTimePairs = [
      [firstStart, secondStart],
      [secondStart, thirdStart],
      [thirdStart, thirdFinish],
    ];

    return (
      <>
        <div className='candidate'>
          {/* {firstStart}
        <br />
        {secondStart}
        <br />
        {thirdStart}
        <br />
        {thirdFinish}
        <br /> */}
          <label htmlFor={`selectCandidate`}>
            <div>{`候補1 (重複：${0}分) (休憩時間：${Math.floor(
              individualRestTime / 60
            )}時間${individualRestTime % 60}分)`}</div>
            <div className='selectCandidate'>
              <input
                type='radio'
                id={`selectCandidate`}
                name='selectCandidate'
                className='radioSelectCandidate'
                value={JSON.stringify(breakTimePairs)}
                onChange={(e) => setSelectedPair(JSON.parse(e.target.value))}
              />
              1st: {firstStart}~{secondStart}
              <br />
              2nd: {secondStart}~{thirdStart}
              <br />
              3rd: {thirdStart}~{thirdFinish}
            </div>
          </label>
        </div>
      </>
    );
  };

  const candidateRestTime = calculateRestTime(startTime, individualRestTime);

  return (
    <>
      {/* {startTimeValue}
      {finishTimeValue} */}

      {/* {startTime}
      <br />
      {finishTime} */}
      {/* <br />
      {`3人合計の休憩時間は${totalRestTime_minute}分です`}
      <br />
      {`1人あたりの休憩時間は${individualRestTime}分です`}
      <br /> */}
      {candidateRestTime}
      <button
        className='suggestTimeButton'
        type='button'
        onClick={() => setBreakTimePairs(selectedPair)}
        disabled={selectedPair.length === 0}
      >
        ⬇️⬇️ 休憩順番の抽選！⬇️⬇️
      </button>
    </>
  );
};

export default DuplicationOff;
