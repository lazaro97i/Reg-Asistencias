import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const LicensesModal = ({ handleModal }) => {

  const licenseStore = useSelector((store) => store.license)
  const [month, setMonth] = useState(9)
  const [year, setYear] = useState(2023)
  let [tl, setTl] = useState([])
  const months = [

    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ]
  const years = []
  let daysOfLicense = []
  let days = []

  const generateYears = () => {
    let year = 2010
    let actualYear = new Date().getFullYear()
    for (year; year <= actualYear + 1; year++) {
      years.push(year)
    }
  }
  generateYears()

  const generateMonths = () => {
    let d
    if (month && year) {
      d = new Date(year, month, 0).getDate()
    }
    for (let dia = 0; dia < d; dia++) {
      if (month && year) {
        let dias = new Date(year, month - 1, dia + 1)
        licenseStore?.licenses?.licenses?.forEach((l) => {
          if (dias.getFullYear() === parseInt(l.year) &&
            (dias.getMonth() + 1) === parseInt(l.month) &&
            dias.getDate() === parseInt(l.day)
          ) {
            daysOfLicense.push(
              {
                day: dias,
                type: l.typeLicense,
                obs: l.observation
              }
            )
          }
        })
        days.push(dias)
      }
    }
  }
  generateMonths()

  useEffect(() => {
    generateCalendar()
  }, [licenseStore.success, month, year])

  const generateCalendar = () => {
    const calendar = document.getElementById('divCalendar')
    let fragment = ''
    days.forEach(d => {
      if (d.getDate() == 1) {
        let rootElement = document.getElementById('root')
        let d1 = (d.getDay() + 1)
        rootElement.style.setProperty('--d1', d1)
        if (d.getDay() === 0 || d.getDay() === 6) {
          fragment += `<li id='${d.getDate()}' class='first_class p-[.2rem] rounded-sm text-center bg-[#cfcfcf] text-[#747577]'>${d.getDate()}</li>`
        } else {
          fragment += `<li id='${d.getDate()}' class='first_class p-[.2rem] rounded-sm text-center'>${d.getDate()}</li>`
        }
      } else {
        if (d.getDay() === 0 || d.getDay() === 6) {
          fragment += `<li id='${d.getDate()}' class='p-[.2rem] rounded-sm text-center bg-[#cfcfcf] text-[#747577]'>${d.getDate()}</li>`
        } else {
          fragment += `<li class='p-[.2rem] rounded-sm text-center' id='${d.getDate()}'>${d.getDate()}</li>`
        }

      }
    })
    if (calendar) {
      calendar.innerHTML = fragment
    }
    daysOfLicense.forEach((dl) => {
      let day = document.getElementById(`${dl.day.getDate()}`)
      const divType = document.getElementById('divTypeLicenses')

      switch (dl.type) {
        case 'injustificadas':
          day.classList.add("cursor-pointer", "bg-red-700", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-red-700 text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'injustificadas acumuladas':
          day.classList.add("cursor-pointer", "bg-[#b327bb]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#b327bb] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'tardanzas':
          day.classList.add("cursor-pointer", "bg-[#461d83]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#461d83] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'permanencia':
          day.classList.add("cursor-pointer", "bg-[#2e817d]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#2e817d] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'desc. jornada p/tardanza':
          day.classList.add("cursor-pointer", "bg-[#a48528]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#a48528] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'dcto. colacion':
          day.classList.add("cursor-pointer", "bg-[#143a30]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#143a30] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'just. c/pago de jornal':
          day.classList.add("cursor-pointer", "bg-[#568521]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#568521] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'total desc. de jornales':
          day.classList.add("cursor-pointer", "bg-[#713f12]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#713f12] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'desc. viat. "b" / serv. apoyo':
          day.classList.add("cursor-pointer", "bg-[#1c1917]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#1c1917] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'presentismo':
          day.classList.add("cursor-pointer", "bg-[#6ee7b7]", "text-[#11251d]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#6ee7b7] text-[#11251d] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'reintegro de jornales':
          day.classList.add("cursor-pointer", "bg-[#d17431]", "text-[#f1f8fe]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#d17431] text-[#f1f8fe] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
        case 'dias habiles':
          day.classList.add("cursor-pointer", "bg-[#f9a8d4]", "text-[#501c39]")
          day.addEventListener('click', () => {
            divType.innerHTML = `<p class='rounded-md bg-[#f9a8d4] text-[#501c39] px-3 text-md py-1'>${dl.type}</p>
            <p class='mt-2 text-xl font-[500] w-full text-start underline' >Observaciones:</p>
            <p class='text-justify' >${dl.obs}</p>
            `
          })
          break
      }
    })
  }

  return (
    <div className='w-full max-w-[600px] h-auto flex flex-col justify-center items-center rounded-sm py-5 px-3 mt-10'>
      {
        licenseStore?.licenses
          ? <>
            <p className='text-2xl font-[600] mb-5'>{(licenseStore.licenses.employee.name).toUpperCase()}</p>
            <div className='w-full max-h-[380px] flex flex-col items-center'>
              <form className='flex items-end justify-evenly w-full'>
                <label className='flex flex-col gap-3'>
                  <span>Ingresar mes:</span>
                  <select defaultValue={new Date().getMonth()}
                    onChange={(e) => { setMonth(parseInt(e.target.value) + 1) }} className='bg-transparent outline-none border rounded-sm px-1 py-1'>
                    {
                      months.map((m, i) => {
                        return (
                          <option key={m} value={i}>
                            {m}
                          </option>
                        )
                      })
                    }
                  </select>
                </label>
                <label className='flex flex-col gap-3'>
                  <span>Ingresar año:</span>
                  <select onChange={(e) => { setYear(parseInt(e.target.value)) }} defaultValue={new Date().getFullYear()} className='bg-transparent outline-none border rounded-sm px-1 py-1' name="sectionYear" id="sectionYear">
                    {
                      years.map((y, i) => {
                        return (
                          <option key={y} value={y}>
                            {y}
                          </option>
                        )
                      })
                    }
                  </select>
                </label>
              </form>
            </div>
            <div className='min-h-[335px] border rounded-sm my-5 px-3 pb-2 flex flex-col items-center justify-center'>
              <ol className='grid grid-cols-7 gap-4 w-full text-center border-b pb-2'>
                <li className='font-[600]'>D</li>
                <li className='font-[600]'>L</li>
                <li className='font-[600]'>M</li>
                <li className='font-[600]'>M</li>
                <li className='font-[600]'>J</li>
                <li className='font-[600]'>V</li>
                <li className='font-[600]'>S</li>
              </ol>
              <ol id='divCalendar' className='grid grid-flow-row grid-cols-7 gap-4 mt-2'>

              </ol>
            </div>
            <div id='divTypeLicenses' className='w-[400px] min-h-[250px] flex flex-col justify-start items-center flex-wrap gap-2 text-center'>

            </div>
          </>
          : null
      }
    </div >
  )
}

export default LicensesModal
