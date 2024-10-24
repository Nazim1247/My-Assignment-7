
import image from '../assets/image/logo-footer.png'
const Footer = () => {
    return (
        <div className='bg-black pt-32'>
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