
import './Banner.css'
const NewsLater = () => {
    return (
        <div className='w-8/12 mx-auto border-2 solid rounded-md relative'>
            <div className="w-8/12 mx-auto text-center space-y-2 news-later">
            <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
            <p className="text-gray-400">Get the latest updates and news right in your inbox!</p>
            <div className="py-3 space-x-3">
                    <input className="py-1 px-2 shadow rounded-md" type="text" placeholder="Enter Your Email" />
                    <button className="bg-orange-300 text-black py-1 px-2 rounded-md">Subscribe</button>
                </div>
        </div>
        </div>
    );
};

export default NewsLater;