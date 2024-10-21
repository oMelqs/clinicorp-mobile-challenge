import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import {Tasks} from '@/components/Tasks/Tasks'
import {useTasks} from '@/contexts/tasks/Tasks.context'

jest.mock('@/contexts/tasks/Tasks.context')

describe('Tasks Component', () => {
  const mockUpdateTaskStatus = jest.fn()

  beforeEach(() => {
    ;(useTasks as jest.Mock).mockReturnValue({
      updateTaskStatus: mockUpdateTaskStatus,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders task with unchecked checkbox', () => {
    const task = {
      id: '1',
      title: 'Test Task',
      description: 'Test Description',
      status: 0,
    }
    const {getByTestId, getByText} = render(<Tasks task={task} />)

    expect(
      getByTestId(`checkbox-${task.title}`).props.accessibilityState.checked,
    ).toBe(false)
    expect(getByText(task.title)).toBeTruthy()
    expect(getByText(task.description)).toBeTruthy()
  })

  it('updates task status on checkbox press', async () => {
    const task = {
      id: '1',
      title: 'Test Task',
      description: 'Test Description',
      status: 0,
    }
    const {getByTestId} = render(<Tasks task={task} />)

    fireEvent.press(getByTestId(`checkbox-${task.title}`))

    await waitFor(() => {
      expect(mockUpdateTaskStatus).toHaveBeenCalledWith(
        task.id,
        task.status + 1,
      )
    })
  })

  it('renders task with line-through when status is 2', () => {
    const task = {
      id: '1',
      title: 'Completed Task',
      description: 'Completed Description',
      status: 2,
    }
    const {getByText} = render(<Tasks task={task} />)

    const title = getByText(task.title)
    const description = getByText(task.description)

    expect(title.props.style.flat()).toContainEqual(
      expect.objectContaining({textDecorationLine: 'line-through'}),
    )
    expect(description.props.style.flat()).toContainEqual(
      expect.objectContaining({textDecorationLine: 'line-through'}),
    )
  })

  it('renders task image if provided', () => {
    const task = {
      id: '1',
      title: 'Task with Image',
      description: 'Description',
      status: 0,
      image: 'http://example.com/image.jpg',
    }
    const {getByTestId} = render(<Tasks task={task} />)

    expect(getByTestId('image')).toBeTruthy()
  })
})
