const FinishTimeSelect = ({ finishTimeValue, setFinishTimeValue }) => {
  // 時間を "HH:MM" 形式に変換する関数
  const formatTime = (hour, minute) =>
    `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  const generateFinishTime = () => {
    const finishTimeList = [];
    for (let hour = 7; hour <= 7; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        finishTimeList.push(formatTime(hour, minute));
      }
    }
    finishTimeList.push(
      formatTime(8, 0),
      formatTime(8, 10),
      formatTime(8, 20),
      formatTime(8, 30)
    );
    return finishTimeList;
  };

  const finishOptions = generateFinishTime();

  const handleFinish = (e) => {
    setFinishTimeValue(e.target.value);
  };

  return (
    <>
      <div className='finish'>
        <label htmlFor='finishList'>終了時間：</label>
        <select
          name='finishList'
          id='finishList'
          className='finishList'
          onChange={handleFinish}
          value={finishTimeValue}
          required
        >
          {finishOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FinishTimeSelect;
