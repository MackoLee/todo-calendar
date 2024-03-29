import { selector } from 'recoil';
import dayjs from 'dayjs';
import { todoListAtom } from '@/recoil/atoms/todo-calendar-atom';

export const todoListByDateState = selector({
  key: 'todoListByDate',
  get: ({ get }) => {
    const todoList = get(todoListAtom);
    const result: any = {};

    todoList.forEach((todo) => {
      if (!todo.start_date || todo.start_date === '') {
        return result;
      }

      const key = dayjs(todo.start_date).format('YYYY-MM-DD');
      if (!Object.keys(result).includes(key)) {
        result[key] = [];
      }
      result[key].push(todo);
    });
    return result;
  },
});
