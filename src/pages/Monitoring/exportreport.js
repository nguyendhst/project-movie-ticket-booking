import React from "react";
import Select from "react-select";

const file_extensions = [
    {value:'.xlsx',label:'.xlsx'},
    {value:'.pdf',label:'.pdf'},
    {value:'.doccx',label:'.docx'}
];
const ExportReport= ()=>{
    return(
        <div>
            <div className="preview">

            </div>
            <div className="extension">
                <Select options={file_extensions}/>
            </div>
        </div>
    )
}
export default ExportReport;
