

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex items-center justify-center">
            <div>
                <h2 className="text-5xl font-poppins text-primary">Oops!</h2>
                <p className="text-white py-4">Page not Found</p>
                <a className="btn btn-primary" href="/">Back Home</a>
            </div>
        </div>
    );
};

export default ErrorPage;