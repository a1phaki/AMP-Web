import React, { useState } from "react";
import { useForm } from "react-hook-form";


function ModalForm() {
    const { register, handleSubmit, watch, reset,setValue } = useForm();
    const [fastaContent, setFastaContent] = useState(""); // 儲存 fasta 檔案內容
    const [selectedOption, setSelectedOption] = useState(""); // 儲存 radio 選項

    const [fileContent, setFileContent] = useState(""); // 用于存储文件内容

    const handleFileChange = (event) => {
      const file = event.target.files[0]; // 获取上传的文件
  
      if (file) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
            console.log(e);
          setFileContent(e.target.result); // 将文件内容存储到状态中
          setValue("textarea", e.target.result); 
        };
  
        reader.readAsText(file); // 以文本格式读取文件内容
      }
    };

    // 監聽 textarea 的輸入
    const textareaValue = watch("textarea", "");
    // 生成 .fasta 檔案
    const handleGenerateFasta = () => {
        if (!textareaValue) {
        alert("請先輸入內容！");
        return;
        }

        const blob = new Blob([textareaValue], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "output.fasta";
        link.click();

        setFastaContent(textareaValue); // 儲存內容
    };

    const ModalOption =[
        'E. coli',
        'S. aureus',
        'P. aerugionsa',
    ]

    const tableData = [
        {
            id:'DBAASP_17697',
            sequence:'WRKWRKWRK',
            target:'E.coli',
            activity:0.9103199341229964,
        },
        {
            id:'DBAASP_14420',
            sequence:'KILPGVCKKIMRPFLRRISKDILTGKK',
            target:'E.coli',
            activity:0.7524759784904157,
        },
        {
            id:'DBAASP_2424',
            sequence:'GIFNVFKGALKTAGKHVAGSLLNQLKCKVSGEC',
            target:'E.coli',
            activity:1.1181126138837496,
        },
        {
            id:'DBAASP_17661',
            sequence:'GLLKRWKTLL',
            target:'E.coli',
            activity:1.3455250424357494,
        },
        {
            id:'DBAASP_1618',
            sequence:"GFFDRIKALTKNVTLELLNTITGKLGVTGG",
            target:'E.coli',
            activity:1.3292315355164965,
        }
    ];

    const handelOption = (e)=>{
        setSelectedOption(e.target.value)
    }

    // 記錄資料
    const handleRecordData = (data) => {
        if (!selectedOption) {
        alert("請選擇一個選項！");
        return;
        }

        console.log("記錄的資料：", { fastaContent, selectedOption });
        alert(`資料已記錄！\nFASTA內容：\n${fastaContent}\n選擇：${selectedOption}`);
    };

  return (
    <>
        <div className='container py-5 bg-success'>
            <div className='pt-3   pb-2 custom-border-top bg-secondary' >
                <h2 className=' ps-3 fs-bold '>USE ANIA</h2>
            </div>
            <div className='bg-white px-4 pt-1 pb-4'>
                <form onSubmit={handleSubmit(handleRecordData)}>
                    {/* Textarea 與檔案選擇組 */}
                    <div className="row border-bottom pb-3 my-3 border-2">
                        <div className="col-6">
                            <div className="d-flex">
                                <h4 className='text-primary fw-semibold mb-3 me-3'>Step1</h4>
                                <h5 className="text-black fw-normal pt-1">You can paste a Protein sequence or several sequences with FASTA format into the field below</h5>
                            </div>
                            <textarea
                                {...register("textarea")}
                                placeholder={`# Enter your sequences in FASTA format:
>DBAASP_5613
AAAAAAAAAAGIGKFLHSAKKFGKAFVGEIMNS
>DBAASP_11942
AAAARRRR
>DBAASP_13251
AAARLRLLLYLITRR`}
                                rows="12"
                                style={{ width: "100%", marginBottom: "10px" }}
                                className='form-control'
                            />
                        </div>
                        <div className="col-6">
                            <h5 className='text-primary fw-semibold mb-5'><span className='text-black fw-normal h5'>OR Upload FASTA sequence file</span></h5>
                            <div className="custom-file">
                                <h4 className='text-center pt-5'>Choose a file or drag & drop</h4>
                                <div className='d-flex justify-content-center pt-3'>
                                    <label htmlFor="fileInput" className="text-center h4 btn btn-outline-primary btn-lg">
                                        Choose a file 
                                    </label>
                                    <input
                                        id="fileInput"
                                        type="file"
                                        {...register("fileInput")}
                                        onChange={handleFileChange} // 添加文件上传的 onChange 事件
                                        style={{ display: "none" }} // 隱藏原本的 file 按鈕
                                        accept=".fasta" // 限制可上传的文件类型
                                    />
                                </div>
                            </div>
                            <p className='pt-2 text-black-50' style={{'fontSize':'14px'}} >Upload a plain text file containing protein sequence(s) in FASTA format.</p>
                        </div>
                    </div>
                    <div className="row pb-1 my-2 ">
                        <div className="col-6">
                            <div className="d-flex">
                                <h4 className='text-primary fw-semibold mb-3 me-3'>Step2</h4>
                                <h5 className="text-black fw-normal pt-1">Select type</h5>
                            </div>
                            <div className="row">
                                {ModalOption.map((option, index) => (
                                    <div className='col-4' key={index}>
                                        <div className={`custom-border custom-hover form-check border-1 py-2 border-primary border ${
                                            selectedOption === option ? 'bg-info ' : ''}`} >
                                            <label style={{ display: "block" }} className='form-check-label ms-2'>
                                                <input
                                                    type="radio"
                                                    value={option}
                                                    {...register("radioOption", {
                                                        required: true,
                                                    })}
                                                    className='form-check-input '
                                                    name='modalType'
                                                    onClick={handelOption}
                                                />
                                                {option}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex">
                                <h4 className='text-primary fw-semibold mb-3 me-3'>Step3</h4>
                                <h5 className="text-black fw-normal pt-1">Input your project name</h5>
                            </div>
                            <input
                                type="text"
                                {...register("projectName", { required: false })}
                                placeholder="Untitled Project"
                                style={{ width: "100%" }}
                                className='form-control py-2'
                            />
                        </div>
                    </div>
                </form>
            </div>
            <div className='p-3 d-flex justify-content-end custom-border-bottom' style={{ backgroundColor: '#F9FAFB' }}>
                <button type='button' className='btn btn-outline-primary btn-lg me-4'>
                    Clear fields
                </button>
                <button type="submit" className='btn btn-primary btn-lg text-white'>
                    Start ANIA
                </button>
            </div>
        </div>

        <div className='container py-5 bg-success'>
            <div className='pt-3   pb-2 custom-border-top bg-secondary' >
                <h2 className='ps-3 fs-bold '>RESULT TABLE</h2>
            </div>
            <div className='bg-white p-4'>
                <table className='table-secondary table table-striped'>
                    <thead>
                        <tr>
                            <th scope="col" width='15%'>ID</th>
                            <th scope="col" width='35%'>Sequence</th>
                            <th scope="col" width='15%'>Target</th>
                            <th scope="col" width='35%'>Activity (log MIC, unit: uM)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data,index)=>(
                            <tr key={index}>
                                <td scope="row">{data.id}</td>
                                <td>{data.sequence}</td>
                                <td>{data.target}</td>
                                <td>{data.activity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='p-3 d-flex justify-content-end custom-border-bottom' style={{ backgroundColor: '#F9FAFB' }}>
                <button type="submit" className='btn btn-primary btn-lg text-white'>
                    Export .csv
                </button>
            </div>
        </div>
    </>
    
  );
}



export default ModalForm