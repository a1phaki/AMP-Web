import { useState } from 'react';
import { useForm } from 'react-hook-form';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import HoverIconButton from './HoverIconButton';
import Loading from './Loading';

function ModelForm() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [selectedOption, setSelectedOption] = useState(''); // 儲存選擇的 radio 按鈕選項
  const [fileData, setFileData] = useState({
    fileName: '',
    fileSize: '',
    fileContent: '',
  });

  const [isLoading, setIsLoading] = useState(false); // 用於顯示載入狀態
  const [isSelected, setIsSelected] = useState(false);
  const [, setTarget] = useState('');
  const [projectName, setProjectName] = useState(''); // 儲存專案名稱
  const [, setFileContent] = useState(''); // 用於存儲檔案內容
  const [, setApiResponse] = useState(null); // 儲存 API 回應結果
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  // FastAPI 伺服器地址
  const API_URL = "https://biomics.lab.nycu.edu.tw/api/upload-fasta";

  // 處理檔案上傳
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 取得上傳的檔案
    if (file) {
      console.log('File Name:', file.name);
      console.log('File Size:', file.size, 'bytes');
      const reader = new FileReader();

      reader.onload = (e) => {
        let content = e.target.result; // 取得檔案內容
        let lines = content.split('\n');

        if (lines.length > maxLines) {
          const message = `The uploaded file contains more than <strong>5000 AMP sequences</strong>.<br>Only the <strong>first 5000 sequences</strong> will be processed.`;

          // 自訂 alert 視窗樣式
          const customAlert = document.createElement('div');
          customAlert.style.position = 'fixed';
          customAlert.style.top = '30%';
          customAlert.style.left = '50%';
          customAlert.style.transform = 'translate(-50%, -50%)';
          customAlert.style.background = 'white';
          customAlert.style.padding = '20px';
          customAlert.style.border = '1px solid #ccc';
          customAlert.style.borderRadius = '10px';
          customAlert.style.boxShadow = '0 4px 10px rgba(0,0,0,0.1)';
          customAlert.style.zIndex = '9999';
          customAlert.style.fontFamily = 'Arial, sans-serif';
          customAlert.style.fontSize = '20px';
          customAlert.style.textAlign = 'center';
          customAlert.innerHTML = `
            <p style="margin: 0;">${message}</p>
            <button class="btn btn-primary btn-lg text-white mt-3" onclick="this.parentElement.remove()">OK</button>
          `;

          document.body.appendChild(customAlert);

          // 限制最多 5000 行
          content = lines.slice(0, maxLines).join('\n');
        } // 限制行數

        // 更新 fileContent 狀態
        setFileContent(content);

        // 更新 textarea 的值
        setValue('fastaData', content);

        // 更新檔案資訊
        setFileData({
          fileName: file.name,
          fileSize: file.size,
          fileContent: content, // 使用最新的檔案內容
        });
      };

      setIsSelected(true);
      reader.readAsText(file); // 以文字格式讀取檔案內容
    }
  };

  // 清空表單
  const clearFields = () => {
    setIsSelected(false);
    setSelectedOption('');
    setApiResponse(null);
    reset(); // 重置表單欄位
  };

  const ModalOption = ['E. coli', 'S. aureus', 'P. aeruginosa'];

  const handleOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const maxLines = 10000; // 設定最大允許的輸入行數

  const handleInput = (e) => {
    const textarea = e.target;
    const lines = textarea.value.split('\n');
    if (lines.length > maxLines) {
      // 限制超過最大行數的內容
      alert('你輸入資料超過最大行數');
      const limitedText = lines.slice(0, maxLines).join('\n');
      setValue('fastaData', limitedText); // 更新表單值
      textarea.value = limitedText; // 更新顯示內容
    }
  };

  const testDataInput = () => {
    fetch('downloads/EC/test.fasta')
      .then((res) => res.text())
      .then((text) => {
        setValue('fastaData', text);
        setValue('target', 'E. coli');
        setSelectedOption('E. coli');
        setTarget('E. coli');
        setProjectName('ANIA_Example');
        setValue('projectName', 'ANIA_Example');
      })
      .catch((err) => {
        console.error('錯誤:', err);
      });
  };

  // 發送 FASTA 到 FastAPI
  const handleFormSubmit = async (data) => {
    console.log('表單資料：', data);
    if (!data.fastaData) {
      alert('請輸入 FASTA 序列或上傳檔案');
      return;
    }

    // 產生隨機 ID 作為 FASTA 檔案名稱
    const fastaId = Math.random().toString(36).substr(2, 10);

    // 解析 `fastaData`，轉換成 API 需要的 JSON 格式
    const lines = data.fastaData.trim().split('\n');
    const fastaDataArray = [];

    for (let i = 0; i < lines.length; i += 2) {
      const id = lines[i].replace('>', '').trim();
      const sequence = lines[i + 1].trim();
      fastaDataArray.push({ id, sequence });
    }

    // 建立 API 需要的 JSON 物件
    const requestBody = {
      id: fastaId,
      data: fastaDataArray,
      target: data.target || '',
    };

    console.log('送出的資料格式：', requestBody);

    // 確保 UI 更新
    setTarget(data.target);
    setIsLoading(true); // 開始載入狀態
    setProgress(0);     // 初始化進度

    let simulatedProgress = 0;
    const progressTimer = setInterval(() => {
      simulatedProgress += Math.random() * 1.5 + 0.5; // 每次隨機增加 0.5~2%
      if (simulatedProgress < 90) {
        setProgress(Math.floor(simulatedProgress));
      } else {
        clearInterval(progressTimer); // 超過 90 停止模擬
      }
    }, 500); // 每 0.5 秒更新一次

    try {
      // 發送 POST 請求到遠端伺服器
      const response = await axios.post(API_URL, requestBody, {
        headers: { 'Content-Type': 'application/json' },
      });

      console.log('成功送出 FASTA 檔案：', response.data);
      setApiResponse(response.data.message);

      const PredictedData = response.data.result.map((item) => ({
        id: item.ID,
        sequence: item.Sequence,
        sequenceLength: item['Sequence Length'],
        target: item.Target,
        predictedLogMIC: item['Predicted Log MIC'],
      }));

      // 設定進度為 100%
      setProgress(100);
      clearInterval(progressTimer);

      setTimeout(() => {
        navigate(`/${fastaId}`, {
          state: { fastaId, PredictedData, projectName },
        });
      }, 1000); // 延遲 1 秒過渡
    } catch (error) {
      if (error.response) {
        console.error('API 錯誤狀態碼：', error.response.status);
        console.error('錯誤訊息內容：', error.response.data);
        setApiResponse(error.response.data?.detail || '上傳失敗，請確認格式是否正確。');
      } else {
        setApiResponse('後端連線失敗，請稍後重試。');
      }
      setApiResponse('上傳失敗，請重試！');
      clearInterval(progressTimer);  // 確保錯誤時也清除 interval
    } finally {
      setTimeout(() => {
        setIsLoading(false);         // 延遲隱藏載入動畫避免閃爍
        setProgress(0);              // 重設進度條
      }, 500);
    }
  };

  return (
    <>
      {isLoading && <Loading progress={progress} />}
      <div className="py-5">
        <div className="border border-3 border-secondary rounded-4 shadow-sm">
          <div className="pt-3 pb-2 px-3 bg-secondary rounded-top-3">
            <h2 className="ps-4 h4 fw-medium">USE ANIA</h2>
          </div>
          <div className="bg-white px-4 pt-1 pb-3 custom-border-bottom">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              {/* Textarea 與檔案選擇組 */}
              <div className="row border-bottom my-3 border-2">
                <div className="col-12 d-flex">
                  <h4 className="text-primary fw-semibold mb-3 me-3">Step1</h4>
                  <h5 className="text-black fw-normal pt-1">
                    You can paste a Protein sequence or several sequences with FASTA format into the
                    field below
                  </h5>
                </div>
                <div className="col-12 col-lg-6">
                  <textarea
                    {...register('fastaData', {
                      onChange: (e) => handleInput(e), // 將行數限制邏輯加入到 onChange
                    })}
                    placeholder={`# Enter your sequences in FASTA format:
>DBAASP_5613
AAAAAAAAAAGIGKFLHSAKKFGKAFVGEIMNS
>DBAASP_11942
AAAARRRR
>DBAASP_13251
AAARLRLLLYLITRR`}
                    rows="12"
                    style={{ width: '100%', marginBottom: '10px' }}
                    className="form-control"
                  />
                </div>
                <div className="row col-lg-6 col-12">
                  <div className="col-lg-1 col-12 d-flex align-items-center justify-content-center">
                    <h4>or</h4>
                  </div>
                  <div className="col-lg-11 col-12">
                    <div className="custom-file py-5">
                      <h4 className="text-center pb-4">Choose a file or drag & drop</h4>
                      <div className="d-flex justify-content-center ">
                        <label
                          htmlFor="fileInput"
                          className="text-center h4 btn btn-outline-primary btn-lg"
                        >
                          Choose a file
                        </label>
                        <input
                          id="fileInput"
                          type="file"
                          {...register('fileInput', { onChange: (e) => handleFileChange(e) })}
                          onChange={handleFileChange} // 添加文件上傳的 onChange 事件
                          style={{ display: 'none' }} // 隱藏原本的 file 按鈕
                          accept=".fasta" // 限制可上傳的文件類型
                        />
                      </div>
                    </div>
                    <div className="custom-select-file my-3 d-flex align-items-center ">
                      <div className="custom-border border-1 border-danger border ms-7">
                        <InsertDriveFileIcon className="m-3" sx={{ color: '#F38986' }} />
                      </div>
                      {isSelected ? (
                        <div className="ps-3 file-info">
                          <h4 className="mb-0 pt-3">{fileData.fileName}</h4>
                          <p className="">{`${fileData.fileSize} bytes`}</p>
                        </div>
                      ) : (
                        <div className="ps-3 file-info">
                          <h4 className="mb-0">No file selected</h4>
                        </div>
                      )}
                    </div>
                    <p className=" text-black-50" style={{ fontSize: '14px' }}>
                      Upload a plain text file containing protein sequence(s) in FASTA format.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row pb-1 my-2">
                <div className="col-12 col-lg-6 mb-3">
                  <div className="d-flex">
                    <h4 className="text-primary fw-semibold mb-3 me-3">Step2</h4>
                    <h5 className="text-black fw-normal pt-1">Select type</h5>
                  </div>
                  <div className="row g-3">
                    {ModalOption.map((option, index) => (
                      <div className="col-4" key={index}>
                        <div
                          className={`custom-border custom-hover form-check border-1 py-2 border-primary border ${
                            selectedOption === option ? 'bg-info ' : ''
                          }`}
                        >
                          <label
                            style={{ display: 'block', fontSize: '15px' }}
                            className="form-check-label ms-2"
                          >
                            <input
                              type="radio"
                              value={option}
                              {...register('target', {
                                required: true,
                                onChange: (e) => handleOption(e),
                              })}
                              className="form-check-input "
                              name="target"
                              checked={selectedOption === option} // 根據選擇的選項來設定
                            />
                            {option}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  <div className="d-flex">
                    <h4 className="text-primary fw-semibold mb-3 me-3">Step3</h4>
                    <h5 className="text-black fw-normal pt-1">Input your project name</h5>
                  </div>
                  <input
                    type="text"
                    {...register('projectName', { required: false })}
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="Untitled Project"
                    style={{ width: '100%' }}
                    className="form-control py-2"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="bg-light px-4 pt-0 pb-0 custom-border-bottom">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div className="row">
                <div className="col p-3 d-flex justify-content-end">
                  <HoverIconButton
                    label="Example"
                    defaultIcon="img/file_pink.png"
                    hoverIcon="img/file_white.png"
                    onClick={testDataInput}
                    className="btn btn-outline-primary btn-lg me-3"
                    iconStyle={{
                      marginLeft: '-5px',
                      marginRight: '8px',
                      transform: 'translateY(-1px)',
                    }}
                  />
                  <HoverIconButton
                    label="Clear"
                    defaultIcon="img/clear_pink.png"
                    hoverIcon="img/clear_white.png"
                    onClick={clearFields}
                    className="btn btn-outline-primary btn-lg me-3"
                    iconStyle={{
                      marginLeft: '-5px',
                      marginRight: '2px',
                      transform: 'translateY(-1.5px)',
                    }}
                  />
                  <HoverIconButton
                    label="Start ANIA"
                    defaultIcon="img/upload.png"
                    hoverIcon="img/upload.png"
                    onClick={handleSubmit(handleFormSubmit)}
                    className="btn btn-primary btn-lg text-white"
                    iconStyle={{
                      marginLeft: '-2px',
                      marginRight: '8px',
                      transform: 'translateY(-2.0px)',
                    }}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModelForm;
