import { dateAtom } from '@/recoil/atoms/todo-calendar-atom';
import { useRecoilState } from 'recoil';
import React, { FC, useMemo } from 'react';
import moment from 'moment/moment';
import { Dustbin } from '@/components/dustbins/Dustbin';

export const MonthCalendar: FC = function MainMonthCalendar() {
  const [date] = useRecoilState(dateAtom);
  const year = date.year();
  const month = date.month() + 1;
  const day = date.date();

  const startDay = useMemo(() => {
    const startOfMonth = moment([year, month - 1, 1]);

    return startOfMonth.startOf('week');
  }, [year, month]);
  const endDay = useMemo(() => {
    const endOfMonth = moment([year, month - 1, 1]).endOf('month');

    return endOfMonth.endOf('week');
  }, [year, month]);

  const getTextColor = (currentDay: moment.Moment) => {
    const isSameMonth = (currentDay.month() === month - 1);

    if (currentDay.day() === 6) {
      return isSameMonth ? 'text-blue-400' : 'text-blue-400/50';
    }
    if (currentDay.day() === 0) {
      return isSameMonth ? 'text-red-400' : 'text-red-400/50';
    }
    return isSameMonth ? 'text-gray-700' : 'text-gray-700/50';
  };
  const getBackgroundColor = (currentDay: moment.Moment) => {
    if (currentDay.isSame(moment([year, month - 1, day]), 'day')) {
      return 'bg-red-100';
    }
    if (currentDay.isSame(moment(), 'day')) {
      return 'bg-gray-300';
    }
    return '';
  };

  return (
    <div className="flex flex-col divide-y divide-[#BEBEBE] border border-[#BEBEBE] w-full h-full bg-white rounded-xl drop-shadow-md text-center">
      <div className="flex divide-x divide-[#BEBEBE] font-bold">
        {Array.from({ length: 7 }).map((_, index2) => {
          const currentDay = moment(startDay).add(7 + index2, 'days');
          return (
            <div
              className="flex-1 relative py-[4px]"
              key={currentDay.toJSON()}
            >
              <span className={`inline-block ${getTextColor(currentDay)}`}>
                {currentDay.locale('ko').format('ddd')}
              </span>
            </div>
          );
        })}
      </div>
      {Array.from({ length: ((endDay.diff(startDay, 'days') + 1) / 7) }).map((nWeek, index1) => {
        const currentWeekDay = moment(startDay).add(7 * index1, 'days');
        return (
          <div
            className="flex grow divide-x divide-[#BEBEBE]"
            key={`week-${currentWeekDay.toJSON()}`}
          >
            {Array.from({ length: 7 }).map((__, index2) => {
              const currentDay = currentWeekDay.clone().add(index2, 'days');
              return (
                <Dustbin
                  name={currentDay.format('YYYY-MM-DD')}
                  key={currentDay.toJSON()}
                >
                  <div
                    className="flex-1 h-full relative py-2"
                  >
                    <span className={`text-center inline-block leading-6 w-6 rounded-full ${getTextColor(currentDay)} ${getBackgroundColor(currentDay)}`}>
                      {currentDay.format('D')}
                    </span>
                  </div>
                </Dustbin>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};