

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center text-center text-black">
            <div>
                <h2 className="text-5xl font-poppins text-primary">Oops!</h2>
                <p className=" py-4">Page not Found</p>
                <a className="btn btn-primary text-white" href="/">Back Home</a>
            </div> 
        </div>  
    );   
};

export default ErrorPage;