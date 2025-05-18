const todosDemo = [
    {
        id: 1,
        content: '健檢線上預約',
        due_date: '2025-05-01',
        state_id: 2
    },
    {
        id: 2,
        content: '報告日期截止，記得繳交。',
        due_date: '2025-05-30',
        state_id: 1
    },
    {
        id: 3,
        content: '演唱會開搶',
        due_date: '2025-04-01',
        state_id: 3
    }
];

const statusDemo = [
    {
        id: 1,
        name: '未完成',
        type: 'info'
    },
    {
        id: 2,
        name: '完成',
        type: 'success'
    },
    {
        id: 3,
        name: '逾時',
        type: 'danger'
    }
];

export {todosDemo, statusDemo};