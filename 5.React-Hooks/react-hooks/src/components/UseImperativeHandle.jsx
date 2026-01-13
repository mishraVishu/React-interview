import { forwardRef, useRef } from 'react'
import { useImperativeHandle } from 'react';

const UseImperativeHandle = () => {
    const childRef = useRef(null);
  return (
    <div>
        <h2>UseImperativeHandle Hook</h2>
        <h4>Question 1 . How do you call function of child component from parent component?</h4>
        {
            <>
                <ChildComponent ref={childRef}/>
                <button onClick={() => {childRef?.current?.onFocus()}}>Focus on Input</button>
            </>
        }
    </div>
  )
}

const ChildComponent = forwardRef((props,ref) => {
    const inputRef = useRef(null);

    const onFocusHandle = () => {
        inputRef.current.focus();
    }

    useImperativeHandle(ref, () => {
        return {
            onFocus: onFocusHandle
        }
    })

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
})

export default UseImperativeHandle;