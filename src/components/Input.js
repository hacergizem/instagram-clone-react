import { useState, useEffect, useRef } from 'react';

export default function Input({ label, type = 'text', ...props }) {

    const [show, setShow] = useState(false);
    const [inputType, setInputType] = useState(type);

    const inputRef = useRef();

    useEffect(() => {
        if (show) {
            setInputType('text')
            inputRef.current.focus();
        }
        else if (type === 'password') {
            setInputType('password')
            inputRef.current.focus();
        }
    }, [show])

    return (
        <label className="block relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400">
            <input ref={inputRef} required={true} type={inputType} className=" px-2 w-full h-[38px] outline-none cursor-text text-xs pointer-events-none valid:pt-[10px] peer" {...props}></input>
            <small className="absolute text-xs text-gray-500 top-1/2 left-2 cursor-text -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">{label}</small>
            {type === 'password' && props?.value && (
                <button type="button" onClick={() => setShow(!show)} className="h-full px-2 bg-white flex items-center text-sm font-semibold">
                    {show ? 'Hide' : 'Show'}
                </button>
            )}
        </label>
    )
}