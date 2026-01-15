import React,{useState} from "react";

export default function StateFunc(){
    let[text,setText]=useState("Hello World")
    let[size,setSize]= React.useState(16)

    const onClickSetText=()=>{
        let t = prompt('กำหนดข้อความใหม่',text)
        if(t){
            setText(t)
        }
    }

    const onClickZoomin=()=>{
        let newSize = size + 1
        setSize(newSize)
    }

    let msgboxSyle={
        display: "inline-block",
        width: 350,
        fontSize: size,
        backgroundColor: "#ccc",
        padding: 5,
        textAlign: "center"
    }

    return(
        <div style={{textAlign:'center', marginTop:20}}>
            <div style={msgboxSyle}>{text}</div><br/>
            <button onClick={onClickSetText}>เปลี่ยนข้อความ</button>&nbsp;
            <button onClick={onClickZoomin}>เพิ่มขนาด</button>
            <button onClick={()=>setSize(size-1)}>ลดขนาด</button>
        </div>
    )
}