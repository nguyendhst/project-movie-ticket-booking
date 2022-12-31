import React,{useState} from "react";
import Select from "react-select";
import { Button } from "react-bootstrap";
import { saveAs } from "file-saver";
var XLSX=require("xlsx");

const file_extensions = [
    {value:'.xlsx',label:'.xlsx'},
    {value:'.csv',label:'.csv'}
];
const ExportReport= (props)=>{
    const {activity_data,name} =props;
    const [file_ext,setExt]=useState('');
    const export_file=(options)=>{
        var wb=XLSX.utils.book_new();
        var ws=XLSX.utils.json_to_sheet(activity_data);
        if(options===".xlsx"){ 
            XLSX.utils.book_append_sheet(wb,ws,name);
            XLSX.writeFile(wb,name+".xlsx");
        }
        else if(options===".csv"){
            var wc= XLSX.utils.sheet_to_csv(ws);
            var blob=new Blob([wc],{type:'type/csv;charset=utf-8'});
            saveAs(blob,name+".csv");
        }
    }
    return(
        <div>
            <div id='m-select-ext'>
            Chọn định dạng file để tải về:
            <Select options={file_extensions} onChange={(options)=>setExt(options.value)}/>
            </div>
            <div className="m-extension">         
                <Button variant="primary me-3 mt-5" onClick={()=>export_file(file_ext)}> Xuất báo cáo</Button>
            </div>
        </div>
    )
}
export default ExportReport;
