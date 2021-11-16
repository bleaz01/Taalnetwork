import React,{useState} from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import Alert, {Error , Confirmed, Cancelled } from './Alert';
import { useHistory } from "react-router-dom";



const client = {
    sandbox: "AZIw8rY3GPDV9K-GIgjlrrE2z-il-Wy1UAgv6CaDlx6fOmwTUCJdsQFwxuOKCLc25b-rMyEcJR15H1Pm",
    production:"clienId",
    env:"sandbox"
}

const STATUS ={
    PENDING :"pending",
    COMPLETE :"complete",
    CONFIRMED :"confirmed",
    CANCELLED :"cancelled",
    FAILED:"failed"
}

const CardPricing = () => {

    const [status, setStatus] = useState("")
    const history = useHistory()

    const onSuccess = (payment) => {
            setStatus(STATUS.CONFIRMED)
                console.log("The payment was succeeded!", payment);
                setTimeout(() =>{
                    history.push("/")
                }, 2000)
                // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    }
    
    const onCancel = (data) => {
        setStatus(STATUS.CANCELLED)
        console.log('The payment was cancelled!', data);
        // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    }
    
    const onError = (err)  => {
        setStatus(STATUS.FAILED)
        console.log("Error!", err);
       
       
        // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
        // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    }

    return (
        <div className="min-h-screen flex justify-center mx-auto items-center">
            <div className="flex flex-col">

            
            <div className="flex flex-row">
                {/* <!-- Basic Card --> */}
                <div className="w-96 p-8 bg-whiteColor text-center rounded-3xl pr-16 shadow-xl">
                    <h1 className="text-baseColor font-semibold text-2xl">Month</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">€ </span>
                        <span className="text-3xl font-semibold">9.99</span>
                    </p>
                    <hr className="mt-4 border-1"/>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className=" pl-2 material-icons align-middle">
                                Create  <span className="text-baseColor">exercise / test</span> 
                            </span>
                       
                         
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                          
                            <span className="pl-2">
                            <span className="text-baseColor">Access all </span> exercise and test
                            </span>
                         
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
    
                            <span className="pl-2">
                                Be montoring 
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="pl-2">
                                Flexible <span className="text-baseColor">abonement</span>
                            </span>
                        </p>
                        <div className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">

                        <PaypalExpressBtn env={client.env} client={client} currency={"EUR"} total={9.99} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                            </div>
                    </div>
                </div>
                {/* <!-- StartUp Card --> */}
                <div className="w-80 p-8 bg-baseColor text-center rounded-3xl text-whiteColor border-4 shadow-xl border-white transform scale-125">
                    <h1 className="text-whiteColor font-semibold text-2xl">Year</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">€ </span>
                        <span className="text-3xl font-semibold">100</span>
                    </p>
                    <hr className="mt-4 border-1 border-gray-600"/>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="pl-2 material-icons align-middle">
                                Create exercises / test
                            </span>
                            
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="pl-2">
                                Access all  <span className="text-greenColor">exercise / test</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className=" pl-2 material-icons align-middle">
                                Be Mentoring 
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            
                            <span className="pl-2">
                                2 month <span className="text-whiteColor">free</span>
                            </span>
                        </p>
                        <div className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">

                        <PaypalExpressBtn env={client.env} client={client} currency={"EUR"} total={100.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />
                          </div>
                    </div>
                    <div className="absolute top-4 right-4">
                        <p className="bg-blue-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">Popular</p>
                    </div>
                </div>
                {/* <!-- Enterprise Card --> */}
                <div className="w-96 p-8 bg-whiteColor text-center rounded-3xl pl-16 shadow-xl">
                    <h1 className="text-baseColor font-semibold text-2xl">Enterprise</h1>
                    <p className="pt-2 tracking-wide">
                        <span className="text-gray-400 align-top">€ </span>
                        <span className="text-3xl font-semibold">150</span>
                        <span className="text-gray-400 font-medium">/month</span>
                    </p>
                    <hr className="mt-4 border-1"/>
                    <div className="pt-8">
                        <p className="font-semibold text-gray-400 text-left">
                            <span className="pl-2">
                                Access all exercise / test<span className="pl-2 text-baseColor">for our employes</span>
                            </span>
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="pl-2 material-icons align-middle">
                                Mentoring free 
                            </span>
                           
                        </p>
                        <p className="font-semibold text-gray-400 text-left pt-5">
                            <span className="pl-2">
                                <span className="text-baseColor">Unlimited</span> access
                            </span>
                        </p>
                            <div className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                <PaypalExpressBtn env={client.env} client={client} currency="EUR" total={150.00} onError={onError} onSuccess={onSuccess} onCancel={onCancel} />

                            </div>
                          
                    </div>
                </div>
             
            </div>
           
           
           <div className="pt-16">
                <Alert.Cancelled status={status === STATUS.CANCELLED}/>
                <Alert.Error status={status === STATUS.FAILED}/>
                <Alert.Confirmed status={status === STATUS.CONFIRMED}/>
           </div>
           
            </div>
        </div>
        
    )
}

export default CardPricing
