import React, { useState } from "react";
import { useForm } from "react-hook-form";


function ModalForm() {
    const { register, handleSubmit, watch, reset } = useForm();
    const [fastaContent, setFastaContent] = useState(""); // 儲存 fasta 檔案內容
    const [selectedOption, setSelectedOption] = useState(""); // 儲存 radio 選項

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
            <div className='bg-white p-4'>
                <form onSubmit={handleSubmit(handleRecordData)}>
                    {/* Textarea 與檔案選擇組 */}
                    <div className="row border-bottom pb-5 my-3 border-2">
                        <div className="col-6">
                            <h3 className='text-primary fw-semibold mb-3'>Step1 <span className='text-black fw-normal h5'>You can paste a Protein sequence or several sequences with FASTA format into the field below</span></h3> 
                            <textarea
                                {...register("textarea")}
                                placeholder="請輸入內容..."
                                rows="12"
                                style={{ width: "100%", marginBottom: "10px" }}
                                className='form-control'
                            />
                        </div>
                        <div className="col-6">
                            <h3 className='text-primary fw-semibold mb-5'><span className='text-black fw-normal h5'>OR Upload FASTA sequence file</span></h3>
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
                                        style={{ display: "none" }} // 隱藏原本的 file 按鈕
                                    />
                                </div>
                            </div>
                            <p className='pt-2 text-black-50' style={{'fontSize':'14px'}} >Upload a plain text file containing protein sequence(s) in FASTA format.</p>
                        </div>
                        <div className="col-12 d-flex justify-content-end">
                            <button
                                type="button"
                                onClick={() => handleGenerateFasta(watch())}
                                disabled={!textareaValue} // 如果 textarea 無內容，按鈕禁用
                                style={{
                                    padding: "10px 20px",
                                    backgroundColor: textareaValue ? "#F38986" : "#ccc",
                                    cursor: textareaValue ? "pointer" : "not-allowed",
                                }}
                                className='btn text-white'
                            >
                                Get .fasta
                            </button>
                        </div>
                    </div>
                    <div className="row pb-5 my-3 ">
                        <div className="col-6">
                            <h3 className='text-primary fw-semibold'>Step2 <span className='text-black fw-normal h5'>Select type</span></h3>
                            {ModalOption.map((option, index) => (
                                <div className="form-check form-check-inline" key={index}>
                                    <label style={{ display: "block", marginBottom: "10px" }} className='form-check-label'>
                                        <input
                                            type="radio"
                                            value={option}
                                            {...register("radioOption", {
                                                required: true,
                                                onChange: (e) => setSelectedOption(e.target.value),
                                            })}
                                            className='form-check-input'
                                            name='modalType'
                                        />
                                        {option}
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="col-6">
                            <h3 className='text-primary fw-semibold'>Step3 <span className='text-black fw-normal h5'>Input your project name</span></h3> 
                            <input
                                type="text"
                                {...register("projectName", { required: false })}
                                placeholder="Untitled Project"
                                style={{ width: "100%", marginBottom: "10px" }}
                                className='form-control mb-5'
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