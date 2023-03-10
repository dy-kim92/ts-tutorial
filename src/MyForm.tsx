import React, { useState } from "react";

type MyFormProps = {
    onSubmit : (form : { name : string; description : string }) => void;
}

function MyForm({ onSubmit } : MyFormProps) {
    const [form, setForm] = useState({
        name : '',
        description : ''
    });

    const { name, description } = form;

    //  어떤값이 들어올지 모를때는 any
    const onChange = (e : any) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name] : value
        });
    }

    const handleSubmit = (e : any) => {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name : '',
            description : ''
        }); //  form 초기화
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

export default MyForm;