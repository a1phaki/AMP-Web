




export default function Download(){

    const firstStageData = [
        {
          "name": "Train set",
          "info": "The train set of the first stage in CSV format.",
        },
        {
          "name": "Test set",
          "info": "The test set of the first stage in CSV format."
        }
    ];

    const secondStageData = [
    {
        "name": "E. coli",
        "info": "The Dataset of E. coli of the second stage in CSV format."
    },
    {
        "name": "S. aureus",
        "info": "The Dataset of S. aureus of the second stage in CSV format."
    },
    {
        "name": "P. aeruginosa",
        "info": "The Dataset of P. aeruginosa of the second stage in CSV format."
    },
    {
        "name": "A. baumannii",
        "info": "The Dataset of A. baumannii of the second stage in CSV format."
    },
    {
        "name": "B. subtilis",
        "info": "The Dataset of B. subtilis of the second stage in CSV format."
    },
    {
        "name": "S. epidermidis",
        "info": "The Dataset of S. epidermidis of the second stage in CSV format."
    },
    {
        "name": "M. luteus",
        "info": "The Dataset of M. luteus of the second stage in CSV format."
    },
    {
        "name": "K. pneumoniae",
        "info": "The Dataset of K. pneumoniae of the second stage in CSV format."
    },
    {
        "name": "E. faecalis",
        "info": "The Dataset of E. faecalis of the second stage in CSV format."
    },
    {
        "name": "S. typhimurium",
        "info": "The Dataset of S. typhimurium of the second stage in CSV format."
    }
    ];

    const thirdStageData = [
    {
        "name": "E. coli",
        "info": "The Dataset of E. coli of the third stage in CSV format."
    },
    {
        "name": "S. aureus",
        "info": "The Dataset of S. aureus of the third stage in CSV format."
    },
    {
        "name": "P. aeruginosa",
        "info": "The Dataset of P. aeruginosa of the third stage in CSV format."
    },
    {
        "name": "A. baumannii",
        "info": "The Dataset of A. baumannii of the third stage in CSV format."
    },
    {
        "name": "B. subtilis",
        "info": "The Dataset of B. subtilis of the third stage in CSV format."
    },
    {
        "name": "S. epidermidis",
        "info": "The Dataset of S. epidermidis (incomplete entry)."
    }
    ];
      
      

    return <div className='container py-5 bg-success'>
        <div className='pt-3  pb-2 custom-border-top bg-secondary' >
            <h2 className='ps-5 h5 fw-medium'>Performance</h2>
        </div>
        <div className="px-5 py-4 bg-white custom-border-bottom flex-grow-1">
            <p>Datasets of the <span className="text-primary">first</span> stage</p>
            <div className='bg-white py-3'>
                    <div className="table-container">
                        <table className="custom-table-secondary table-hover table table-striped">
                            <thead className="bg-info">
                                <tr>
                                    <th scope="col" width='20%' className="pe-0 fw-normal">Name 
                                        <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                    </th>
                                    <th scope="col" width='50%' className="pe-0 fw-normal">Info
                                        <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                    </th>
                                    <th scope="col" width='20%' className="pe-0 fw-normal">File Format
                                        <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                    </th>
                                    <th scope="col" width='10%' className="pe-0 fw-normal">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {firstStageData.map((row, index) => (
                                    <tr key={index}>
                                        <td>{row.name}</td>
                                        <td>{row.info}</td>
                                        <td>CSV</td>
                                        <td><a className="btn"><img src="img/downloads.png" alt="" className="object-fit-cover "  width={15} /></a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
            <p>Datasets of the <span className="text-primary">second</span> stage</p>
            <div className='bg-white py-3'>
                <div className="table-container">
                    <table className="custom-table-secondary table-hover table table-striped">
                        <thead className="bg-info">
                            <tr>
                                <th scope="col" width='20%' className="pe-0 fw-normal">Name 
                                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                </th>
                                <th scope="col" width='50%' className="pe-0 fw-normal">Info
                                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                </th>
                                <th scope="col" width='20%' className="pe-0 fw-normal">File Format
                                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                </th>
                                <th scope="col" width='10%' className="pe-0 fw-normal">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {secondStageData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>The Dataset of{" "}
                                        <span className="text-primary">{row.name}</span>{" "}
                                        of the second stage in CSV format.
                                    </td>
                                    <td>CSV</td>
                                    <td><a className="btn"><img src="img/downloads.png" alt="" className="object-fit-cover "  width={15} /></a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <p>Datasets of the <span className="text-primary">thrid</span> stage</p>
            <div className='bg-white py-3'>
                <div className="table-container">
                    <table className="custom-table-secondary table-hover table table-striped">
                        <thead className="bg-info">
                            <tr>
                                <th scope="col" width='20%' className="pe-0 fw-normal">Name 
                                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                </th>
                                <th scope="col" width='50%' className="pe-0 fw-normal">Info
                                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                </th>
                                <th scope="col" width='20%' className="pe-0 fw-normal">File Format
                                    <span className=" float-end text-success fw-lighter opacity-25 ">|</span>
                                </th>
                                <th scope="col" width='10%' className="pe-0 fw-normal">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {thirdStageData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>The Dataset of{" "}
                                        <span className="text-primary">{row.name}</span>{" "}
                                        of the third stage in CSV format.
                                    </td>
                                    <td>CSV</td>
                                    <td><a className="btn"><img src="img/downloads.png" alt="" className="object-fit-cover "  width={15} /></a></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
}