import {useState,useEffect} from 'react';
const useWindowWidth = () =>{
    const [windowWidth, setWindowWidth] = useState(0);

    const windowWidthChange = (e) =>{
        setWindowWidth(e.target.innerWidth);
    };

    const windowWidthOnLoad = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        windowWidthOnLoad();
        window.addEventListener('resize', windowWidthChange);
        return () => window.removeEventListener('resize', windowWidthChange);
    }, []);

    return windowWidth;
}
export default useWindowWidth;