import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import employeeActions from '../store/employees/actions'
import ModalDetailEmployee from './ModalDetailEmployee'

const { getEmployees } = employeeActions

const TableEmployees = () => {

  const [filterFile, setFilterFile] = useState('')
  const [filterName, setFilterName] = useState('')
  const [detail, setDetail] = useState(false)
  const [fileEmployee, setFileEmployee] = useState(null)
  const dispatch = useDispatch()
  const employeeStore = useSelector((store) => store.employee)

  let employee = employeeStore?.response?.filter(e => e.fileNumber === fileEmployee)
  console.log(fileEmployee)

  useEffect(() => {
    dispatch(getEmployees())
  }, [])

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form className='mb-5 w-full max-w-[700px] flex flex-col justify-center items-center relative'>
        <label className='flex items-center justify-center flex-wrap gap-x-4'>
          <span className='w-full text-start pl-[20%] '>Buscar legajo:</span>
          <input onInput={(e) => { setFilterFile(e.target.value) }} className='border rounded-sm mt-2 w-[150px] pl-2 py-1 outline-none' type="search" name="searchFile" id="searchFile" />
          <input type="text" className='hidden' />
          <span className='mt-2'>
            <svg className='pointer-events-none' width={'30px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#0f2942" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
          </span>
        </label>
        <label className='flex mt-10 self-start w-full gap-x-4'>
          <span className='w-[130px]'>Buscar nombre:</span>
          <input onInput={(e) => { setFilterName(e.target.value) }} className='border rounded-sm pl-2 py-1 outline-none w-[50%]' type="search" name="searchName" id="searchName" />
          <input type="text" className='hidden' />
        </label>
      </form>
      <table className='text-center w-full max-w-[700px] mb-20'>
        <thead className='border-b-2'>
          <tr className='grid grid-cols-3 gap-x-4 w-full py-1 px-2 bg-[#0f2942] rounded-t-md'>
            <th className='text-[#f1f8fe]'>Legajo</th>
            <th className='text-[#f1f8fe] text-center min-[600px]:text-start'>Nombre</th>
            <th colSpan={2} className='text-[#f1f8fe] '>Detalles</th>
          </tr>
        </thead>
        <tbody>
          {
            employeeStore?.response?.filter(f => f.fileNumber.toString().includes(filterFile)).filter(f => f.name.includes(filterName)).length > 0
              ? employeeStore?.response?.filter(f => f.fileNumber.toString().includes(filterFile)).filter(f => f.name.includes(filterName))
                .map((e, i) => {
                  return (
                    <tr key={i} className={`grid grid-cols-3 gap-x-6 w-full border-b py-2 hover:bg-[#e3effb]`}>
                      <td className=' flex items-center justify-center'>{e.fileNumber}</td>
                      <td onClick={() => { setDetail(true), setFileEmployee(e.fileNumber) }} className=' flex items-center justify-start font-[500] cursor-pointer'>{e.name.toUpperCase()}</td>
                      <td className=' flex items-center justify-center border-l'>
                        <span onClick={() => { setDetail(true), setFileEmployee(e.fileNumber) }} className='flex justify-center items-center cursor-pointer'>
                          <svg width={'30px'} fill="#0f2942" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M15 11h7v2h-7zm1 4h6v2h-6zm-2-8h8v2h-8zM4 19h10v-1c0-2.757-2.243-5-5-5H7c-2.757 0-5 2.243-5 5v1h2zm4-7c1.995 0 3.5-1.505 3.5-3.5S9.995 5 8 5 4.5 6.505 4.5 8.5 6.005 12 8 12z"></path></g></svg>
                        </span>
                      </td>
                    </tr>
                  )
                })
              : <tr><td className='text-red-600 py-10 font-[500]'>NO SE ENCONTRARON RESULTADOS</td></tr>
          }
        </tbody>
      </table>
      {
        detail
          ? <ModalDetailEmployee
            employee={employee}
            detail={setDetail}
          />
          : null
      }
    </div>
  )
}

export default TableEmployees