
import loader from "./puff.svg"

const Alert = {
    Error: ({ status }) => {
      return (
        status && (
          <div className="bg-redColor pr-10 bg-opacity-25 pl-2 py-2 border-redColor border-l-8 flex justify-center">
            Transaction could not be completed - please try again
            <i className="fas fa-times"></i>
          </div>
        )
      );
    },
    Cancelled: ({ status }) => {
      return (
        status && (
          <div className="bg-yelColor pr-10 bg-opacity-25 pl-2 py-2 border-yelColor border-l-8 flex justify-center">
            Transaction cancelled
          </div>
        )
      );
    },
    Confirmed: ({ status }) => {
      return (
        status && (
          <div className="bg-greenColor pr-10 bg-opacity-25 pl-2 py-2 border-greenColor border-l-8 flex justify-center align-middle">
                <span className="my-auto">
                    Thank you for your order ❤️ - You will be redirected in a few seconds ...
               </span>  
            <img className="ml-5" src={loader} className="" alt="loader" />
          </div>
        )
      );
    },
  };
  export default Alert;