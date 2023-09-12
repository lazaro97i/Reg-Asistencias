import React from 'react'

const RegLicence = () => {
  return (
    <div className='w-full h-screen div-contain flex flex-col items-center content-center justify-center px-6'>
      <p className='mb-10 text-3xl'>Registro de lincencia</p>
      <form action="post" className='w-full max-w-[600px] grid grid-cols-1 gap-10 border rounded-lg py-10'>
        <label htmlFor="">
          <input type="text" name="camp1" id="camp1" placeholder='Campo 1' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label htmlFor="">
          <input type="text" name="camp2" id="camp2" placeholder='Campo 2' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' />
        </label>
        <label htmlFor="" className='flex flex-col gap-4'>
          <span className='text-start w-4/5 max-w-[270px] md:max-w-[350px]'>Tipo de licencia:</span>
          <select name="select" id="select" className='outline-none bg-transparent border-b w-4/5 max-w-[270px] md:max-w-[350px]'>
            <option value="option 1">opcion 1</option>
            <option value="option 2">opcion 2</option>
            <option value="option 3">opcion 3</option>
            <option value="option 4">opcion 4</option>
          </select>
        </label>
        <label htmlFor="">
          {/* <input type="tex" name="camp4" id="camp4" placeholder='Campo 4' className='outline-none border-b pl-1 w-4/5 max-w-[270px] md:max-w-[350px]' /> */}
          <textarea name="textarea" id="textarea" placeholder='Observaciones' className='bg-white bg-opacity-20 resize-none w-4/5 max-w-[270px] md:max-w-[350px] h-[150px] pl-1 rounded-sm'></textarea>
        </label>
      </form>
      <input className="mt-10 text-xl cursor-pointer border border-[#79b0ff] px-6 py-2 rounded-md text-[#79b0ff] hover:bg-[#101a50] hover:text-[#f0f1ef] transition-all duration-300" type="button" value="Registrar" />
    </div>
  )
}

export default RegLicence