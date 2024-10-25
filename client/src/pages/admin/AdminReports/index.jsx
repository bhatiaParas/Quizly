// import React from "react";
// import PageTitle from "../../../components/PageTitle";
// import { message, Table } from "antd";
// import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
// import { getAllReports } from "../../../apicalls/reports";
// import { useEffect } from "react";
// import moment from "moment";

// function AdminReports() {
//   const [reportsData, setReportsData] = React.useState([]);
//   const dispatch = useDispatch();
//   const [filters, setFilters] = React.useState({
//     examName: "",
//     userName: "",
//   });
//   const columns = [
//     {
//       title: "Exam Name",
//       dataIndex: "examName",
//       render: (text, record) => <>{record.exam.name}</>,
//     },
//     {
//       title: "User Name",
//       dataIndex: "userName",
//       render: (text, record) => <>{record.user.name}</>,
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       render: (text, record) => (
//         <>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</>
//       ),
//     },
//     {
//       title: "Total Marks",
//       dataIndex: "totalQuestions",
//       render: (text, record) => <>{record.exam.totalMarks}</>,
//     },
//     {
//       title: "Passing Marks",
//       dataIndex: "correctAnswers",
//       render: (text, record) => <>{record.exam.passingMarks}</>,
//     },
//     {
//       title: "Obtained Marks",
//       dataIndex: "correctAnswers",
//       render: (text, record) => <>{record.result.correctAnswers.length}</>,
//     },
//     {
//       title: "Verdict",
//       dataIndex: "verdict",
//       render: (text, record) => <>{record.result.verdict}</>,
//     },
//   ];

//   const getData = async (tempFilters) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await getAllReports(tempFilters);
//       if (response.success) {
//         setReportsData(response.data);
//       } else {
//         message.error(response.message);
//       }
//       dispatch(HideLoading());
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getData(filters);
//   }, []);

//   return (
//     <div>
//       <PageTitle title="Reports" />
//       <div className="divider"></div>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           placeholder="Exam"
//           value={filters.examName}
//           onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
//         />
//         <input
//           type="text"
//           placeholder="User"
//           value={filters.userName}
//           onChange={(e) => setFilters({ ...filters, userName: e.target.value })}
//         />
//         <button
//           className="primary-outlined-btn"
//           onClick={() => {
//             setFilters({
//               examName: "",
//               userName: "",
//             });
//             getData({
//               examName: "",
//               userName: "",
//             });
//           }}
//         >
//           Clear 
//         </button>
//         <button className="primary-contained-btn" onClick={() => getData(filters)}>
//           Search
//         </button>
//       </div>
//       <Table columns={columns} dataSource={reportsData} className="mt-2" />
//     </div>
//   );
// }

// export default AdminReports;


// import React, { useEffect } from "react";
// import PageTitle from "../../../components/PageTitle";
// import { message, Table } from "antd";
// import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
// import { getAllReports } from "../../../apicalls/reports";
// import moment from "moment";

// function AdminReports() {
//   const [reportsData, setReportsData] = React.useState([]);
//   const dispatch = useDispatch();
//   const [filters, setFilters] = React.useState({
//     examName: "",
//     userName: "",
//   });

//   const columns = [
//     {
//       title: "Exam Name",
//       dataIndex: "examName",
//       render: (text, record) => <span>{record.exam.name}</span>,
//     },
//     {
//       title: "User Name",
//       dataIndex: "userName",
//       render: (text, record) => <span>{record.user.name}</span>,
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       render: (text, record) => (
//         <span>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</span>
//       ),
//     },
//     {
//       title: "Total Marks",
//       dataIndex: "totalQuestions",
//       render: (text, record) => <span>{record.exam.totalMarks}</span>,
//     },
//     {
//       title: "Passing Marks",
//       dataIndex: "correctAnswers",
//       render: (text, record) => <span>{record.exam.passingMarks}</span>,
//     },
//     {
//       title: "Obtained Marks",
//       dataIndex: "correctAnswers",
//       render: (text, record) => <span>{record.result.correctAnswers.length}</span>,
//     },
//     {
//       title: "Verdict",
//       dataIndex: "verdict",
//       render: (text, record) => <span>{record.result.verdict}</span>,
//     },
//   ];

//   const getData = async (tempFilters) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await getAllReports(tempFilters);
//       if (response.success) {
//         setReportsData(response.data);
//       } else {
//         message.error(response.message);
//       }
//       dispatch(HideLoading());
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getData(filters);
//   }, []);

//   return (
//     <div className="p-6 bg-gray-50 rounded-lg shadow-lg">
//       <PageTitle title="Reports" />
//       <div className="border-b border-gray-300 my-4"></div>
//       <div className="flex gap-4 mb-4">
//         <input
//           type="text"
//           placeholder="Exam"
//           value={filters.examName}
//           onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
//           className="p-2 border border-gray-300 rounded-lg w-full"
//         />
//         <input
//           type="text"
//           placeholder="User"
//           value={filters.userName}
//           onChange={(e) => setFilters({ ...filters, userName: e.target.value })}
//           className="p-2 border border-gray-300 rounded-lg w-full"
//         />
//         <button
//           className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200"
//           onClick={() => {
//             setFilters({ examName: "", userName: "" });
//             getData({ examName: "", userName: "" });
//           }}
//         >
//           Clear
//         </button>
//         <button
//           className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//           onClick={() => getData(filters)}
//         >
//           Search
//         </button>
//       </div>
//       <Table
//         columns={columns}
//         dataSource={reportsData}
//         className="mt-4 border border-gray-200 rounded-lg shadow-sm"
//       />
//     </div>
//   );
// }

// export default AdminReports;


// import React, { useEffect } from "react";
// import PageTitle from "../../../components/PageTitle";
// import { message, Table } from "antd";
// import { useDispatch } from "react-redux";
// import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
// import { getAllReports } from "../../../apicalls/reports";
// import moment from "moment";

// function AdminReports() {
//   const [reportsData, setReportsData] = React.useState([]);
//   const dispatch = useDispatch();
//   const [filters, setFilters] = React.useState({
//     examName: "",
//     userName: "",
//   });

//   const columns = [
//     {
//       title: "Exam Name",
//       dataIndex: "examName",
//       render: (text, record) => <span>{record.exam.name}</span>,
//     },
//     {
//       title: "User Name",
//       dataIndex: "userName",
//       render: (text, record) => <span>{record.user.name}</span>,
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       render: (text, record) => (
//         <span>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</span>
//       ),
//     },
//     {
//       title: "Total Marks",
//       dataIndex: "totalQuestions",
//       render: (text, record) => <span>{record.exam.totalMarks}</span>,
//     },
//     {
//       title: "Passing Marks",
//       dataIndex: "correctAnswers",
//       render: (text, record) => <span>{record.exam.passingMarks}</span>,
//     },
//     {
//       title: "Obtained Marks",
//       dataIndex: "correctAnswers",
//       render: (text, record) => <span>{record.result.correctAnswers.length}</span>,
//     },
//     {
//       title: "Verdict",
//       dataIndex: "verdict",
//       render: (text, record) => <span>{record.result.verdict}</span>,
//     },
//   ];

//   const getData = async (tempFilters) => {
//     try {
//       dispatch(ShowLoading());
//       const response = await getAllReports(tempFilters);
//       if (response.success) {
//         setReportsData(response.data);
//       } else {
//         message.error(response.message);
//       }
//       dispatch(HideLoading());
//     } catch (error) {
//       dispatch(HideLoading());
//       message.error(error.message);
//     }
//   };

//   useEffect(() => {
//     getData(filters);
//   }, []);

//   return (
//     <div className="p-8 bg-gradient-to-b from-indigo-600 to-purple-500 min-h-screen text-white">
//       <PageTitle title="Reports" className="text-3xl font-bold text-center text-white mb-8" />
//       <div className="flex gap-4 mb-8">
//         <input
//           type="text"
//           placeholder="Exam"
//           value={filters.examName}
//           onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
//           className="p-3 border border-gray-300 rounded-lg w-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />
//         <input
//           type="text"
//           placeholder="User"
//           value={filters.userName}
//           onChange={(e) => setFilters({ ...filters, userName: e.target.value })}
//           className="p-3 border border-gray-300 rounded-lg w-full bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
//         />
//         <button
//           className="bg-white text-indigo-600 font-semibold px-4 py-2 rounded-lg hover:bg-indigo-100 transition"
//           onClick={() => {
//             setFilters({ examName: "", userName: "" });
//             getData({ examName: "", userName: "" });
//           }}
//         >
//           Clear
//         </button>
//         <button
//           className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 transition"
//           onClick={() => getData(filters)}
//         >
//           Search
//         </button>
//       </div>
//       <Table
//         columns={columns}
//         dataSource={reportsData}
//         className="mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
//         pagination={{ pageSize: 5 }}
//       />
//     </div>
//   );
// }

// export default AdminReports;



import React, { useEffect } from "react";
import PageTitle from "../../../components/PageTitle";
import { message, Table } from "antd";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../../redux/loaderSlice";
import { getAllReports } from "../../../apicalls/reports";
import moment from "moment";

function AdminReports() {
  const [reportsData, setReportsData] = React.useState([]);
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({
    examName: "",
    userName: "",
  });

  const columns = [
    {
      title: "Exam Name",
      dataIndex: "examName",
      render: (text, record) => <span>{record.exam.name}</span>,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      render: (text, record) => <span>{record.user.name}</span>,
    },
    {
      title: "Date",
      dataIndex: "date",
      render: (text, record) => (
        <span>{moment(record.createdAt).format("DD-MM-YYYY hh:mm:ss")}</span>
      ),
    },
    {
      title: "Total Marks",
      dataIndex: "totalQuestions",
      render: (text, record) => <span>{record.exam.totalMarks}</span>,
    },
    {
      title: "Passing Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <span>{record.exam.passingMarks}</span>,
    },
    {
      title: "Obtained Marks",
      dataIndex: "correctAnswers",
      render: (text, record) => <span>{record.result.correctAnswers.length}</span>,
    },
    {
      title: "Verdict",
      dataIndex: "verdict",
      render: (text, record) => <span>{record.result.verdict}</span>,
    },
  ];

  const getData = async (tempFilters) => {
    try {
      dispatch(ShowLoading());
      const response = await getAllReports(tempFilters);
      if (response.success) {
        setReportsData(response.data);
      } else {
        message.error(response.message);
      }
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData(filters);
  }, []);

  return (
    <div className="p-8 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen text-gray-100">
      <PageTitle title="Reports" className="text-3xl font-bold text-center  mb-8" />
      <div className="flex gap-4 mb-8">
        <input
          type="text"
          placeholder="Exam"
          value={filters.examName}
          onChange={(e) => setFilters({ ...filters, examName: e.target.value })}
          className="p-3 border border-white  rounded-xl w-full bg-gray-700 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <input
          type="text"
          placeholder="User"
          value={filters.userName}
          onChange={(e) => setFilters({ ...filters, userName: e.target.value })}
          className="p-3 border  rounded-lg w-full bg-gray-700 text-gray-300 placeholder-white focus:outline-none focus:ring-2 focus:ring-primary transition"
        />
        <button
          className="bg-gray-100 text-gray-800 font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition"
          onClick={() => {
            setFilters({ examName: "", userName: "" });
            getData({ examName: "", userName: "" });
          }}
        >
          Clear
        </button>
        <button
          className="bg-primary text-white font-semibold px-4 py-2 rounded-lg hover:bg-primary-dark transition"
          onClick={() => getData(filters)}
        >
          Search
        </button>
      </div>
      <Table
        columns={columns}
        dataSource={reportsData}
        className="mt-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
}

export default AdminReports;
