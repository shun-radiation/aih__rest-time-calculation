import React, { useState } from 'react';

const DuplicationOn = ({
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

  // ここは<DuplicationOff>と差異あり
  const divideRestTime = (time) => {
    const totalRestTime_10minute = time / 10;
    let duplicationTime = [0, 0, 0];
    let individualRestTime = [0, 0, 0];
    if (totalRestTime_10minute % 3 === 0) {
      const duplicateOffTime = time / 3;
      duplicationTime = [30, 60, 90];
      individualRestTime = [
        duplicateOffTime + 20,
        duplicateOffTime + 40,
        duplicateOffTime + 60,
      ];
      return { duplicationTime, individualRestTime };
    } else if (totalRestTime_10minute % 3 === 1) {
      const duplicateOffTime = (time - 10) / 3;
      duplicationTime = [10, 40, 70];
      individualRestTime = [
        duplicateOffTime + 10,
        duplicateOffTime + 30,
        duplicateOffTime + 50,
      ];
      return { duplicationTime, individualRestTime };
    } else if (totalRestTime_10minute % 3 === 2) {
      const duplicateOffTime = (time - 20) / 3;
      duplicationTime = [20, 50, 80];
      individualRestTime = [
        duplicateOffTime + 20,
        duplicateOffTime + 40,
        duplicateOffTime + 60,
      ];
      return { duplicationTime, individualRestTime };
    } else {
      return { duplicationTime: [], individualRestTime: [] };
    }
  };

  const { duplicationTime, individualRestTime } =
    divideRestTime(totalRestTime_minute);

  // ここは<DuplicationOff>と差異あり
  const calculateRestTime = (
    startTime,
    duplicationTime,
    individualRestTime
  ) => {
    const candidateNumbers = [0, 1, 2];
    return candidateNumbers.map((candidateNumber) => {
      const firstStart = startTime.toTimeString().slice(0, 5);
      const firstFinish = new Date(
        startTime.getTime() + individualRestTime[candidateNumber] * 60 * 1000
      )
        .toTimeString()
        .slice(0, 5);

      const secondStart = new Date(
        startTime.getTime() +
          individualRestTime[candidateNumber] * 60 * 1000 -
          duplicationTime[candidateNumber] * 60 * 1000
      )
        .toTimeString()
        .slice(0, 5);
      const secondFinsh = new Date(
        startTime.getTime() +
          individualRestTime[candidateNumber] * 60 * 1000 * 2 -
          duplicationTime[candidateNumber] * 60 * 1000
      )
        .toTimeString()
        .slice(0, 5);
      const thirdStart = new Date(
        startTime.getTime() +
          individualRestTime[candidateNumber] * 60 * 1000 * 2 -
          duplicationTime[candidateNumber] * 60 * 1000 * 2
      )
        .toTimeString()
        .slice(0, 5);
      const thirdFinish = new Date(
        startTime.getTime() +
          individualRestTime[candidateNumber] * 60 * 1000 * 3 -
          duplicationTime[candidateNumber] * 60 * 1000 * 2
      )
        .toTimeString()
        .slice(0, 5);

      const breakTimePairs = [
        [firstStart, firstFinish],
        [secondStart, secondFinsh],
        [thirdStart, thirdFinish],
      ];
      return (
        <>
          <div key={candidateNumber} className='candidate'>
            <label htmlFor={`selectCandidate${candidateNumber}`}>
              <div>
                {`候補${candidateNumber + 1} (重複：${
                  duplicationTime[candidateNumber]
                }分) (休憩時間：${Math.floor(
                  individualRestTime[candidateNumber] / 60
                )}時間${individualRestTime[candidateNumber] % 60}分)`}
              </div>
              <div className='selectCandidate'>
                <input
                  type='radio'
                  id={`selectCandidate${candidateNumber}`}
                  name='selectCandidate'
                  className='radioSelectCandidate'
                  value={JSON.stringify(breakTimePairs)}
                  onChange={(e) => setSelectedPair(JSON.parse(e.target.value))}
                />
                <div>
                  1st: {firstStart}~{firstFinish}
                  <br />
                  2nd: {secondStart}~{secondFinsh}
                  <br />
                  3rd: {thirdStart}~{thirdFinish}
                </div>
              </div>
            </label>
          </div>
        </>
      );
    });
  };

  const candidateRestTime = calculateRestTime(
    startTime,
    duplicationTime,
    individualRestTime
  );

  return (
    <>
      {/* <br />
      {`候補1の、3人合計の休憩時間は${
        totalRestTime_minute + duplicationTime[0] * 2
      }分です`}
      <br />
      {`候補1の、1人あたりの休憩時間は${individualRestTime[0]}分です`}
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

      {/* {duplicationTime}
      <br />
      {individualRestTime} */}
    </>
  );
};

export default DuplicationOn;
