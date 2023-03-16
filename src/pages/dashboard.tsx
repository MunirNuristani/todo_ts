import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { RiDeleteBin6Line, RiEdit2Line } from 'react-icons/ri'
import Form from '../components/InputForm';


const Table = styled.table`
    width: 900px;
    text-align: center;
    margin: auto;
  `
const TableInput = styled.input.attrs({
  type: "checkbox"
})``
const TableHeader = styled.thead`
  `
const TableHead = styled.th`
  `
const TableBody = styled.tbody`
  `
const TableRow = styled.tr`
  `
const TableData = styled.td`
  `

function Dashboard() {
  interface todoTask {
    task: string;
    deadline: string;
    priority: string;
    complete: Boolean
  }
  const [todoList, setTodoList] = useState<todoTask>({
    task: "",
    deadline: "",
    priority: "",
    complete: false,
  })

  const [allTodoList, setAllTodoList] = useState<todoTask[]>([])

  const recordTask = () => {
    setAllTodoList([...allTodoList, todoList])
    clearObject()
    alert("created")
  }

  const clearObject = () => {
    setTodoList({
      task: "",
      deadline: "",
      priority: "",
      complete: false,
    })
  }

  const deleteTask = (task:any):any => {
    const filtered:any = allTodoList.filter(el=> el!==task)
    setAllTodoList(filtered) 
  }

  return (
    <>
      <Form todoList={todoList} setTodoList={setTodoList} recordTask={recordTask} clearObject={clearObject} />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>

            </TableHead>
            <TableHead>
              Task
            </TableHead>
            <TableHead>
              Deadline
            </TableHead>
            <TableHead>
              Priority
            </TableHead>
            <TableHead>

            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allTodoList?.map((el, index) => (
            <TableRow key={index}>
              <TableData><TableInput /></TableData>
              <TableData style={{ width: "60%", textAlign: "left", paddingLeft: "1rem" }}>{el.task}</TableData>
              <TableData>{el.deadline}</TableData>
              <TableData>{el.priority}</TableData>
              {/* <TableData><RiEdit2Line /></TableData> */}
              <TableData><RiDeleteBin6Line onClick={deleteTask(el)}/></TableData>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default Dashboard