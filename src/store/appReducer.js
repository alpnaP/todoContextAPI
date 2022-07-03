
import { v4 as uuidv4 } from 'uuid';

const intialTask = [
    {
        id: 1,
        title: 'Backlog',
        cards: [
            { name: 'tasks 1', stage: 0, cid: uuidv4() },
            { name: 'tasks 2', stage: 0, cid: uuidv4() },
        ],
    },
    {
        id: 2,
        title: 'Todo',
        cards: [],
    },
    {
        id: 3,
        title: 'InProgress',
        cards: [],
    },
    {
        id: 4,
        title: 'Done',
        cards: [],
    },
];



export function todos(state = intialTask, action) {

    switch (action.type) {
        case 'ADD_TODO':
            return [...state.map((item) => {
                if (item.id === 1) {
                    item.cards.push(action.value)
                }
                return item
            })]
        case 'REMOVE_TODO':
            return [...state.map((item) => {
                if (item.id === action.value.id) {
                    var filtered = item.cards.filter(function (value) {
                        return value.cid !== action.value.cid;
                    });
                    item.cards = [...filtered]
                    return item
                } else {
                    return item
                }
            })]
        case 'MOVE_LEFT_TODO':
            return [...state.map((item) => {
                if (item.id === action.value.id && action.value.id > 1) {
                    var filtered = item.cards.filter(function (value) {
                        return value.cid !== action.value.cid.cid;
                    });
                    item.cards = [...filtered]
                    return item
                } else if (item.id === action.value.id - 1) {
                    item.cards.push(action.value.cid)
                }
                return item
            })]
        case 'MOVE_RIGHT_TODO':
            return [...state.map((item) => {
                if (item.id === action.value.id && action.value.id < 4) {
                    var filtered = item.cards.filter(function (value) {
                        return value.cid !== action.value.cid.cid;
                    });
                    item.cards = [...filtered]
                    return item
                } else if (item.id === action.value.id + 1) {
                    item.cards.push(action.value.cid)
                }
                return item
            })]
        default:
            return state
    }
}