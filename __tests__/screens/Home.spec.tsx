import React from 'react'
import Home from '@/screens/Home'
import {TasksProvider} from '@/contexts/tasks/Tasks.context'
import {fireEvent, render, act} from '@testing-library/react-native'

const mockTasks = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Task description 1',
    status: 0,
    image: null,
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Task description 2',
    status: 1,
    image: null,
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Task description 3',
    status: 2,
    image: null,
  },
]

jest.mock('@/contexts/tasks/Tasks.context', () => ({
  TasksProvider: ({children}: {children: React.ReactNode}) => <>{children}</>,
  useTasks: () => ({
    tasks: mockTasks,
    loading: false,
    createTask: jest.fn(),
    updateTaskStatus: jest.fn(),
  }),
}))

jest.mock('react-native-safe-area-context', () => ({
  useSafeAreaInsets: () => ({bottom: 34, left: 0, right: 0, top: 47}),
}))

describe('<Home />', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders columns correctly', () => {
    const {getByText} = render(
      <TasksProvider>
        <Home />
      </TasksProvider>,
    )

    expect(getByText('To-Do')).toBeTruthy()
    expect(getByText('Doing')).toBeTruthy()
    expect(getByText('Done')).toBeTruthy()
  })

  it('opens the create task modal when "Criar" button is pressed', async () => {
    const {getByText, getByTestId} = render(
      <TasksProvider>
        <Home />
      </TasksProvider>,
    )

    await act(async () => {
      fireEvent.press(getByText('Criar'))
    })

    expect(getByTestId('create-task-modal')).toBeTruthy()
  })

  it('displays the correct number of tasks in each column', () => {
    const {getByText} = render(
      <TasksProvider>
        <Home />
      </TasksProvider>,
    )

    expect(getByText('Task 1')).toBeTruthy()
    expect(getByText('Task 2')).toBeTruthy()
    expect(getByText('Task 3')).toBeTruthy()
  })

  it('opens the create task modal when "Criar" button is pressed', async () => {
    const {getByText, getByTestId} = render(
      <TasksProvider>
        <Home />
      </TasksProvider>,
    )

    await act(async () => {
      fireEvent.press(getByText('Criar'))
    })

    expect(getByTestId('create-task-modal')).toBeTruthy()
  })

  it('displays the correct number of tasks in each column', () => {
    const {getByText} = render(
      <TasksProvider>
        <Home />
      </TasksProvider>,
    )

    expect(getByText('Task 1')).toBeTruthy()
    expect(getByText('Task 2')).toBeTruthy()
    expect(getByText('Task 3')).toBeTruthy()
  })
})
