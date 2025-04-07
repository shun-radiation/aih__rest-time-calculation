const StartTimeSelect = ({ startTimeValue, setStartTimeValue }) => {
  // 時間を "HH:MM" 形式に変換する関数
  const formatTime = (hour, minute) =>
    `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  const generateStartTime = () => {
    const startTimeList = [];
    for (let hour = 21; hour < 25; hour++) {
      for (let minute = 0; minute < 60; minute += 10) {
        startTimeList.push(formatTime(hour, minute));
      }
    }
    startTimeList.push(formatTime(25, 0));
    return startTimeList;
  };

  const startOptions = generateStartTime();

  const handleStart = (e) => {
    setStartTimeValue(e.target.value);
  };

  return (
    <>
      <div className='start'>
        <label htmlFor='startList'>開始時間：</label>
        <select
          name='startList'
          id='startList'
          className='startList'
          onChange={handleStart}
          value={startTimeValue}
          required
        >
          {startOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default StartTimeSelect;
