import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'cơ sở hạ tầng', label: 'Cơ sở hạ tầng' },
  { value: 'dịch vụ', label: 'Dịch vụ' },
  { value: 'nhân viên', label: 'Nhân viên' },
  { value: 'thanh toán', label: 'Thanh toán' }
]

const DropdownPL = () => (
  <Select
    className="react-select"
    placeholder="Phân loại"
    components={{
    IndicatorSeparator: () => null
    }}
    options={options} />
)

export default DropdownPL