import {Link} from 'react-router-dom';
import applogo from '../../img/download.png'
const Header= ( {
    heading,
    paragraph,
    linkName,
    linkUrl="#"
})=>{
    return(
        <div className="mb-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14 mt-7"
                    src={applogo}/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-blue">
                {heading}
            </h2>
            <p className="mt-2 text-center text-sm text-blue mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-blue-800 hover:text-black-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
};
export default Header;