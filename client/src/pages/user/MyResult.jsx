import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Result = () => {
  const [data, setData] = useState([])
  const userId = localStorage.getItem('userId')

  const handleFetch = async () => {
    try {
      // const res = await axios.get(`http://localhost:5000/api/exams/examinee-result/${userId}`)   ye local sys ke liye link
      const res = await axios.get(`https://online-examination-system-2-q8o7.onrender.com/api/exams/examinee-result/${userId}`)
      // Ensure we always have an array to map over
      setData(res.data.message ? (Array.isArray(res.data.message) ? res.data.message : [res.data.message]) : [])
    } catch (err) {
      console.error('Error fetching results:', err)
      setData([])
    }
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div className="row mt-1">
      <div className="col-sm-12">
        <div
          className="card mx-auto mt-2"
          style={{ border: "1px solid #2e18d4ff", width: "100%" }}
        >
          <div className="card-body">
            <h3 className="fw-bold" style={{ color: "#2446daff" }}>
              Examinee Results
            </h3>
            <br/>
            <table className="table table-bordered text-center">
              <thead className="table-primary">
                <tr>
                  <td>S.N</td>
                  <td>Exam Name</td>
                  <td>Your Name</td>
                  <td>Total Marks</td>
                  <td>Score</td>
                  <td>Passing Marks</td>
                  <td>Status</td>
                  <td>Date</td>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr>
                    <td colSpan="8">No results found</td>
                  </tr>
                ) : (
                  data.map((item, i) => (
                    <tr key={item?._id || i}>
                      <td>{i + 1}</td>
                      <td>{item?.examId?.title || "N/A"}</td>
                      <td>{item?.examineeId?.name || "N/A"}</td>
                      <td>{item?.totalMarks || 0}</td>
                      <td>{item?.score || 0}</td>
                      <td>{item?.passingMarks || 0}</td>
                      <td>
                        {["pass", "passed"].includes(item?.status?.toLowerCase()) ? (
                          <span className="badge bg-success">{item?.status}</span>
                        ) : ["fail", "failed"].includes(item?.status?.toLowerCase()) ? (
                          <span className="badge bg-danger">{item?.status}</span>
                        ) : (
                          <span className="badge bg-secondary">{item?.status || "N/A"}</span>
                        )}
                      </td>
                      <td>
                        {item?.createdAt
                          ? new Date(item.createdAt).toLocaleString()
                          : "N/A"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Result