import { from } from 'seamless-immutable';
export const initialState = from({
    tasks: [
        {
            id: '1',
            tags: ['1'],
            title: 'Play football',
            completed: false,
        },
        {
            id: '2',
            tags: ['1'],
            title: 'Play game',
            completed: false,
        },
        {
            id: '3',
            tags: ['2'],
            title: 'Working typescript',
            completed: false,
        },
        {
            id: '4',
            tags: ['2'],
            title: 'Working test for react',
            completed: false,
        },
        {
            id: '5',
            tags: ['2'],
            title: 'Handle styles',
            completed: false,
        },
    ],
    tags: {
        1: {
            id: '1',
            title: 'Home',
        },
        2: {
            id: '2',
            title: 'Work',
        },
    },
});
