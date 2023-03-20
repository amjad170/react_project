import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AllCourses = () => {
    
  const [product, setProduct] = useState([]);

  console.log(product);

  useEffect(() => {
    allprod();
  }, []);
  const allprod = async () => {
    axios
      .get(
         "http://localhost/react_men_salon_project/salon_project/api/courses/allcourses.php"
        // "api/courses/allcourses.php"
      )
      .then((res) => {
        setProduct(res.data.datas.pr);
      });
  };

//   const delconfirm = (id) => {
//     delprod(id);
//   };

//   const delprod = async (id) => {
//     axios
//       .post(
//         "http://localhost/wdpf51_reactjs/22nov2022/reactapp2/api/delproduct.php",
//         {
//           prodid: id,
//         }
//       )
//       .then((res) => {
//         alert(res.data.msg);
//         allprod();
//       });
//   };

  return (
    <div className="col-sm-8 container">
      <h2 className="bg-dark text-light text-center">All Products</h2>
      <br></br>
      <br></br>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Details</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={item.ID}>
              <td>{index + 1}</td>
              <td>{item.ServiceName}</td>
              <td>{item.Description}</td>
              <td>{item.Cost}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      {/* <Link to="/products/add" className="btn btn-secondary"> */}
        {/* Add new product */}
      {/* </Link> */}
    </div>
  );
};

export default AllCourses;




