import { Button } from "react-bootstrap";
import AdminServices from "../../Services/AdminServices";
import * as React from "react";
import download from "downloadjs";

const EmployeeListSub = ({ employeeData }) => {
  const downloadResume = () => {
    AdminServices.getResumeById(employeeData.employeeId)
      .then((response) => {
        /*//console.log("response -->"+JSON.parse(response));
     console.log(response.headers);
     //console.log(JSON.parse(response));
     // response.blob;


        const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download","img.jpeg"); //or any other extension
    document.body.appendChild(link);
    link.click();
      // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  */
        // create file link in browser's memory
        /*  const href = URL.createObjectURL(new Blob([response.data]));

    // create "a" HTLM element with href to file & click
    const link = document.createElement('a');
    link.href = href;
    link.setAttribute('download', 'Lab Exam.docx'); //or any other extension
    document.body.appendChild(link);
    link.click();

    // clean up "a" element & remove ObjectURL
    document.body.removeChild(link);
    URL.revokeObjectURL(href);

*/
        /*
    const cd=response.headers['filename']
    const type = response.headers['content-type']
    console.log(type);
    console.log(cd);
    let fileName = response.headers["Content-Disposition"].split("filename=")[1];
    if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE variant
        window.navigator.msSaveOrOpenBlob(new Blob([response.data],
                { type: type }
            ),
            fileName
        );
    } else {
        const url = window.URL.createObjectURL(new Blob([response.data],
            { type: type }));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download',
            response.headers["Content-Disposition"].split("filename=")[1]);
        document.body.appendChild(link);
        link.click();
    }
  */

        // const type = response.headers['content-type']

        // const cd=response.headers['content-disposition']
        //const cd2=response.headers['filename']
        //console.log(response.data);
        //console.log(type);
        //console.log(response.headers);
        // console.log(response.data);
        //    const reader = new FileReader();
        //     const blob = new Blob([response.data])

        //     const data = reader.readAsDataURL(blob);

        // console.log(data);

        //     const link = document.createElement('a')
        //     link.href = window.URL.createObjectURL(data)
        //     console.log(link.href);
        //     link.download = 'abc.pdf'
        //     link.click()

        // document.body.removeChild(link);
        // URL.revokeObjectURL(link.href);
        var bytes = new Uint8Array(response.data)
        //var sampleArr = base64ToArrayBuffer(response.data);
        //saveByteArray("Sample Report", sampleArr);

        // console.log(response.headers);
         const blob = new Blob([bytes], { type: "application/pdf" });
        // console.log(blob.text());

        // let reader = new FileReader();

        const content = response.headers["content-type"];
        //console.log(response);
        download(blob, "abc.pdf", content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function base64ToArrayBuffer(base64) {
    var binaryString = window.atob(base64);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
       var ascii = binaryString.charCodeAt(i);
       bytes[i] = ascii;
    }
    return bytes;
 }

 function saveByteArray(reportName, byte) {
  var blob = new Blob([byte], {type: "application/pdf"});
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
};

  return (
    <div className="col-5">
      <div className="card">
        <div className="card__title">Name: {employeeData.name}</div>

        <div className="card__body">
          <table className="table  table-striped">
            <tr>
              <th>Name :</th>
              <td>{employeeData.employeeName}</td>
            </tr>
            <tr>
              <th>Id:</th>
              <td>{employeeData.employeeId}</td>
            </tr>
            <tr>
              <th>Designation:</th>
              <td>{employeeData.designation}</td>
            </tr>
            <tr>
              <th>Date of Joining:</th>
              <td>{employeeData.dateOfJoining}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{employeeData.email}</td>
            </tr>

            <tr>
              <th>Gender:</th>
              <td>{employeeData.gender}</td>
            </tr>

            <tr>
              <th rowspan={employeeData.skills.length + 1}>Skills:</th>
              <td></td>
            </tr>

            {employeeData.skills.map((technology) => (
              <tr>
                <td>{technology.technologyId.technologyName}</td>
              </tr>
            ))}
          </table>

          <Button className="project-sub-button1" onClick={downloadResume}>
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListSub;
