// Task tests
const Task = require('../src/task');

describe('Task', () => {
    test('should create task with correct properties', () => {
        const task = new Task('Test', 'Description');
        expect(task.title).toBe('Test');
        expect(task.status).toBe('todo');
    });
});
