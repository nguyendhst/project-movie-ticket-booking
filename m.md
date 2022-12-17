# Định nghĩa HTML
HTML, viết tắt là HyperText Markup Language, là một ngôn ngữ markup cho phép hiển thị dữ liệu trên các trình duyệt Web. Một tài liệu HTML là một tập tin văn bản với các thẻ đánh dấu (markup) tạo thành các HTML elements nhằm cho phép trình duyệt biết cách hiển thị nội dung trong thẻ đó. 

## HTML Document
Có 3 thẻ bắt buộc cần có trong tài liệu HTML: <html>, <head> và <body>.
> <!DOCTYPE> giúp trình duyệt biết được phiên bản của tài liệu HTML hiện tại. (HTML5, HTML4 & XHTML). (not case sensitive).

- <html> tag đại diện cho gốc của tài liệu HTML. thẻ <html> là thẻ chứa tất cả các thẻ khác trong tài liệu HTML (trừ <!DOCTYPE>) .

- <head> là tag chứa các metadata của tài liệu HTML như charset, styles, scripts. Tag này nằm giữa <html> và <body>.
 * <style>: 

- <body> là tag đại diện cho phần thân của tài liệu HTML. chứa tất cả các nội dung chính như tiêu đề, hình ảnh, v.v...

## HTML Elements
Phần tử HTML có thể có end tag hoặc không (<br>)

### Thuộc tính phần tử HTML
Một phần tử HTML có thể đi kèm với các thuộc tính do người viết định sẵn thay cho các thuộc tính mặc định ngầm định. 

Thuộc tính luôn được ghi ra ở thẻ bắt đầu. Có định dạng name=value. Một số thuộc tính phổ biến: href, id, class, style, value, ...

### Quan hệ giữa các phần tử
- không được phép overlap
### Phần tử inline & block
Phần tử inline không bắt đầu trên một dòng mới và độ rộng vừa đủ với nội dung.


### Tables
- <table> tag đại diện cho một bảng HTML.
- <tr> tag đại diện cho một hàng trong bảng.
- <th> tag đại diện cho một tiêu đề trong bảng.
- <td> tag đại diện cho một ô trong bảng.


### Ký tự đặc biệt
Một vài ký tự như <, > và & có ý nghĩa đặc biệt trong tài liệu HTML. Vì vậy để tránh nhầm lẫn với HTML code khi sử dụng những ký tự này thì ta sử dụng cách thể hiện khác:
<=&lt , >=&gt, ""=&quot, &=&amp

### Colors
Màu trong tài liệu HTML: thập lục phân

### Forms

Form là một phần quan trọng trong tài liệu HTML. Nó cho phép người dùng nhập dữ liệu và gửi dữ liệu đó đến một trang web khác. Các phần tử trong form có thể là các input fields, checkboxes, radio buttons, submit buttons, menus, v.v...
Các đoạn mã phía client sẽ xử lý dữ liệu đó và gửi nó đến server nếu cần thiết.

- <form> tag đại diện cho một form HTML.
- <input> tag đại diện cho một input field trong form.
- <label> tag đại diện cho một label của một input field.
- <select> tag đại diện cho một drop-down list.
- <option> tag đại diện cho một option trong drop-down list.
- <textarea> tag đại diện cho một multi-line input field.
- <button> tag đại diện cho một button.

Method: GET, POST
- GET: dữ liệu được gửi trong URL
- POST: dữ liệu được gửi trong body của request

Action: URL đến điểm nhận dữ liệu (chương trình server-side hoac file HTML)



# CSS
# JS