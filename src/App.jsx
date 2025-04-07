import { useState } from 'react';
import './App.css';
import Member from './components/setupMember/Member';
import StartTimeSelect from './components/setupTime/StartTimeSelect';
import FinishTimeSelect from './components/setupTime/FinishTimeSelect';
import DuplicateTimeSelect from './components/setupTime/DuplicateTimeSelect';
import DuplicationOn from './components/suggestTime/DuplicationOn';
import DuplicationOff from './components/suggestTime/DuplicationOff';
import DisplayResult from './components/outputResult/DisplayResult';

function App() {
  const [radiographerA, setRadiographerA] = useState('aaa');
  const [radiographerB, setRadiographerB] = useState('bbb');
  const [radiographerC, setRadiographerC] = useState('ccc');
  const [startTimeValue, setStartTimeValue] = useState('21:00');
  const [finishTimeValue, setFinishTimeValue] = useState('07:00');
  const [duplicationState, setDuplicationState] = useState(true);
  const [breakTimePairs, setBreakTimePairs] = useState([]);

  return (
    <div className='App'>
      {/* {radiographerA}
      {radiographerB}
      {radiographerC}
      {startTimeValue}
      {finishTimeValue}
      {duplicationState ? 'on' : 'off'} */}
      <div className='upper'>
        <div className='setupMember'>
          <Member
            radiographerA={radiographerA}
            radiographerB={radiographerB}
            radiographerC={radiographerC}
            setRadiographerA={setRadiographerA}
            setRadiographerB={setRadiographerB}
            setRadiographerC={setRadiographerC}
          />
        </div>
        <div className='setupTime'>
          <StartTimeSelect
            startTimeValue={startTimeValue}
            setStartTimeValue={setStartTimeValue}
          />
          {/* {startTimeValue} */}
          <FinishTimeSelect
            finishTimeValue={finishTimeValue}
            setFinishTimeValue={setFinishTimeValue}
          />
          {/* {finishTimeValue} */}
          <DuplicateTimeSelect
            duplicationState={duplicationState}
            setDuplicationState={setDuplicationState}
          />
        </div>
      </div>
      <div className='lower'>
        <div className='suggestTime'>
          {duplicationState ? (
            <DuplicationOn
              startTimeValue={startTimeValue}
              finishTimeValue={finishTimeValue}
              setBreakTimePairs={setBreakTimePairs}
            />
          ) : (
            <DuplicationOff
              startTimeValue={startTimeValue}
              finishTimeValue={finishTimeValue}
              setBreakTimePairs={setBreakTimePairs}
            />
          )}
        </div>
        <div className='outputResult'>
          {breakTimePairs.length === 0 ? (
            <></>
          ) : (
            <DisplayResult
              radiographerA={radiographerA}
              radiographerB={radiographerB}
              radiographerC={radiographerC}
              breakTimePairs={breakTimePairs}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
