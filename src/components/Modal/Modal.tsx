import React, { Dispatch, SetStateAction, useState } from 'react'
import { incrementNumber } from '../../store/slice/CouterSlice'
import { IMAGE } from '../../Assets/icons'
import '../../styles/Modal.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'

type IModal ={
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
};


const {MODALEXIT} = IMAGE

  const Modal = ({active,setActive}:IModal) => {

  const [telefon, setNumber]=useState('')
  const [check, setCheck]=useState(false)

  const num = useSelector((state: RootState)=>state.user.user)
  const dispatch = useDispatch()

  const  add = () => {
    if(telefon.length < 9 || telefon.length > 9)
    {setCheck(true)}
    else{
      setCheck(!check)
    dispatch(incrementNumber(telefon))
    setNumber('')
    }
    
  }
console.log(telefon.length)

console.log(num)
  return (
    <div className={active && num.length <1? ' modal ModalActive' : 'modal'} onClick={()=>setActive(false)} >
       <div className='modal__content' onClick={e=>e.stopPropagation()} >
        <div className='modal_paga' >
          <div className='Exittt' onClick={()=>setNumber('')} >
            <img onClick={()=>setActive(false)} className='Modale_Exit' src={MODALEXIT} />
          </div>
        <h1 className='modalExit' >ВХОД / РЕГИСТРАЦИЯ</h1>
          <hr></hr>
          <div className='Phone' >
            <p>Номер телефона</p>
            </div>
            <div className='divi' onClick={()=>setCheck(false)}  >
              <div className='tet' >
                <div className='phoneCod' >+375</div>
                    <input className='input' 
                    onKeyDown={(e)=>{
                      if(e.keyCode === 13){
                        add()
                      }
                    }}
                    type='number'
                    value={telefon}
                    onChange={(e)=>{
                      setNumber(e.target.value)
                    }}
                    placeholder='(29) 1234567'
                    />
                </div>
        {check === true ?
        <span>Не корректный номер</span>
        :
        <div/>
        }
        </div>
        <div className='config'>
            <button className='configButton' onClick={add}>ПРОДОЛЖИТЬ</button>
            </div>
      </div>  
       </div>
        </div>
  )
}

export default Modal