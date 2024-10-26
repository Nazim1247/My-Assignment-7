
import image from '../assets/image/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-black pt-32 relative'>
            <div className='w-8/12 mx-auto border-2 solid rounded-md absolute left-[200px] bottom-[420px]'>
            <div className="w-8/12 mx-auto text-center space-y-2 news-later">
            <h3 className="text-2xl font-bold">Subscribe to our Newsletter</h3>
            <p className="text-gray-400">Get the latest updates and news right in your inbox!</p>
            <div className="py-3 space-x-3">
                    <input className="py-1 px-2 shadow rounded-md" type="text" placeholder="Enter Your Email" />
                    <button className="bg-orange-300 text-black py-1 px-2 rounded-md">Subscribe</button>
                </div>
        </div>
        </div>
            <div>
            <img className='mx-auto' src={image} alt="" />
            </div>
        <div className="grid md:grid-cols-3 px-4 md:p-12 text-white space-y-5 md:space-y-0">
            <div>
                <h3>About Us</h3>
                <p className="text-gray-400 mt-2">We are a passionate team dedicated to providing the best services to our customers.</p>
            </div>
            <div className="text-gray-400 space-y-3">
                <h3 className="text-white mb-2">Quick Links</h3>
                <li>Home</li>
                <li>Service</li>
                <li>About</li>
                <li>Contact</li>
            </div>
            <div>
                <h3>Subscribe</h3>
                <p className="text-gray-400 mt-2">Subscribe to our newsletter for the latest updates.</p>
                <div className="py-3">
                    <input className="pl-2 rounded-l-md" type="text" placeholder="Enter Your Email" />
                    <button className="bg-orange-300 text-black md:px-2 rounded-r-md">Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;