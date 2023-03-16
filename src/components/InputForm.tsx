import React from 'react'
import styled from 'styled-components';
import date from "date-and-time"

interface todoTask {
  task: string;
  deadline: string;
  priority: string;
  complete: Boolean;
}


type Props = {
  todoList: todoTask,
  setTodoList: Function,
  recordTask: React.MouseEventHandler<HTMLButtonElement>
  clearObject: React.MouseEventHandler<HTMLButtonElement>
}

const Container = styled.div`
    max-width: 900px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    Align-items: center;
    margin: 1rem auto;
    border: 2px solid; 
    border-radius: 15px;
    padding: 1rem;
  `
const InputForm = styled.form.attrs({
  id:"form",
  name: "Input Form"
})`
    display: flex;
    flex-direction: column;
    width: 100%
  `
const InputButton = styled.button`
    padding: 0.5rem 2rem;
    margin: 1rem 2rem;
    font-size: 14px;
    border-radius: 10px;
  `
const H2 = styled.h2`
    margin: 0.25rem 1rem 1rem;
    text-shadow: 3px 3px 1px #0f0f0f;
  `
const InputDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.25rem 1rem;
  `
const TextInput = styled.input.attrs({
    type: 'text',
    id: 'textInput',
    key: "task",
    name: "task",
    placeholder: "Add Task here",
})`
    width: 80%;
    height: 30px;`

const DateInput = styled.input.attrs({
    type: "date",
    id: "deadlineDate",
    name: "deadline",
    key: "deadline",
})`
     width: 80%;
    height: 30px;`
const PriorityInput = styled.select.attrs({
    type: "select",
    id: "taskPriority",
    name: "priority",
    key: "priority"
})`
     width: 80%;
    height: 30px;
  `
const Form = (props: Props) => {
  const { todoList, setTodoList, recordTask, clearObject } = props
  // const getDate: Date = new Date()
  // const today: string = date.format(getDate, "MM/DD/YYYY")
  const setTask = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>): void => {
    event.preventDefault()
    setTodoList({
      ...todoList, [event.target.name]: event.target.value
    })
  }

  return (
    <Container id="mainContainer">
      <InputForm >
        <H2>
          Add Task:
        </H2>
        <InputDiv>
          <label htmlFor='taskInput'> Task: </label>
          <TextInput
            value={todoList.task}
            onChange={setTask}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor='deadlineDate'> Deadline:  </label>
          <DateInput
            value={todoList.deadline}
            onChange={setTask}
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor='priority'> Priority:  </label>
          <PriorityInput
            onChange={setTask}
            value={todoList.priority}
          >    
            <option defaultChecked>Select Priority</option>
            <option value="high"> High </option>
            <option value="medium"> Medium </option>
            <option value="low">Low</option>
          </PriorityInput>
        </InputDiv>
      </InputForm>
      <div>
        <InputButton id="createTask" type="submit" onClick={recordTask}>Create Task</InputButton>
        <InputButton type="button" onClick={clearObject}>Cancel</InputButton>
      </div>
    </Container>
  )
}

export default Form